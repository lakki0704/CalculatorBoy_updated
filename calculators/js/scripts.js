var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})


// function openForm() {
//     document.getElementById("myform").style.display = "block";
//     document.getElementById("loan1").style.display = "none";

// }

// function closeForm() {
//     document.getElementById("myform").style.display = "none";
//     document.getElementById("loan1").style.display = "block";

// }

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function calc1() {

    var m = parseFloat(document.getElementById("monthlypayment").value);
    var i = parseFloat(document.getElementById("interestrate1").value) / 1200;
    var n = parseFloat(document.getElementById("n1").value);
    var la = ((m * (1 - (1 / (Math.pow((1 + i), n))))) / i);
    var loan = document.getElementById("la");
    loan.innerHTML = la.toFixed(3);
}


function calc2() {

    var m = parseFloat(document.getElementById("loanamount2").value);
    var i = parseFloat(document.getElementById("interestrate2").value) / 100;
    var n = parseFloat(document.getElementById("n2").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment2");
    payment.innerHTML = pay.toFixed(3);
}


function calc3() {

    var m = parseFloat(document.getElementById("monthlypayment3").value);
    var i = parseFloat(document.getElementById("interestrate3").value) / 1200;
    // var n = parseFloat(document.getElementById("n2").value);
    var l = parseFloat(document.getElementById("loanbalance3").value);
    // var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var pay = (Math.log10((m / i) / ((m / i) - l))) / (Math.log10(1 + i));
    var payment = document.getElementById("n3");
    payment.innerHTML = Math.floor(pay);
}

function calc4() {

    var m = parseFloat(document.getElementById("loanamount4").value);
    var i = parseFloat(document.getElementById("interestrate4").value) / 100;
    var n = parseFloat(document.getElementById("n4").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("emi4");
    payment.innerHTML = pay.toFixed(3);
}

function calc5() {

    var m = parseFloat(document.getElementById("loanamount5").value);
    var i = parseFloat(document.getElementById("interestrate5").value) / 1200;
    var n = parseFloat(document.getElementById("n5").value);
    var pay = ((m * i) / (1 - (Math.pow((1 + i), -n))));
    var payment = document.getElementById("payment5");
    payment.innerHTML = pay.toFixed(3);
}

function calc6() {

    var m = parseFloat(document.getElementById("loanamount6").value);
    var i = parseFloat(document.getElementById("interestrate6").value) / 100;
    var n = parseFloat(document.getElementById("n6").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment6");
    payment.innerHTML = pay.toFixed(3);
}

function calc7() {

    var m = parseFloat(document.getElementById("loanamount7").value);
    var i = parseFloat(document.getElementById("interestrate7").value) / 100;
    var n = parseFloat(document.getElementById("n7").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment7");
    payment.innerHTML = pay.toFixed(3);
}

function calc8() {

    var m = parseFloat(document.getElementById("principal8").value);
    var i = parseFloat(document.getElementById("interestrate8").value) / 100;
    var n = parseFloat(document.getElementById("n8").value);
    var pay = m * (1 + (i * n));
    var payment = document.getElementById("payment8");
    payment.innerHTML = pay.toFixed(3);
}

function calc9() {

    var m = parseFloat(document.getElementById("principal9").value);
    var i = parseFloat(document.getElementById("interestrate9").value) / 100;
    var n = parseFloat(document.getElementById("n9").value);
    var pay = m * i * n;
    var payment = document.getElementById("payment9");
    payment.innerHTML = pay.toFixed(3);
}

function calc10() {

    var m = parseFloat(document.getElementById("principal10").value);
    var i = parseFloat(document.getElementById("interestrate10").value) / 100;
    var n = parseFloat(document.getElementById("n10").value);
    var nn = parseFloat(document.getElementById("nn10").value);
    var pay = m * (1 + (i / nn)) * (nn * n);
    var payment = document.getElementById("payment10");
    payment.innerHTML = pay.toFixed(3);
}


function calc11() {

    var m = parseFloat(document.getElementById("future11").value);
    var i = parseFloat(document.getElementById("interestrate11").value) / 100;
    var n = parseFloat(document.getElementById("n11").value);

    var pay = (m / (Math.pow((1 + i), n)));
    var payment = document.getElementById("payment11");
    payment.innerHTML = pay.toFixed(3);
}

function calc12() {

    var m = parseFloat(document.getElementById("future12").value);
    var i = parseFloat(document.getElementById("interestrate12").value) / 100;
    var n = parseFloat(document.getElementById("n12").value);

    var pay = m / (Math.pow((1 + i), n));
    var payment = document.getElementById("payment12");
    payment.innerHTML = pay.toFixed(3);
}

function calc13() {

    var m = parseFloat(document.getElementById("present13").value);
    var i = parseFloat(document.getElementById("interestrate13").value) / 100;
    var n = parseFloat(document.getElementById("n13").value);

    var pay = m * (Math.pow((1 + i), n));
    var payment = document.getElementById("payment13");
    payment.innerHTML = pay.toFixed(3);
}

function calc14() {

    var m = parseFloat(document.getElementById("cl14").value);
    var i = parseFloat(document.getElementById("ca14").value);
    var n = parseFloat(document.getElementById("ll14").value);
    var nn = parseFloat(document.getElementById("la14").value);
    var pay = (m + n) / (i + nn);
    var payment = document.getElementById("payment14");
    payment.innerHTML = pay.toFixed(3);
}

function calc15() {

    var m = parseFloat(document.getElementById("cl15").value);

    var n = parseFloat(document.getElementById("ll15").value);
    var nn = parseFloat(document.getElementById("eq15").value);
    var pay = (m + n) / nn;
    var payment = document.getElementById("payment15");
    payment.innerHTML = pay.toFixed(3);
}

function calc16() {

    var m = parseFloat(document.getElementById("m16").value);

    var i = parseFloat(document.getElementById("i16").value);
    var n = parseFloat(document.getElementById("n16").value);
    var pay = (m + i + n) / n;
    var payment = document.getElementById("payment16");
    payment.innerHTML = pay.toFixed(3);
}


function calc17() {

    var m = parseFloat(document.getElementById("m17").value);

    var i = parseFloat(document.getElementById("i17").value);
    // var n = parseFloat(document.getElementById("n16").value);
    var pay = (m / i);
    var payment = document.getElementById("payment17");
    payment.innerHTML = pay.toFixed(3);
}

function calc18() {

    var m = parseFloat(document.getElementById("m18").value);

    var i = parseFloat(document.getElementById("i18").value);
    var n = parseFloat(document.getElementById("n18").value);
    var pay = (m - i) / n;
    var payment = document.getElementById("payment18");
    payment.innerHTML = pay.toFixed(3);
}


function calc19() {

    var m = parseFloat(document.getElementById("m19").value);

    var i = parseFloat(document.getElementById("i19").value);
    var n = parseFloat(document.getElementById("n19").value);
    var pay = (m + i) / n;
    var payment = document.getElementById("payment19");
    payment.innerHTML = pay.toFixed(3);
}


function calc20() {

    var m = parseFloat(document.getElementById("m20").value);

    var i = parseFloat(document.getElementById("i20").value);
    // var n = parseFloat(document.getElementById("n19").value);
    var pay = (m - i);
    var payment = document.getElementById("payment20");
    payment.innerHTML = pay.toFixed(3);
}


function calc21() {

    var m = parseFloat(document.getElementById("m21").value);

    var i = parseFloat(document.getElementById("i21").value);
    // var n = parseFloat(document.getElementById("n19").value);
    var pay = (m / i);
    var payment = document.getElementById("payment21");
    payment.innerHTML = pay.toFixed(3);
}



function calc22() {

    var m = parseFloat(document.getElementById("m22").value);

    var i = parseFloat(document.getElementById("i22").value);
    // var n = parseFloat(document.getElementById("n19").value);
    var pay = (m / i);
    var payment = document.getElementById("payment22");
    payment.innerHTML = pay.toFixed(3);
}


function calc23() {

    var m = parseFloat(document.getElementById("m23").value);

    var i = parseFloat(document.getElementById("i23").value);
    var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / (i / n));
    var payment = document.getElementById("payment23");
    payment.innerHTML = pay.toFixed(3);
}

function calc24() {

    var m = parseFloat(document.getElementById("m24").value);

    var i = parseFloat(document.getElementById("i24").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment24");
    payment.innerHTML = pay.toFixed(3);
}


function calc25() {

    var m = parseFloat(document.getElementById("m25").value);

    var i = parseFloat(document.getElementById("i25").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment25");
    payment.innerHTML = pay.toFixed(3);
}


function calc26() {

    var m = parseFloat(document.getElementById("m26").value);

    var i = parseFloat(document.getElementById("i26").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment26");
    payment.innerHTML = pay.toFixed(3);
}


function calc27() {

    var m = parseFloat(document.getElementById("m27").value);

    var i = parseFloat(document.getElementById("i27").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment27");
    payment.innerHTML = pay.toFixed(3);
}



function calc28() {

    var m = parseFloat(document.getElementById("m28").value);

    var i = parseFloat(document.getElementById("i28").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment28");
    payment.innerHTML = pay.toFixed(3);
}

function calc29() {

    var m = parseFloat(document.getElementById("m29").value);

    var i = parseFloat(document.getElementById("i29").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment29");
    payment.innerHTML = pay.toFixed(3);
}


function calc30() {

    var m = parseFloat(document.getElementById("m30").value);

    var i = parseFloat(document.getElementById("i30").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment30");
    payment.innerHTML = pay.toFixed(3);
}


function calc31() {

    var m = parseFloat(document.getElementById("m31").value);

    var i = parseFloat(document.getElementById("i31").value);
    var n = parseFloat(document.getElementById("n31").value);
    var pay = (m / (i / n));
    var payment = document.getElementById("payment31");
    payment.innerHTML = pay.toFixed(3);
}

function calc32() {

    var m = parseFloat(document.getElementById("m32").value);

    var i = parseFloat(document.getElementById("i32").value);
    var n = parseFloat(document.getElementById("n32").value);
    var pay = (m / (i / n));
    var payment = document.getElementById("payment32");
    payment.innerHTML = pay.toFixed(3);
}

function calc33() {

    var m = parseFloat(document.getElementById("m33").value);

    var i = parseFloat(document.getElementById("i33").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (m / (i));
    var payment = document.getElementById("payment33");
    payment.innerHTML = pay.toFixed(3);
}


function calc34() {

    var m = parseFloat(document.getElementById("m34").value);

    var i = parseFloat(document.getElementById("i34").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (m / (i));
    var payment = document.getElementById("payment34");
    payment.innerHTML = pay.toFixed(3);
}


function calc35() {

    var m = parseFloat(document.getElementById("m35").value);

    var i = parseFloat(document.getElementById("i35").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (i - m) / m;
    var pay2 = (i - m) / i;
    var payment = document.getElementById("payment35");
    payment.innerHTML = pay.toFixed(3);
    var payment2 = document.getElementById("payment235");
    payment2.innerHTML = pay2.toFixed(3);
}

function calc36() {

    var m = parseFloat(document.getElementById("m36").value);

    var i = parseFloat(document.getElementById("i36").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = ((i - m) / m) * 100;

    var payment = document.getElementById("payment36");
    payment.innerHTML = pay.toFixed(3);

}

function calc37() {

    var m = parseFloat(document.getElementById("m37").value);

    var i = parseFloat(document.getElementById("i37").value) / 100;
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = ((m * i) / (1 - i)) * 100;

    var payment = document.getElementById("payment37");
    payment.innerHTML = pay.toFixed(3);

    var pay2 = ((m));

    var payment2 = document.getElementById("payment237");
    payment2.innerHTML = pay2.toFixed(3);

    var pay3 = pay + m;

    var payment3 = document.getElementById("payment337");
    payment3.innerHTML = pay3.toFixed(3);

    var pay4 = pay / m;

    var payment4 = document.getElementById("payment437");
    payment4.innerHTML = pay4.toFixed(3);

    var pay5 = pay / i;

    var payment5 = document.getElementById("payment537");
    payment5.innerHTML = pay5.toFixed(3);

}

function calc38() {

    var m = parseFloat(document.getElementById("m38").value);

    var i = parseFloat(document.getElementById("i38").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = i - m;

    var payment = document.getElementById("payment38");
    payment.innerHTML = pay.toFixed(3);

}

function calc39() {

    var m = parseFloat(document.getElementById("m39").value);
    var i = parseFloat(document.getElementById("i39").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = ((m - i) / m) * 100;
    var payment = document.getElementById("payment39");
    payment.innerHTML = pay.toFixed(3);

}

function calc40() {

    var m = parseFloat(document.getElementById("m40").value);
    var i = parseFloat(document.getElementById("i40").value) / 100;
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = m * i;
    var payment = document.getElementById("payment40");
    payment.innerHTML = pay.toFixed(3);
    var pay2 = m + (m * i);
    var payment2 = document.getElementById("payment140");
    payment2.innerHTML = pay2.toFixed(3);

}

function calc41() {

    var m = parseFloat(document.getElementById("m41").value);
    var i = parseFloat(document.getElementById("i41").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (i / (m * m));
    var payment = document.getElementById("payment41");
    payment.innerHTML = pay.toFixed(3);

}

var items = new Array();
var newlist = new Array();

function add() {
    items.push((document.getElementById("m42").value));
    (document.getElementById("m42").value) = " ";
    var str = "";
    for (i = 0; i < items.length; i++) {
        str = str + items[i] + "  ";
    }
    document.getElementById("items").innerHTML = str;
}

function clear1() {

    while (items.length) {
        items.pop();
    }
    while (newlist.length) {
        newlist.pop();
    }
    document.getElementById("items").innerHTML = "";

}

function calc42() {

    // var m = (document.getElementById("m42").value);
    var i = parseFloat(document.getElementById("i42").value);
    var payment = document.getElementById("payment42");
    // var n = Math.floor(Math.random() * items.length);
    for (j = 0; j < i; j++) {
        var z = items[Math.floor(Math.random() * items.length)];
        // newlist.push(items[Math.floor(Math.random() * items.length)]);
        var check = newlist.includes(z);
        if (check === false) {
            newlist.push(z);
        } else {
            while (check === true) {
                z = items[Math.floor(Math.random() * items.length)];
                check = newlist.includes(z);
                if (check === false) {
                    newlist.push(z);
                }
            }
        }
    }
    var str = "";
    for (j = 0; j < i; j++) {
        str = str + newlist[j] + "  ";
    }
    payment.innerHTML = str;

}


function calc43() {

    var m = parseFloat(document.getElementById("m43").value);
    var i = parseFloat(document.getElementById("i43").value) / 100;
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = m / (1 - i);
    var payment = document.getElementById("payment43");
    payment.innerHTML = pay.toFixed(3);

    var pay2 = pay * i;
    var payment2 = document.getElementById("payment243");
    payment2.innerHTML = pay2.toFixed(3);

    var pay3 = pay2 * 100 / m;
    var payment3 = document.getElementById("payment343");
    payment3.innerHTML = pay3.toFixed(3);

}

numlist = new Array();
// numnew = new Array();

function calc44() {

    var m = parseFloat(document.getElementById("m44").value);
    var n = parseFloat(document.getElementById("n44").value);
    var i = parseFloat(document.getElementById("i44").value);

    // var pay = (i / (m * m));
    var str = ""
    var payment = document.getElementById("payment44");
    for (j = 0; j < i; j++) {
        z = Math.floor(Math.random() * (m - n) + n);
        str = str + z + " ";
    }
    payment.innerHTML = str;

}

function calc_2_44() {

    var m = parseFloat(document.getElementById("m44").value);
    var n = parseFloat(document.getElementById("n44").value);
    var i = parseFloat(document.getElementById("i44").value);
    var payment = document.getElementById("payment44");
    for (j = 0; j < i; j++) {
        z = Math.floor(Math.random() * (m - n) + n);
        // newlist.push(items[Math.floor(Math.random() * items.length)]);
        var check = numlist.includes(z);
        if (check === false) {
            numlist.push(z);
        } else {
            while (check === true) {
                z = Math.floor(Math.random() * (m - n) + n);
                check = numlist.includes(z);
                if (check === false) {
                    numlist.push(z);
                }
            }
        }
    }
    var str = "";
    for (j = 0; j < i; j++) {
        str = str + numlist[j] + " ";
    }
    payment.innerHTML = str;

}

numlist2 = new Array

function add2() {
    var m = parseFloat(document.getElementById("m45").value);
    numlist2.push(m);
    document.getElementById("m45").value = " ";
    var str = "";
    for (i = 0; i < numlist2.length; i++) {
        str = str + numlist2[i] + " ";
    }
    var d = document.getElementById("numlist2");
    d.innerHTML = str;
}

function calc45() {

    var m = parseFloat(document.getElementById("m45").value);
    // var i = parseFloat(document.getElementById("i45").value);
    var z = numlist2.length;
    var sum = 0;
    for (i = 0; i < z; i++) {
        sum = sum + numlist2[i];
    }
    var mean = sum / z;
    var ss = 0;
    for (j = 0; j < z; j++) {
        ss = ss + ((numlist2[j] - mean) * (numlist2[j] - mean));
    }

    var payment = document.getElementById("payment45");
    payment.innerHTML = (Math.pow((ss / z), 0.5)).toFixed(3);

    var payment2 = document.getElementById("payment245");
    payment2.innerHTML = (ss / z).toFixed(3);
}



function date1() {
    var d1 = parseFloat(document.getElementById("m346").value);
    var d11 = parseFloat(document.getElementById("i346").value);
    var m1 = (document.getElementById("m246").value);
    var m11 = (document.getElementById("i246").value);
    var y1 = parseFloat(document.getElementById("m46").value);
    var y11 = parseFloat(document.getElementById("i46").value);

    if (m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 8 || m1 == 10 || m1 == 12) {
        if (d1 > 31) {
            document.getElementById("msg1").style.display = "block";
        } else {
            document.getElementById("msg1").style.display = "none";
        }
    }

    if (m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
        if (d1 > 30) {
            document.getElementById("msg1").style.display = "block";
        } else {
            document.getElementById("msg1").style.display = "none";
        }
    }

    if (m1 == 2) {
        if (d1 > 28 && y1 % 400 != 0) {
            document.getElementById("msg1").style.display = "block";
        }
        if (d1 > 29 && y1 % 400 == 0) {
            document.getElementById("msg1").style.display = "block";
        } else {
            document.getElementById("msg1").style.display = "none";
        }
    }

    //for m11and y11 and d11
    if (m11 == 1 || m11 == 3 || m11 == 5 || m11 == 7 || m11 == 8 || m11 == 10 || m11 == 12) {
        if (d11 > 31) {
            document.getElementById("msg2").style.display = "block";
        } else {
            document.getElementById("msg2").style.display = "none";
        }

    }
    if (m11 == 4 || m11 == 6 || m11 == 9 || m11 == 11) {
        if (d11 > 30) {
            document.getElementById("msg2").style.display = "block";
        } else {
            document.getElementById("msg2").style.display = "none";
        }
    }

    if (m11 == 2) {
        if (d11 > 28 && y11 % 400 != 0) {
            document.getElementById("msg2").style.display = "block";
        }
        if (d11 > 29 && y11 % 400 == 0) {
            document.getElementById("msg2").style.display = "block";
        } else {
            document.getElementById("msg2").style.display = "none";
        }
    }

}


var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
document.getElementById("i46").innerHTML = d2 + "-" + m2 + "-" + y2;

function calc46() {

    var y1 = parseFloat(document.getElementById("m46").value);
    var m1 = (document.getElementById("m246").value);
    var d1 = parseFloat(document.getElementById("m346").value);

    var y11 = parseFloat(document.getElementById("i146").value);
    var m11 = (document.getElementById("i246").value);
    var d11 = parseFloat(document.getElementById("i346").value);


    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var payment = document.getElementById("payment46");
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }


    if (d1 > d11) {
        d11 = d11 + month[m11 - 1];
        m11 = m11 - 1;
    }
    if (m1 > m11) {
        m11 = m11 + 12;
        y11 = y11 - 1;
    }



    if (document.getElementById("i146").value == "") {
        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;

        payment.innerHTML = y + ' Years ' + m + ' Months ' + d + ' Days';
    } else {

        var d = d11 - d1;
        var m = m11 - m1;
        var y = y11 - y1;

        payment.innerHTML = y + ' Years ' + m + ' Months ' + d + ' Days';

    }



}


function date2() {
    var d1 = parseFloat(document.getElementById("n47").value);
    var d11 = parseFloat(document.getElementById("n247").value);
    var m1 = (document.getElementById("i47").value);
    var m11 = (document.getElementById("i247").value);
    var y1 = parseFloat(document.getElementById("m47").value);
    var y11 = parseFloat(document.getElementById("m247").value);

    if (m1 == 1 || m1 == 3 || m1 == 5 || m1 == 7 || m1 == 8 || m1 == 10 || m1 == 12) {
        if (d1 > 31) {
            document.getElementById("msg3").style.display = "block";
        } else {
            document.getElementById("msg3").style.display = "none";
        }
    }

    if (m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
        if (d1 > 30) {
            document.getElementById("msg3").style.display = "block";
        } else {
            document.getElementById("msg3").style.display = "none";
        }
    }

    if (m1 == 2) {
        if (d1 > 28 && y1 % 400 != 0) {
            document.getElementById("msg3").style.display = "block";
        }
        if (d1 > 29 && y1 % 400 == 0) {
            document.getElementById("msg3").style.display = "block";
        } else {
            document.getElementById("msg1").style.display = "none";
        }
    }

    //for m11and y11 and d11
    if (m11 == 1 || m11 == 3 || m11 == 5 || m11 == 7 || m11 == 8 || m11 == 10 || m11 == 12) {
        if (d11 > 31) {
            document.getElementById("msg4").style.display = "block";
        } else {
            document.getElementById("msg4").style.display = "none";
        }

    }
    if (m11 == 4 || m11 == 6 || m11 == 9 || m11 == 11) {
        if (d11 > 30) {
            document.getElementById("msg4").style.display = "block";
        } else {
            document.getElementById("msg4").style.display = "none";
        }
    }

    if (m11 == 2) {
        if (d11 > 28 && y11 % 400 != 0) {
            document.getElementById("msg4").style.display = "block";
        }
        if (d11 > 29 && y11 % 400 == 0) {
            document.getElementById("msg4").style.display = "block";
        } else {
            document.getElementById("msg4").style.display = "none";
        }
    }

}


function calc47() { //date calculator 
    var y1 = parseFloat(document.getElementById("m47").value);
    var m1 = (document.getElementById("i47").value);
    var d1 = parseFloat(document.getElementById("n47").value);

    var y2 = parseFloat(document.getElementById("m247").value);
    var m2 = (document.getElementById("i247").value);
    var d2 = parseFloat(document.getElementById("n247").value);

    var payment = document.getElementById("payment47");
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    payment.innerHTML = y + ' Years ' + m + ' Months ' + d + ' Days';


}


function add48() { //time calculator 


    if (document.getElementById("m248").value > 24) {
        document.getElementById("msg5").style.display = "block";
    } else if (document.getElementById("i248").value > 24) {
        document.getElementById("msg8").style.display = "block";
    } else if (document.getElementById("m348").value > 59) {
        document.getElementById("msg6").style.display = "block";
    } else if (document.getElementById("i348").value > 59) {
        document.getElementById("msg9").style.display = "block";
    } else if (document.getElementById("m448").value > 59) {
        document.getElementById("msg7").style.display = "block";
    } else if (document.getElementById("i448").value > 59) {
        document.getElementById("msg10").style.display = "block";
    } else {

        document.getElementById("msg5").style.display = "none";
        document.getElementById("msg6").style.display = "none";
        document.getElementById("msg7").style.display = "none";
        document.getElementById("msg8").style.display = "none";
        document.getElementById("msg9").style.display = "none";
        document.getElementById("msg10").style.display = "none";


        var d1 = parseFloat(document.getElementById("m48").value) * (24 * 60 * 60);
        var h1 = parseFloat(document.getElementById("m248").value) * (60 * 60); //hours
        var m1 = parseFloat(document.getElementById("m348").value) * (60); //mins
        var s1 = parseFloat(document.getElementById("m448").value); //secs

        var d2 = parseFloat(document.getElementById("i48").value) * (24 * 60 * 60);
        var h2 = parseFloat(document.getElementById("i248").value) * (60 * 60); //hours
        var m2 = parseFloat(document.getElementById("i348").value) * (60); //mins
        var s2 = parseFloat(document.getElementById("i448").value); //secs

        var total = d1 + h1 + m1 + s1 + d2 + h2 + m2 + s2;
        var days = total / (24 * 60 * 60);
        var hours = (total % (24 * 60 * 60)) / (60 * 60);
        var minutes = ((total % (24 * 60 * 60)) % (60 * 60)) / (60);
        var secs = (((total % (24 * 60 * 60)) % (60 * 60)) % (60));


        var payment = document.getElementById("payment48");
        payment.innerHTML = days.toFixed(0) + " Days " + hours.toFixed(0) + " hours " + minutes.toFixed(0) + " minutes " + secs.toFixed(0) + " seconds."
    }
}

function sub48() {

    if (document.getElementById("m248").value > 24) {
        document.getElementById("msg5").style.display = "block";
    } else if (document.getElementById("i248").value > 24) {
        document.getElementById("msg8").style.display = "block";
    } else if (document.getElementById("m348").value > 59) {
        document.getElementById("msg6").style.display = "block";
    } else if (document.getElementById("i348").value > 59) {
        document.getElementById("msg9").style.display = "block";
    } else if (document.getElementById("m448").value > 59) {
        document.getElementById("msg7").style.display = "block";
    } else if (document.getElementById("i448").value > 59) {
        document.getElementById("msg10").style.display = "block";
    } else {

        document.getElementById("msg5").style.display = "none";
        document.getElementById("msg6").style.display = "none";
        document.getElementById("msg7").style.display = "none";
        document.getElementById("msg8").style.display = "none";
        document.getElementById("msg9").style.display = "none";
        document.getElementById("msg10").style.display = "none";


        var d1 = parseFloat(document.getElementById("m48").value) * (24 * 60 * 60);
        var h1 = parseFloat(document.getElementById("m248").value) * (60 * 60);
        var m1 = parseFloat(document.getElementById("m348").value) * (60);
        var s1 = parseFloat(document.getElementById("m448").value);

        var d2 = parseFloat(document.getElementById("i48").value) * (24 * 60 * 60);
        var h2 = parseFloat(document.getElementById("i248").value) * (60 * 60);
        var m2 = parseFloat(document.getElementById("i348").value) * (60);
        var s2 = parseFloat(document.getElementById("i448").value);

        var total = (d1 + h1 + m1 + s1) - (d2 + h2 + m2 + s2);
        var days = total / (24 * 60 * 60);
        var hours = (total % (24 * 60 * 60)) / (60 * 60);
        var minutes = ((total % (24 * 60 * 60)) % (60 * 60)) / (60);
        var secs = (((total % (24 * 60 * 60)) % (60 * 60)) % (60));


        var payment = document.getElementById("payment48");
        payment.innerHTML = days.toFixed(0) + " Days " + hours.toFixed(0) + " hours " + minutes.toFixed(0) + " minutes " + secs.toFixed(0) + " seconds."
    }
}

function calc49() {

    var h1 = parseFloat(document.getElementById("m49").value) * (60 * 60);
    var m1 = parseFloat(document.getElementById("m249").value) * (60);

    var h2 = parseFloat(document.getElementById("i49").value) * (60 * 60);
    var m2 = parseFloat(document.getElementById("i249").value) * (60);

    var total = (h2 + m2) - (h1 + m1);

    var hours = total / (60 * 60);
    var minutes = (total % (60 * 60)) / 60;

    var payment = document.getElementById("payment49");
    payment.innerHTML = hours.toFixed(0) + " hours " + minutes.toFixed(0) + " minutes ";


}


function calc50() {

    var h1 = parseFloat(document.getElementById("m50").value) / 100;
    var m1 = parseFloat(document.getElementById("i50").value) / 100;

    var h2 = parseFloat(document.getElementById("n50").value) / 100;
    var m2 = parseFloat(document.getElementById("nn50").value);

    if (document.getElementById("nn50").value == "")

    {
        var sample = ((h1 * h1) * h2 * (1 - h2)) / (m1 * m1);
        var payment = document.getElementById("payment50");
        payment.innerHTML = sample.toFixed(3);
    } else {

        var sample2 = (m2) / (1 + ((m2 - 1) / (h2)));
        var payment = document.getElementById("payment50");
        payment.innerHTML = sample2.toFixed(3);

    }

}


function calc51() {
    //z score
    var h1 = parseFloat(document.getElementById("m51").value); //raw score
    var m1 = parseFloat(document.getElementById("i51").value); //mean

    var h2 = parseFloat(document.getElementById("n51").value); //sd 
    var payment = document.getElementById("payment51");

    var z = (h1 - m1) / h2;
    payment.innerHTML = z;

}

function calc52() {
    //p and c
    var n = parseFloat(document.getElementById("m52").value); //n
    var r = parseFloat(document.getElementById("i52").value); //r


    var payment = document.getElementById("payment52");
    var payment2 = document.getElementById("payment252");

    var p = 1; //fact of n
    var q = 1; // fact of n-r
    var z = 1; // fact of r

    for (i = 1; i <= n; i++) {

        p = p * i;
    }
    for (i = 1; i <= (n - r); i++) {

        q = q * i;
    }
    for (i = 1; i <= r; i++) {

        z = z * i;
    }

    var per = (p) / (q);
    var comb = (p) / (z * q);
    payment.innerHTML = per;
    payment2.innerHTML = comb;
}





function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('calculatorz');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}
for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
    } else {
        x[i].style.display = "list-item";
    }
}
x[i].style.display = "list-item";




//open case converter 

function upper() {
    var text = document.getElementById("text2").value;

    var conv = document.getElementById("converted");
    conv.innerHTML = text.toUpperCase();
}

function lower() {
    var text = document.getElementById("text2").value;

    var conv = document.getElementById("converted");
    conv.innerHTML = text.toLowerCase();
}

function sentence() {
    var text = document.getElementById("text2").value;
    var conv = document.getElementById("converted");
    conv.innerHTML = text.charAt(0).toUpperCase() + text.slice(1);
}

function cap() {
    var text = document.getElementById("text2").value;
    var conv = document.getElementById("converted");
    var words = text.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    conv.innerHTML = CapitalizedWords.join(' ');
}

//close case converter