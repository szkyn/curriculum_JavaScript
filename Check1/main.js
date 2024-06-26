class Car {
    constructor(gas,num) {
        this.gas=gas;
        this.number=num;
    }
getNumGas() {
    console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`)
    }
}

let jeep=new Car('ハイオク',1234)
jeep.getNumGas();


let numbers=[2,5,12,13,15,18,22]
function isEven(){
    for (let i=0; i<numbers.length; i++) {
        if(numbers[i]%2===0)  {
            let num=numbers[i];
            console.log(num+'は偶数です');
        }
    }
} isEven(2)