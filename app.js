let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let buttonAC = document.getElementById("buttonAC");
let buttonplus = document.getElementById("button+");
let buttonModules = document.getElementById("button%");
let buttonDivide = document.getElementById("button/");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let buttonx = document.getElementById("buttonx");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let buttonsubs = document.getElementById("button-");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button0 = document.getElementById("button0");
let buttonpoint = document.getElementById("button.");
let buttonequal = document.getElementById("button=");



buttonAC.addEventListener("click", delete1);

function delete1() {
    result1.innerHTML = "";
    result2.innerHTML = "";
}


button0.addEventListener("click", add0);

function add0() {
    result1.innerHTML += 0
    
}

button1.addEventListener("click", add1);

function add1() {
    result1.innerHTML += 1
}

button2.addEventListener("click", add2);

function add2() {
    result1.innerHTML += 2
}

button3.addEventListener("click", add3);

function add3() {
    result1.innerHTML += 3
}


button4.addEventListener("click", add4);

function add4() {
    result1.innerHTML += 4
}

button5.addEventListener("click", add5);

function add5() {
    result1.innerHTML += 5
}

button6.addEventListener("click", add6);

function add6() {
    result1.innerHTML += 6
}

button7.addEventListener("click", add7);

function add7() {
    result1.innerHTML += 7
}

button8.addEventListener("click", add8);

function add8() {
    result1.innerHTML += 8
}

button9.addEventListener("click", add9);

function add9() {
    result1.innerHTML += 9
}

buttonpoint.addEventListener("click", addpoint) ;

function addpoint() {
    result1.innerHTML += "."
}

buttonplus.addEventListener("click", adding);


function adding() {
    result2.innerHTML += result1.innerHTML;
    result2.innerHTML += "+"
    result1.innerHTML = "";
}


buttonsubs.addEventListener("click", subsing);

function subsing() {
    result2.innerHTML += result1.innerHTML;
    result2.innerHTML += "-"
    result1.innerHTML = "";
}

buttonx.addEventListener("click", multiply);

function multiply() {
    result2.innerHTML += result1.innerHTML;
    result2.innerHTML += "*"
    result1.innerHTML = "";
}

buttonDivide.addEventListener("click", dividing);

function dividing() {
    result2.innerHTML += result1.innerHTML;
    result2.innerHTML += "÷"
    result1.innerHTML = "";
}

buttonModules.addEventListener("click", modules1);

function modules1 () {
    result1.innerHTML = parseFloat(result1.innerHTML) * 0.001
}


buttonequal.addEventListener("click", calc1);

function calc1() {
   if(result2.innerHTML[result2.innerHTML.length-1] == "+") {
        result1.innerHTML = parseFloat(result2.innerHTML) + parseFloat(result1.innerHTML);
        result2.innerHTML = "";
   } else if (result2.innerHTML[result2.innerHTML.length-1] == "-") {
    result1.innerHTML = parsefloat(result2.innerHTML) - parseFloat(result1.innerHTML);
    result2.innerHTML = "";
   } else if (result2.innerHTML[result2.innerHTML.length-1] == "*") {
    result1.innerHTML = parseFloat(result2.innerHTML) * parseFloat(result1.innerHTML);
    result2.innerHTML = "";
   } else if (result2.innerHTML[result2.innerHTML.length-1] == "÷") {
    result1.innerHTML = parseFloat(result2.innerHTML) / parseFloat(result1.innerHTML);
    result2.innerHTML = "";
   }

}
   

   
