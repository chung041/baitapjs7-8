let numbers = [];
let numbers1 = [];
let numbers2 = [];
let numbers3 = [];
let numbers4 = [];
let numbers5 = [];
let numbers6 = [];
let f;
let p;
let w;
let t;
document.getElementById("addvalue").onclick = function () {
    f = +document.getElementById('integer').value
    w = +document.getElementById("integer").value
    p = +document.getElementById("integer").value
    numbers.push(f); 
    numbers3.push(w); 
    numbers4.push(p);

    bai1_2_4();
    bai3();
    bai5();
    bai6();
    bai7();
    bai8();
    bai10();
}

// Bài tập 1-2-4
function bai1_2_4() {
    let sum = 0;
    if (f > 0) {
        numbers1.push(f);
        console.log(numbers1);
    }
    for (let i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    document.getElementById("number").value += f + " "
    document.getElementById("integer").value = ""
    document.getElementById("ketqua").innerHTML = sum;
    console.log(sum);
    document.getElementById("ketqua2").innerHTML = numbers1.length;
    numbers1.sort(compare)
    function compare(a, b) {
        return a - b;
    }
    document.getElementById("ketqua4").innerHTML = numbers1[0];
}

// Bài tập 3:
function bai3() {
    numbers.sort(compare);
    function compare(a, b) {
        return a - b;
    }
    document.getElementById("ketqua3").innerHTML = numbers[0]
}




// bài tập 5 :


function bai5() {
    if (f % 2 == 0) {
        numbers2.push(f);
        document.getElementById("ketqua5").innerHTML = numbers2[numbers2.length - 1];
    } else if (f%2 == 1) {
        document.getElementById("ketqua5").innerHTML = -1;
    }
    console.log(numbers2);
}

//Bài tập 6
function bai6(){
document.getElementById("thaydoi").onclick = function bai6() {
    let vitri1 = +document.getElementById("value1").value;
    let vitri2 = +document.getElementById("value2").value;
    let number1 = numbers1[vitri1];
    let number2 = numbers[vitri2];

    if (vitri1 < 0 || vitri1 > numbers3.length - 1 || vitri2 < 0 || vitri2 > numbers3.length - 1) {
        alert("Sửa lại");
        return;
    }

    numbers3.splice(vitri1, 0);
    numbers3.splice(vitri2 -1, 2);
    numbers3.splice(vitri1, 0, number2);
    numbers3.splice(vitri2, 0, number1);
    document.getElementById("ketqua6").innerHTML = numbers3;
    console.log(numbers3);
    document.getElementById("place1").value = ""
    document.getElementById("place2").value = ""

}
}


//Bài tập 7
function bai7() {
    numbers.sort(compare);
    function compare(a, b) {
        return a - b;
    }
    document.getElementById("ketqua7").innerHTML = numbers
}


//Bài tập 8
function bai8() {
    if (p> 2 && (p% 2) == 1) {
        for (let i = 2; i <= p; i++) {
            if ((p% i) != 0) {

            } else if (i == p) {
                numbers6.push(p)
                break;
            }
        }
    }
    if (numbers6.length == 0) {
        document.getElementById("ketqua8").innerHTML = -1
    } else {
        document.getElementById("ketqua8").innerHTML = numbers6[0];
    }
    console.log("mảng số 6 là:", numbers6);
}

// Bài tập 9

document.getElementById("themso").onclick= function () {
    t = +document.getElementById("but2").value;
    numbers5.push(t);
    bai9()

}
function bai9() {
    let w = 0;
    let numbern = numbers1.concat(numbers5)
    for (let i = 0; i < numbern.length; i++) {
        if (Number.isInteger(numbern[i]) === true) {
            w = w +1 ;
        }
        document.getElementById("ketqua9").innerHTML = w;
        console.log("mảng số kết quả", w);
    }
    document.getElementById("but2").value = ""
}


//Bài tập 10
function bai10() {
    let quantity = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            quantity++;
        } if (numbers[i] < 0) {
            quantity = quantity - 1;
        }
        if (quantity > 0) {
            document.getElementById("ketqua10").innerHTML = "Số dương > số âm: " + quantity;
        } else if (quantity < 0) {
            document.getElementById("ketqua10").innerHTML = "Số âm > số dương: " + quantity;
        } else {
            document.getElementById("ketqua10").innerHTML = "Số âm = số dương"
        }
    }
}