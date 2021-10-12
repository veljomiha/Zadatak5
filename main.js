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


 var buttons = document.body.querySelectorAll('.buttons > button');
 var output = document.querySelector('.window');
 
 // Assigned variables
 var operator = ['×', '/', '-', '+'];
 var input = '';
 var operatorFlag = false;
 var dotFlag = false;
 var equation = '';
 var result = '';
 var i;
 
 //Initiate event listener for all buttons objects
 for (i = 0; i < buttons.length; i++) {
     buttons[i].onclick = function (e) {
         var btnText = this.innerHTML;
         if (btnText === 'RESET') { // clear the screen
             input = '';
             operatorFlag = false;
             equation = '';
         } else if (btnText === 'DEL') { // delete one character
             input = input.slice(0, input.length - 1);
 
         } else if (btnText === '.') { // process the dot input
             if (input.indexOf('.') === -1 || dotFlag) { // only one dot is allowed
                 input += '.';
                 dotFlag = false;
             }
         } else if (btnText === '=') { // process the equation when equals button is pressed
             if (operator.indexOf(input[input.length - 1]) > -1) {
                 input = input.slice(0, input.length - 1);
             }
             equation = input.replace(/×/g, '*');
             equation = equation.replace(/÷/g, '/');
             result = Math.round(eval(equation)*1000000)/1000000;
             input = result;
             operatorFlag = true;
 
         } else if (operator.indexOf(btnText) > -1) { // process the operator input
             if (operatorFlag) {
                 input += btnText;
                 operatorFlag = false;
             } else {
                 input = input.slice(0, input.length - 1) + btnText;
             }
             dotFlag = true; // after operator character it is allowed to insert
                             // another dot in equation
         } else {
             if (result !== '' && operator.indexOf(input[input.length - 1]) > -1) {
                 input += btnText;
                 result = '';
             } else if (result !== '') {
                 input = btnText;
                 result = '';
             } else {
                 input += btnText;
             }
 
             operatorFlag = true;
         }
         // print the result on the screen
         output.innerHTML = input;
     }
 }
 


