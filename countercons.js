function Counter()
{
    this.count=0;
    this.increment=()=>{
        this.count++
    },
    this.decrement=()=>{
        this.count--;
    },
    this.reset=()=>{
        this.count=0;
    },
    this.displayCount=()=>{
        console.log(`Count : ${this.count}`)
    }
}
let counter1=new Counter();
console.log(counter1)
counter1.increment()
counter1.decrement()
counter1.reset()
counter1.displayCount