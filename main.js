//Bài 1:
/*
let inputArr=[];

let n;

do{
    n=Number(prompt("Nhập vào số mảng: "));
}
while(isNaN(n));

console.log(n);

for(let i=0;i<n;i++){
    inputArr[i] = prompt("Nhập vào chuỗi kí tự thứ " + (i+1) + ":");
}
let max=0;
let newArr=[];
for(let i=0;i<n;i++){
    if(max<inputArr[i].length){
        max=inputArr[i].length;
    }
}

for(i=0;i<n;i++){
    if(inputArr[i].length>=max){
        newArr.push(inputArr[i]);
    }
}

console.log(newArr);
*/

//Bài 2:
/*
let n;

do{
    n=Number(prompt("Nhập vào số lượng người tham gia: "));
}
while(isNaN(n));

let Arr=[];

for(let i=0; i<n;i++){
    do{
        Arr[i]=Number(prompt("Nhập vào cân nặng của người thứ " + (i+1) +" :"));
    }
    while(isNaN(Arr[i]));
}

let sum1 = 0, sum2 = 0;

for(let i = 0;i<n;i++){
    if(i%2===0){
        sum1+=Arr[i];
    }
    if(i%2!==0){
        sum2+=Arr[i]
    }
}

console.log("Tổng cân nặng đội 1 là:", sum1);

console.log("Tổng cân nặng đội 2 là:", sum2);
*/




const colors = ["green", "yellow", "red","blue", "pink", "green"]; 
const btn = document.querySelector(".btn");
pickColor = () => {
    const colorsIndex = Math.floor(Math.random() * colors.length);
    return colors[colorsIndex];
}

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = pickColor()
})