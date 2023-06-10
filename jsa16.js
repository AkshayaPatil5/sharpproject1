let multiply=function(x,y){
    console.log(x*y)

}

let multiplyBytwo = multiply.bind(this,2);
multiplyBytwo(5);