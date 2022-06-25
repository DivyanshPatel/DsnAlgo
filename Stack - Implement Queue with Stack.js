

class QueueWithStacks {
    constructor(){
        this.in = [];
        this.out = [];
    }

    enqueue(val){
        this.in.push(val);
    }

    dequeue(){
        if(this.out.length === 0 ){
            while(this.in.length){
                this.out.push(this.in.pop());
            }
        }
        return this.out.pop();
    }

    peek(){
        if(this.out.length === 0 ){
            while(this.in.length){
                this.out.push(this.in.pop())
            }
        }

        return this.out[this.out.length-1];
    }

    empty(){
        return this.out.length === 0 && this.in.length === 0 ;
    }
}