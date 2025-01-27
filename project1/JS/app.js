// let name=prompt("Enter your Name");
// let age=prompt("Enter your age");
// alert(`${name} is ${age} year old`)

// let quater = prompt("enter which quater");
// switch (quater) {
//     case "1":
//         console.log("January,february,march");
//         break;
//     case "2":
//         console.log("april,may,june");
//         break;
//     case "3":
//         console.log("july,august,september");
//         break;
//     case "4":
//         console.log("october,november,december");
//         break;
//     default:
//         console.log("not a valid quater");
// }

// let str="Amankuamr";
// if((str[0]==="A" || str[0]==="a") && str.length>5){
//     console.log("A golden string");
// }
// else{
//     console.log("not a goldennnnn string");
// }

// let num1=prompt("enter 1st number");
// let num2=prompt("enter 2nd number");
// let num3=prompt("enter 3rd number");
// if(num2>num1 ){
//     num2=num2;
// }else{
//     num2=num1;
// }

// if(num3>num2){
//     console.log(`greatest number is ${num3}`);
// }else{
//     console.log(`greatest number is ${num2}`)
// }

// let num1=prompt("enter 1st number");
// let num2=prompt("enter 2nd number");
// if(num1[num1.length-1]===num2[num2.length-1]){
//     console.log("both have same last digit");
// }else{
//     console.log("not have same");
// }

// let arr=[1,2,3,4,5,6,7,8,9,20];
// let value=prompt("Enter the number");
// // let n=2;
// let arr1=arr.slice(-value);
// console.log(arr1);

// let str=prompt("Enter the string");
// if(str.length===0){
//     console.log("string is empty");
// }else{
//     console.log("string is not empty");
// }

// let str=prompt("enter the string");
// let index=prompt("enter at the index at which you want to check the character");
// if(str[index]===str[index].toLowerCase()){
//     console.log("It is lower case");
// }else{
//     console.log("It is upper case");
// }

// let str=prompt("enter the string");
// console.log(str.trim());

// let arr=['a','b','c','d','e','f'];
// let check=prompt("enter element");
// if(arr.indexOf(check)!=-1){
//     console.log("element exist");
// }else{
//     console.log("element doesnot exist");
// }

// //to do app
// let todo=[];

// let input=prompt("enter the operation to perform");

// while(true){
//     if(input=="quit"){
//         console.log("quitting the app");
//         break;
//     }

//     if(input=="list"){
//         console.log("--------");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("--------");
//     }else if(input=="delete"){
//         let index=prompt("enter the index of task to be deleted");
//         todo.splice(index,1);
//         console.log("task deleted");
//     }else if(input=="add"){
//         let task=prompt("enter task to be added");
//         todo.push(task);
//     }else{
//         console.log("wrong command");
//     }

//     input=prompt("enter the operation to perform");
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num=prompt("enter the num to be deleted");

// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]==num){
// //         arr.splice(i,1);
// //     }
// // }

// for(e of arr){
//     if(e==num){
//         arr.splice(arr.indexOf(e),1);
//     }
// }
// console.log(arr);

// let num=prompt("enter the number");
// let count=0;
// for(e of num){
//     count++;
// }
// console.log(`no. of digits are ${count}`);

// let num=prompt("enter the number");
// let sum=0;
// for(e of num){
//     sum=sum+parseInt(e);
// }
// console.log(`sum of digits is ${sum}`);

// let num=prompt("enter number of which factorial you want");
// let factorial=1;
// if(num==1 || num==0){
//     console.log("factorial is 1");
// }else{
//     for(let i=num;i>0;i--){
//         factorial=factorial*parseInt(i);
//     }
//     console.log(`factorial is ${factorial}`);
// }

// let arr=[1,2,3,5,6,7,9,100,1,2];
// let largest=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(`largest number is ${largest}`);

//guessing game
// let max=prompt("enter the max number so that you can assume a random number between 1 to max number")
// let random=Math.floor(Math.random()*max)+1;
// let user=prompt("enter your guess");
// while(true){
//     if(user=="quit"){
//         console.log("you quit");
//         break;
//     }

//     if(user==random){
//         console.log("hurrah! you got a correct guess");
//         break;
//     }else if(user<random){
//         alert("Hint!!!!")
//         console.log("your number is less");
//     }else{
//         alert("Hint!!!!")
//         console.log("your number is gretear");
//     }

//     user=prompt("again enter your guess");
// }
// console.log("random number after throw a dice");
// let random=Math.floor(Math.random()*6)+1;
// console.log(random);

// const car={
//     name: "ferrari",
//     model: "racecar",
//     color: "Red"
// };

// console.log(car.name);

// const person={
//     name: "Aman",
//     age: 19,
//     city: "delhi"
// };

// person.city="new york";
// person.country="United states";

// let arr=[1,3,4,5,3,6,3,66,7,4,9];
// let num=prompt("enter the number");

