let lastStoneWeight = function(stones) {
    let maxPQ = new MaxPriorityQueue();

    for(const stone of stones){
        maxPQ.enqueue(stone);
    }

    while(maxPQ.size() > 1){
        let stone1 = maxPQ.dequeue().element;
        let stone2 = maxPQ.dequeue().element;

        if(stone1 !== stone2){
            maxPQ.enqueue(stone1 - stone2);
        }
    }
    return maxPQ.size() === 1 ? maxPQ.dequeue().element : 0; 
};

// TC = O(nlogn)
// SC = O(n)