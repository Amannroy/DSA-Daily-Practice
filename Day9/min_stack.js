class MinStack {
    constructor() {
        this.a = [];
        this.b = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.a.push(val);
        if(this.b.length === 0 || this.b[this.b.length-1] >= val){
            this.b.push(val);
        }
        
    }

    /**
     * @return {void}
     */
    pop() {

        if(this.b[this.b.length-1] === this.a[this.a.length-1]){
            this.b.pop();
        }
        this.a.pop();
    }
      
    /**
     * @return {number}
     */
    top() {
        return this.a[this.a.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.b[this.b.length-1];
    }
}