// function func(array,number){
//     let arr2=[];
//     for(let i=0;i<array.length;i++){
//         if(array[i]>number){
//             arr2.push(array[i]);
//         }
//     }
//     return arr2;
// }

// let arr2=func(arr,num);
// console.log(arr2);

// let str="abacaabaasbavsb";
// function uniquechr(string){
//     let ans="";
//     for(e of string){
//         let curr=e;
//         if(ans.indexOf(e)==-1){
//             ans+=curr;
//         }
//     }
//     return ans;
// }

// console.log(uniquechr(str));

// let country=["Australia","Germany","United states of America"];
// function longname(arr){
//     let max="";
//     for(let i=0;i<arr.length;i++){
//         if(max.length<arr[i].length){
//             max=arr[i];
//         }
//     }
//     return max;
// }

// console.log(longname(country));

// let str="aman";
// let vowelCount=function(str){
//     let count=0;
//     for(ele of str){
//         if(ele=="a" || ele=="e" || ele=="i" || ele=="o" || ele=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCount(str));

// let randomNumber=function(start,end){
//     return Math.floor(Math.random()*(end-start))+start;
// }

// console.log(randomNumber(2,6));
// let array=[1,2,3,4,5,6];
// let arrayAverage=arr => {
//     let avg=0;
//     for(e of arr){
//         avg+=e;
//     }
//     return avg/arr.length;
// }

// console.log(arrayAverage(array));

// let isEven=n => {
//     if(n%2==0){
//         return "it is even";
//     }else{
//         return "it is not even";
//     }
// }
// console.log(isEven(12));

// let arr=[1,2,3,4];
// let sumOfSquares=arr.reduce((sum,el)=> sum+(el*el));
// console.log(sumOfSquares);
// let avg=arr.reduce((avg,el)=> avg+el );
// console.log(avg/arr.length);

// let arr=[1,2,3,4];
// let square=arr.map((el)=> el*el);
// let sum=square.reduce((sum,el)=>sum+el);
// console.log(sum);
// console.log(sum/arr.length);

// let arr=[1,2,3,4,5];
// let newarr=arr.map((el)=> el+5);
// console.log(newarr);

// let arr=['a','b','c','d','e'];
// let newarr=arr.map((el)=> el.toUpperCase());
// console.log(newarr);

// let arr=["aman","alok","sharma","kumar"];
// let newarr=arr.map((el)=> el.toUpperCase());
// console.log(newarr);

// let arr=[1,2,3,4];
// function doubleAndReturnArgs(arr,...args){
//     const newarr=arr.map((el=>el));
//     newarr=args.map((el)=>el*2);
//     return newarr;
// }
// console.log(doubleAndReturnArgs(arr,1,2,3,4));

// let arr=[11,22,33,44];
// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((el)=>el*2)
// ];
// console.log(doubleAndReturnArgs(arr,2,3,4,5));

// let obj1={
//     name1:"Aman",
//     age1: 19
// }
// let obj2={
//     name2:"alok",
//     age2:20
// }
// let input=document.createElement("input");
// let button=document.createElement("button");

// input.type="text";
// input.placeholder="username";

// button.setAttribute("id","btn");
// button.innerText="Click me";

// let body=document.querySelector("body");
// body.prepend(input);
// body.prepend(button);

// let btn=document.querySelector("#btn");
// btn.classList.add("btnStyle");

// let h1=document.createElement("h1");
// h1.innerText="DOM PRACTICE";
// h1.innerHTML=`<u>${h1.innerText}</u>`;
// h1.setAttribute("class","head");
// h1.classList.add("chg");

// body.append(h1);


// let p=document.createElement("p");
// p.innerHTML="Apna College <b>Delta</b> Practice";

// body.append(p);
// // let heading=document.querySelector("h1");
// // heading.classList.add("purple");



// // const mergeObjects=(o1,o2)=>({...o1,...o2}) ;

// // console.log(mergeObjects(obj1,obj2)); 

// let inp=document.querySelector("input");
// inp.addEventListener("mouseout",function(event){
// console.dir(event);
// console.log("mouse outed successfully");
// })

// let inp=document.querySelector("img");
// inp.addEventListener("load",function(event){
// console.dir(event);
// console.log("image loaded successfully");
// })

// let btn=document.createElement("button");
// btn.innerText="button";
// btn.addEventListener("click",function(event){
//     console.dir(this);
//     this.classList.add("btnstyle");
// })

// let body=document.querySelector("body");
// body.append(btn);

// let inp=document.createElement("input");
// inp.placeholder="enter your name";

// let h2=document.createElement("h2");
// h2.textContent="your name will appear here";

// inp.addEventListener("input",function(){
//     let filter=this.value.replace(/[^a-zA-Z ]/g, '');
//     h2.textContent=filter;
// })

// let body=document.querySelector("body");
// body.append(inp);
// body.append(h2);

let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let l=document.createElement("li");
    l.innerText=inp.value;
    ul.appendChild(l);
    inp.value="";
})