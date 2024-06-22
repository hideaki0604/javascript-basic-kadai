//3の倍数
let num = 15;

if((num % 3) === 0){
    console.log('3の倍数です');
}

//５の倍数
if((num % 5) === 0){
    console.log('5の倍数です');
}

//３と５の倍数
if((num % 3) === 0 && (num % 5) === 0){
    console.log('3と5の倍数です');
} else {
    console.log(num);
}

