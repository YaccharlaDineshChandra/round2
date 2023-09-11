function func() {
    var bt1 = document.getElementById("bt1").value;
    var bt2 = document.getElementById("bt2").value;
    var bt3 = document.getElementById("bt3").value;
    var bt4 = document.getElementById("bt4").value;
    var bt5 = document.getElementById("bt5").value;
    var bt6 = document.getElementById("bt6").value;
    var bt7 = document.getElementById("bt7").value;
    var bt8 = document.getElementById("bt8").value;
    var bt9 = document.getElementById("bt9").value;
          
    var btn1 = document.getElementById("bt1");
    var btn2 = document.getElementById("bt2");
    var btn3 = document.getElementById("bt3");
    var btn4 = document.getElementById("bt4");
    var btn5 = document.getElementById("bt5");
    var btn6 = document.getElementById("bt6");
    var btn7 = document.getElementById("bt7");
    var btn8 = document.getElementById("bt8");
    var btn9 = document.getElementById("bt9");
  
    if ((bt1 == 'x' || bt1 == 'X') && (bt2 == 'x' ||
        bt2 == 'X') && (bt3 == 'x' || bt3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "white";
        btn2.style.color = "white";
        btn3.style.color = "white";
    }
    else if ((bt1 == 'x' || bt1 == 'X') && (bt4 == 'x' ||
        bt4 == 'X') && (bt7 == 'x' || bt7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "white";
        btn4.style.color = "white";
        btn7.style.color = "white";
    }
    else if ((bt7 == 'x' || bt7 == 'X') && (bt8 == 'x' ||
        bt8 == 'X') && (bt9 == 'x' || bt9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
  
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
  
        btn7.style.color = "white";
        btn8.style.color = "white";
        btn9.style.color = "white";
    }
    else if ((bt3 == 'x' || bt3 == 'X') && (bt6 == 'x' ||
        bt6 == 'X') && (bt9 == 'x' || bt9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
  
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
  
        btn3.style.color = "white";
        btn6.style.color = "white";
        btn9.style.color = "white";
    }
    else if ((bt1 == 'x' || bt1 == 'X') && (bt5 == 'x' ||
        bt5 == 'X') && (bt9 == 'x' || bt9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
  
        btn1.style.color = "white";
        btn5.style.color = "white";
        btn9.style.color = "white";
    }
    else if ((bt3 == 'x' || bt3 == 'X') && (bt5 == 'x' ||
        bt5 == 'X') && (bt7 == 'x' || bt7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn3.style.color = "white";
        btn5.style.color = "white";
        btn7.style.color = "white";
    }
    else if ((bt2 == 'x' || bt2 == 'X') && (bt5 == 'x' ||
        bt5 == 'X') && (bt8 == 'x' || bt8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;
  
        btn2.style.color = "white";
        btn5.style.color = "white";
        btn8.style.color = "white";
    }
    else if ((bt4 == 'x' || bt4 == 'X') && (bt5 == 'x' ||
        bt5 == 'X') && (bt6 == 'x' || bt6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn4.style.color = "white";
        btn5.style.color = "white";
        btn6.style.color = "white";
    }
    else if ((bt1 == '0' || bt1 == '0') && (bt2 == '0' ||
        bt2 == '0') && (bt3 == '0' || bt3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "white";
        btn2.style.color = "white";
        btn3.style.color = "white";
    }
    else if ((bt1 == '0') && (bt4 == '0' ||
        bt4 == '0') && (bt7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn1.style.color = "white";
        btn4.style.color = "white";
        btn7.style.color = "white";
    }
    else if ((bt7 == '0') && (bt8 == '0') && (bt9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
  
        btn7.style.color = "white";
        btn8.style.color = "white";
        btn9.style.color = "white";
    }
    else if ((bt3 == '0') && (bt6 == '0') && (bt9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn3.style.color = "white";
        btn6.style.color = "white";
        btn9.style.color = "white";
    }
    else if ((bt1 == '0') && (bt5 == '0') && (bt9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
  
        btn1.style.color = "white";
        btn5.style.color = "white";
        btn9.style.color = "white";
    }
    else if ((bt3 == '0') && (bt5 == '0') && (bt7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn3.style.color = "white";
        btn5.style.color = "white";
        btn7.style.color = "white";
    }
    else if ((bt2 == '0') && (bt5 == '0') && (bt8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;
  
        btn2.style.color = "white";
        btn5.style.color = "white";
        btn8.style.color = "white";
    }
    else if ((bt4 == '0') && (bt5 == '0') && (bt6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
  
        btn4.style.color = "white";
        btn5.style.color = "white";
        btn6.style.color = "white";
    }
    else if ((bt1 == 'X' || bt1 == '0') && (bt2 == 'X'
        || bt2 == '0') && (bt3 == 'X' || bt3 == '0') &&
        (bt4 == 'X' || bt4 == '0') && (bt5 == 'X' ||
            bt5 == '0') && (bt6 == 'X' || bt6 == '0') &&
        (bt7 == 'X' || bt7 == '0') && (bt8 == 'X' ||
            bt8 == '0') && (bt9 == 'X' || bt9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
    }
    else {
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "First Player Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Second Player Turn";
        }
    }
}
function func_2() {
    location.reload();
    bt1 = bt2 = bt3 = bt4 = bt5 = bt6 = bt7 = bt8 = bt9 = '';
}
flag = 1;
function func_3() {
    if (flag == 1) {
        document.getElementById("bt1").value = "X";
        document.getElementById("bt1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt1").value = "0";
        document.getElementById("bt1").disabled = true;
        flag = 1;
    }
}
  
function func_4() {
    if (flag == 1) {
        document.getElementById("bt2").value = "X";
        document.getElementById("bt2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt2").value = "0";
        document.getElementById("bt2").disabled = true;
        flag = 1;
    }
}
  
function func_5() {
    if (flag == 1) {
        document.getElementById("bt3").value = "X";
        document.getElementById("bt3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt3").value = "0";
        document.getElementById("bt3").disabled = true;
        flag = 1;
    }
}
  
function func_6() {
    if (flag == 1) {
        document.getElementById("bt4").value = "X";
        document.getElementById("bt4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt4").value = "0";
        document.getElementById("bt4").disabled = true;
        flag = 1;
    }
}
  
function func_7() {
    if (flag == 1) {
        document.getElementById("bt5").value = "X";
        document.getElementById("bt5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt5").value = "0";
        document.getElementById("bt5").disabled = true;
        flag = 1;
    }
}
  
function func_8() {
    if (flag == 1) {
        document.getElementById("bt6").value = "X";
        document.getElementById("bt6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt6").value = "0";
        document.getElementById("bt6").disabled = true;
        flag = 1;
    }
}
  
function func_9() {
    if (flag == 1) {
        document.getElementById("bt7").value = "X";
        document.getElementById("bt7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt7").value = "0";
        document.getElementById("bt7").disabled = true;
        flag = 1;
    }
}
  
function func_10() {
    if (flag == 1) {
        document.getElementById("bt8").value = "X";
        document.getElementById("bt8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt8").value = "0";
        document.getElementById("bt8").disabled = true;
        flag = 1;
    }
}
  
function func_11() {
    if (flag == 1) {
        document.getElementById("bt9").value = "X";
        document.getElementById("bt9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bt9").value = "0";
        document.getElementById("bt9").disabled = true;
        flag = 1;
    }
}