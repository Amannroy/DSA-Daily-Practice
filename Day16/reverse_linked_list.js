function reverseList(head) {
    let curr = head;
    let prev = null;

    while(curr !== null){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}