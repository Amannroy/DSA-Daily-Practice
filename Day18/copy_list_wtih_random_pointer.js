function copyRandomList(head){
    if(!head) return null;

    let current = head;
    while(current){
        let newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }

    current = head;
    while(current){
        if(current.random){
            current.next.random = current.random.next;
            
        }
        current = current.next.next;
    }
    let original = head;
    let copy = head.next;
    let newHead = head.next;

    while(original){
        original.next = original.next.next;

        if(copy.next){
            copy.next = copy.next.next;
        }
        original = original.next;
        copy = copy.next;
    }
    return newHead;
}


// TC = 0(n)
// SC = 0(1)