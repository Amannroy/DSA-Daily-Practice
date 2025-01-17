function hasCycle(head) {
    let slow = head;
    let fast = head;

    if(!head || !head.next){
        return false;
    }

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow){
            return true;
        }
    }
    return false;
}