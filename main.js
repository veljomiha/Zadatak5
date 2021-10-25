function mode1() {
    var element = document.body;
    element.classList.remove("theme-two");
    element.classList.remove("theme-three");
    document.getElementById("circle").style.backgroundColor="var(--color5)";
    document.getElementById("circle2").style.backgroundColor="var(--color2)";
    document.getElementById("circle3").style.backgroundColor="var(--color2)";
     var target = document.getElementById("circle");
        target.addEventListener("mouseover", mOver, false);
        target.addEventListener("mouseout", mOut, false);
        function mOver() {
        target.setAttribute("style", "background-color:#F96B5B;")
        }
        function mOut() {  
        target.setAttribute("style", "background-color:var(--color5);")
        }
}
circle.addEventListener("click",mode1)
theme1.addEventListener("click",mode1);


function mode2() {
    var element = document.body;
    element.classList.remove("theme-three");
    element.classList.add("theme-two");
    document.getElementById("circle").style.backgroundColor="var(--color2)";
    document.getElementById("circle2").style.backgroundColor="var(--color5)";
    document.getElementById("circle3").style.backgroundColor="var(--color2)";
    var target = document.getElementById("circle");
        target.addEventListener("mouseover", mOver, false);
        target.addEventListener("mouseout", mOut, false);
    function mOver() {
        target.setAttribute("style", "background-color:var(--color2);")
    }
    function mOut() {  
        target.setAttribute("style", "background-color:var(--color2);")
    }
 }
 circle2.addEventListener("click",mode2) 
 theme2.addEventListener("click",mode2) 

function mode3() {
    var element = document.body;
    element.classList.remove("theme-two");
    element.classList.add("theme-three");
    document.getElementById("circle").style.backgroundColor= "var(--color2)";
    document.getElementById("circle2").style.backgroundColor="var(--color2)";
    document.getElementById("circle3").style.backgroundColor="var(--color5)";
    var target = document.getElementById("circle");
        target.addEventListener("mouseover", mOver, false);
        target.addEventListener("mouseout", mOut, false);
    function mOver() {
        target.setAttribute("style", "background-color:var(--color2);")
    }
    function mOut() {  
        target.setAttribute("style", "background-color:var(--color2);")
    }
 }
 circle3.addEventListener("click", mode3);
 theme3.addEventListener("click", mode3);

 
// CALCULATOR

//Numbers
const num1 = document.querySelector(".num-one");
const num2 = document.querySelector(".num-two");
const num3 = document.querySelector(".num-three");
const num4 = document.querySelector(".num-for");
const num5 = document.querySelector(".num-five");
const num6 = document.querySelector(".num-six");
const num7 = document.querySelector(".num-seven");
const num8 = document.querySelector(".num-eight");
const num9 = document.querySelector(".num-nine");
const num0 = document.querySelector(".num-zero");

//Operations
const opAdd = document.querySelector(".oper-add");
const opSub = document.querySelector(".oper-sub");
const opMul = document.querySelector(".oper-mul");
const opDiv = document.querySelector(".oper-div");
const equal = document.querySelector(".btn-equal");
// const reset = document.querySelector(".btn-reset");
const reset = document.getElementById("reset");
const del = document.querySelector(".btn-del");
const dot = document.querySelector(".btn-dot"); 

const display = document.getElementById("display");

const numArray = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

let valueStrInMemory = null;
let operatorInMemory = null;


/*Function*/
function getDisplayValueAsString() {
    return display.textContent.split(',').join("");
}
function getDisplayValueAsFloat() {
    return parseFloat(getDisplayValueAsString());
}


function setStrAsValue(valueStr) {
    if(valueStr[valueStr.length-1]=== "."){
        display.textContent += ".";
        return;
    }
    const[wholeNumStr, decimalStr] = valueStr.split(".");
    if(decimalStr){
        display.textContent = parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
    }
    else{
        display.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
}


function numClick(numStr) {
    const currDisplay = getDisplayValueAsString();
     if((currDisplay == '0') ||(currDisplay == '+')||(currDisplay == '-')||(currDisplay == '*')||(currDisplay == '/')){
        setStrAsValue(numStr);
     }
     else{
        setStrAsValue(currDisplay + numStr);
     }
}
for(let i=0;i<numArray.length;i++){
    const num = numArray[i];
    function numm(){
        numClick(i.toString());
    }
    num.addEventListener("click", numm);
}


function dott() {
    const currDisplay = getDisplayValueAsString();
    if(!currDisplay.includes(".")){
        setStrAsValue(currDisplay + ".");
    }
};
dot.addEventListener("click", dott);


function resett(){
    setStrAsValue("0");
    valueStrInMemory = null;
    operatorInMemory = null;
}
reset.addEventListener("click", resett);


function dell(){
    const currDisplay = getDisplayValueAsString();
    if(currDisplay.length>0){
        // setStrAsValue(currDisplay.substring(0,currDisplay.length-1));
            display.textContent = currDisplay.substring(0,currDisplay.length-1);
    }
    else{
        setStrAsValue("0");
    }    
}
del.addEventListener("click", dell);

function getResult() {
    const currValueNum = getDisplayValueAsFloat();
    const valueNumInMemory = parseFloat(valueStrInMemory);

    let newValueNum;
    if(operatorInMemory === "oper-add"){
        newValueNum = valueNumInMemory + currValueNum;
    }else if(operatorInMemory === "oper-sub"){
        newValueNum = valueNumInMemory - currValueNum;
    }else if(operatorInMemory === "oper-mul"){
        newValueNum = valueNumInMemory * currValueNum;
    }else if(operatorInMemory === "oper-div"){
        newValueNum = valueNumInMemory / currValueNum;
    }
    // return newValueNum.toString().substring(0,10);
}

function operClick(operation){
    const currDisplay = getDisplayValueAsString();
    if(!valueStrInMemory) {
        valueStrInMemory = currDisplay;
        operatorInMemory = operation;
        setStrAsValue("0");
        return;
    }
    valueStrInMemory = getResult();
    operatorInMemory = operation;
    setStrAsValue('0');
};

function add(){
    operClick('oper-add');
}
opAdd.addEventListener("click", add);

function sub(){
    operClick('oper-sub');
}
opSub.addEventListener("click", sub)

function mul(){
    operClick('oper-mul');
}
opMul.addEventListener("click", mul);

function div(){
    operClick('oper-div');
}
opDiv.addEventListener("click", div)


function equall(){
    if(valueStrInMemory){
        setStrAsValue(getResult());
        valueStrInMemory=null;
        operatorInMemory=null;
    }
}
equal.addEventListener("click", equall);

