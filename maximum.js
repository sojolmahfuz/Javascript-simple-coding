// create a fabonacci series using for loop

function fabonacci(number){
    let a = 0;
    let b = 1;
    let c;

    for(let i=0; i<number; i++){
        c = a+b;
        a = b;
        b=c;
        console.log(c);
    }
}
fabonacci(5);