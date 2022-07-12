function calc13() { //fraction calcultor

    var num1 = parseFloat(document.getElementById("n13").value);
    var num2 = parseFloat(document.getElementById("n_213").value);
    var den1 = parseFloat(document.getElementById("d13").value);
    var den2 = parseFloat(document.getElementById("d_213").value);

    var frac1 = num1 / den1;
    var frac2 = num2 / den2;

    var op = document.getElementById("op13").value;

    if (op == 1) {
        document.getElementById("result13").innerHTML = (frac1 + frac2).toFixed(3);
    }
    if (op == 2) {
        document.getElementById("result13").innerHTML = (frac1 - frac2).toFixed(3);
    }
    if (op == 3) {
        document.getElementById("result13").innerHTML = (frac1 * frac2).toFixed(3);
    }
    if (op == 4) {
        document.getElementById("result13").innerHTML = (frac1 / frac2).toFixed(3);
    }

}


function calc14() { //percent calculator

    var num1 = parseFloat(document.getElementById("n14").value) / 100;
    var num2 = parseFloat(document.getElementById("n2_14").value);
    var result = num1 * num2;
    document.getElementById("result14").innerHTML = result.toFixed(3);
}

function calc14_2() { //percent2 calculator

    var num1 = parseFloat(document.getElementById("m14").value);
    var num2 = parseFloat(document.getElementById("m_214").value);
    var result = (num1 - num2) / ((num1 + num2) / 2) * 100;
    document.getElementById("result14_2").innerHTML = result.toFixed(3) + " %";
}


function calc15() { //traingle calculator  

    var side1 = parseFloat(document.getElementById("s15").value);
    var side2 = parseFloat(document.getElementById("s2_15").value);
    var side3 = parseFloat(document.getElementById("s3_15").value);

    var a1 = parseFloat(document.getElementById("a15").value);
    var a2 = parseFloat(document.getElementById("a2_15").value);
    var a3 = parseFloat(document.getElementById("a3_15").value);

    if (a1 + a2 + a3 != 180) {
        alert("Angles are invalid!")
    } else {
        var area = (side1 * side2 * Math.sin(a3) / 2).toFixed(2);
        var perimeter = (side1 + side2 + side3).toFixed(2);
        var height_a = (2 * area / side1).toFixed(2);
        var height_b = (2 * area / side2).toFixed(2);
        var height_c = (2 * area / side3).toFixed(2);

        var inner_r = (area / (perimeter / 2)).toFixed(2);
        var circum_r = (side1 / (2 * Math.sin(a1))).toFixed(2);

        document.getElementById("result15_1").innerHTML = "Area : " + area + " sq units";
        document.getElementById("result15_2").innerHTML = "Perimeter : " + perimeter + " units";
        document.getElementById("result15_3").innerHTML = "Height a : " + height_a + " || " + "Height b : " + height_b + " || " + "Height c : " + height_c;
        document.getElementById("result15_4").innerHTML = "Inner radius : " + inner_r + " units" + " || " + "circumradius : " + circum_r + " units";
    }
}



function calc16() { //GPA calculator 

    var A_plus = parseFloat(document.getElementById("A+").value); //1
    var A = parseFloat(document.getElementById("A").value); //2
    var B_plus = parseFloat(document.getElementById("B+").value); //3
    var B = parseFloat(document.getElementById("B").value); //4
    var C_plus = parseFloat(document.getElementById("C+").value); //5
    var C = parseFloat(document.getElementById("C").value); //6
    var D_plus = parseFloat(document.getElementById("D+").value); //7
    var D = parseFloat(document.getElementById("D").value); //8
    var E = parseFloat(document.getElementById("E").value); //9
    var null_p = 0;

    var arr = [null_p, A_plus, A, B_plus, B, C_plus, C, D_plus, D, E];

    console.log(arr[7]);

    var c16 = parseFloat(document.getElementById("c16").value);
    var g16 = parseFloat(document.getElementById("g16").value);

    var c2_16 = parseFloat(document.getElementById("c2_16").value);
    var g2_16 = parseFloat(document.getElementById("g2_16").value);

    var c3_16 = parseFloat(document.getElementById("c3_16").value);
    var g3_16 = parseFloat(document.getElementById("g3_16").value);

    var c4_16 = parseFloat(document.getElementById("c4_16").value);
    var g4_16 = parseFloat(document.getElementById("g4_16").value);

    var c5_16 = parseFloat(document.getElementById("c5_16").value);
    var g5_16 = parseFloat(document.getElementById("g5_16").value);

    var c6_16 = parseFloat(document.getElementById("c6_16").value);
    var g6_16 = parseFloat(document.getElementById("g6_16").value);

    var c7_16 = parseFloat(document.getElementById("c7_16").value);
    var g7_16 = parseFloat(document.getElementById("g7_16").value);

    var c8_16 = parseFloat(document.getElementById("c8_16").value);
    var g8_16 = parseFloat(document.getElementById("g8_16").value);

    var t1, t2, t3, t4, t5, t6, t7, t8;

    //1st 
    for (i = 0; i < 10; i++) {
        if (g16 == i) {
            t1 = c16 * arr[i];
        }
        if (g2_16 == i) {
            t2 = c2_16 * arr[i];
        }
        if (g3_16 == i) {
            t3 = c3_16 * arr[i];
        }
        if (g4_16 == i) {
            t4 = c4_16 * arr[i];
        }
        if (g5_16 == i) {
            t5 = c5_16 * arr[i];
        }
        if (g6_16 == i) {
            t6 = c6_16 * arr[i];
        }
        if (g7_16 == i) {
            t7 = c7_16 * arr[i];
        }
        if (g8_16 == i) {
            t8 = c8_16 * arr[i];
        }

    }

    var t_creds = c16 + c2_16 + c3_16 + c4_16 + c5_16 + c6_16 + c7_16 + c8_16;
    var t_points = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8;
    var gpa = t_points / t_creds;
    document.getElementById("result16").innerHTML = "GPA : " + gpa;

}

//17th Grade calculator

$('#add').on('click', function() {
    var newField = $('<br /><input type="number" placeholder="Enter a number" class="form-control grade" min="0" max="100"/>');
    newField.appendTo($('#data'));
});

function calc17() {

    var grades = [];
    $('.grade').each(function() {
        if ($(this).val() == "") {
            alert("Please complete the required field");
            return false;
        }

        grades.push($(this).val());
    });

    var sum = eval(grades.join('+')),
        avg = sum / grades.length;
    if (avg >= 75) {
        $('#result').html("<center style='font-size:1em;'>You're grade is <label class='text-primary'>" + avg.toFixed(0) + "</label> <label class='text-success'>You passed!</label></center>");
    } else if (avg < 75) {
        $('#result').html("<center style='font-size:1em;'>You're grade is <label class='text-primary'>" + avg.toFixed(0) + "</label> <label class='text-danger'>You failed!</label></center>");
    }


}


//18th area calculator
$('#circle').on('click', function() {
    document.getElementById("circle_area").style.display = "block";
    document.getElementById("square_area").style.display = "none";
    document.getElementById("rec_length").style.display = "none";
    document.getElementById("rec_breadth").style.display = "none";
    document.getElementById("trap_smaller").style.display = "none";
    document.getElementById("trap_larger").style.display = "none";
    document.getElementById("trap_height").style.display = "none";

});

$('#square').on('click', function() {
    document.getElementById("square_area").style.display = "block";
    document.getElementById("rec_length").style.display = "none";
    document.getElementById("rec_breadth").style.display = "none";
    document.getElementById("trap_smaller").style.display = "none";
    document.getElementById("trap_larger").style.display = "none";
    document.getElementById("trap_height").style.display = "none";
    document.getElementById("circle_area").style.display = "none";
});

$('#rectangle').on('click', function() {
    document.getElementById("rec_length").style.display = "block";
    document.getElementById("rec_breadth").style.display = "block";
    document.getElementById("trap_smaller").style.display = "none";
    document.getElementById("trap_larger").style.display = "none";
    document.getElementById("trap_height").style.display = "none";
    document.getElementById("circle_area").style.display = "none";
    document.getElementById("square_area").style.display = "none";
});

$('#trapezoid').on('click', function() {
    document.getElementById("trap_smaller").style.display = "block";
    document.getElementById("trap_larger").style.display = "block";
    document.getElementById("trap_height").style.display = "block";
    document.getElementById("rec_length").style.display = "none";
    document.getElementById("rec_breadth").style.display = "none";
    document.getElementById("circle_area").style.display = "none";
    document.getElementById("square_area").style.display = "none";
});


function calc18_circle() {
    var radius = parseFloat(document.getElementById("circle_area").value);
    var area = (3.14 * radius * radius);
    document.getElementById("result18").innerHTML = area.toFixed(3) + " sq units";
}

function calc18_square() {
    var side = parseFloat(document.getElementById("square_area").value);
    var area = side * side;
    document.getElementById("result18").innerHTML = area.toFixed(3) + " sq units";
}

function calc18_rect() {
    var length = parseFloat(document.getElementById("rec_length").value);
    var breadth = parseFloat(document.getElementById("rec_breadth").value);
    var area = length * breadth;
    document.getElementById("result18").innerHTML = area.toFixed(3) + " sq units";
}


function calc18_trap() {
    var s = parseFloat(document.getElementById("trap_smaller").value);
    var l = parseFloat(document.getElementById("trap_larger").value);
    var h = parseFloat(document.getElementById("trap_height").value);
    var area = 0.5 * (s + l) * h;
    document.getElementById("result18").innerHTML = area.toFixed(3) + " sq units";
}


//19th Probability calculator

function calc19() {
    var a = parseFloat(document.getElementById("pa19").value);
    var b = parseFloat(document.getElementById("pb19").value);

    if (a > 1 || b > 1) {
        alert("The values are invalid! Probability of an event is lesser than 1");
    } else {

        var p_dash_a = 1 - a;
        var p_dash_b = 1 - b;
        var a_inter_b = a * b;
        var a_union_b = a + b - (a * b);
        var dash_a_union_b = 1 - a_union_b;
        $('#result19').html("<center> P(A') = " + p_dash_a + "<br> P(B') = " + p_dash_b + "<br> P(A∩B) = " + a_inter_b + "<br> P(A∪B) = " + a_union_b + "<br> P((A∪B)')= " + dash_a_union_b);
    }
}




//20th Volume calc

function calc20_1() //sphere
{
    var r = parseFloat(document.getElementById("r1_20").value);
    var volume = (4/3)*3.14*(Math.pow(r,3));
    document.getElementById("result20_1").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}

function calc20_2() //cone
{
    var r = parseFloat(document.getElementById("r2_20").value);
    var h = parseFloat(document.getElementById("h2_20").value);
    var volume = (1/3)*3.14*h*(Math.pow(r,2));
    document.getElementById("result20_2").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}

function calc20_3() // cube
{
    var s = parseFloat(document.getElementById("s3_20").value);
    var volume = Math.pow(s,3);
    document.getElementById("result20_3").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}

function calc20_4() // cuboid
{
    var l = parseFloat(document.getElementById("l4_20").value);
    var b = parseFloat(document.getElementById("b4_20").value);
    var h = parseFloat(document.getElementById("h4_20").value);
    var volume = l*b*h;
    document.getElementById("result20_4").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}

function calc20_5() //cylinder
{
    var r = parseFloat(document.getElementById("r5_20").value);
    var h = parseFloat(document.getElementById("h5_20").value);
    var volume = 3.14*h*(Math.pow(r,2));
    document.getElementById("result20_5").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}
function calc20_6() //frustum 
{
    var r1 = parseFloat(document.getElementById("tr6_20").value);
    var r2 = parseFloat(document.getElementById("br6_20").value);
    var h = parseFloat(document.getElementById("h6_20").value);
    var volume = (1/3)*h*3.14*((r1*r1)+ (r2*r2)+ (r1*r2));
    document.getElementById("result20_6").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}
function calc20_7() //hemisphere
{
    var r = parseFloat(document.getElementById("r7_20").value);
    var volume = (2/3)*3.14*(Math.pow(r,3));
    document.getElementById("result20_7").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}
function calc20_8() //square pyramid
{
    var b = parseFloat(document.getElementById("b8_20").value);
    var h = parseFloat(document.getElementById("h8_20").value);
    var volume = (b*b)*h/3;
    document.getElementById("result20_8").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}

function calc20_9() //square pyramid
{
    var b = parseFloat(document.getElementById("b9_20").value);
    var h = parseFloat(document.getElementById("h9_20").value);
    var volume = 3.14*(b*b)*((4*b/3)+h);
    document.getElementById("result20_9").innerHTML= "Volume : "+ volume.toFixed(3) + " cubic units";
}




//21st Percent error

function calc21() {
    var observed = parseFloat(document.getElementById("ov21").value);
    var true_v = parseFloat(document.getElementById("tv21").value);
    var percent_error = (observed - true_v) * 100 / true_v;
    document.getElementById("result21").innerHTML = "Percent error = " + Math.abs(percent_error.toFixed(3)) + " %";

}

//22nd binary calculator
function calc22() {

    var first = parseFloat(document.getElementById("fi22").value);
    var second = parseFloat(document.getElementById("si22").value);
    var op = document.getElementById("op22").value;
    var result = document.getElementById("result22");

    var ip1 = parseInt(first, 2);
    var ip2 = parseInt(second, 2);
    var sum;

    if (op == 1) {
        sum = ip1 + ip2;
        result.innerHTML = sum.toString(2);
    }
    if (op == 2) {
        sum = ip1 - ip2;
        result.innerHTML = sum.toString(2);
    }
    if (op == 3) {
        sum = ip1 * ip2;
        result.innerHTML = sum.toString(2);
    }
    if (op == 4) {
        sum = ip1 / ip2;
        result.innerHTML = sum.toString(2);
    }
}

//23 mean median mode range

numlist2 = new Array

function add2() {
    var m = parseFloat(document.getElementById("add23").value);
    numlist2.push(m);
    document.getElementById("add23").value = " ";
    var str = "";
    for (i = 0; i < numlist2.length; i++) {
        str = str + numlist2[i] + " ";
    }
    var d = document.getElementById("numlist2");
    d.innerHTML = str;
}

function calc23() {

    var m = parseFloat(document.getElementById("add23").value);
    var i, j;
    var mean, median, mode, range;
    var count = 0;
    for (i = 0; i < numlist2.length; i++) {
        count = count + numlist2[i];
    }
    mean = count / numlist2.length;
    document.getElementById("result23").innerHTML = "Mean : " + mean.toFixed(3);

    for (i = 0; i < numlist2.length; i++) {
        for (j = i + 1; j < numlist2.length; j++) {
            if (numlist2[i] > numlist2[j]) {
                var temp = numlist2[i];
                numlist2[i] = numlist2[j];
                numlist2[j] = temp;
            }
        }
    }

    var len = (numlist2.length);
    console.log(numlist2);
    if (numlist2.length % 2 != 0) {
        median = numlist2[(len - 1) / 2];
    } else {
        median = (numlist2[len / 2] + numlist2[(len / 2) - 1]) / 2;
    }
    document.getElementById("result23_2").innerHTML = "Median : " + median.toFixed(3);

    range = numlist2[len - 1] - numlist2[0];
    document.getElementById("result23_3").innerHTML = "Range : " + range.toFixed(3);



    //mode

    var modes = [],
        count = [],
        number, maxIndex = 0;

    for (i = 0; i < len; i += 1) {
        number = numlist2[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(numlist2[i]);
            }
        }
    document.getElementById("result23_4").innerHTML = "Mode : " + modes;


}

//24th pythagorean

function calc24()
{
    var h = parseFloat(document.getElementById("h24").value);
    var b = parseFloat(document.getElementById("b24").value);

    var hyp = Math.pow(((h*h)+(b*b)),0.5);
    var area =  0.5*h *b;
    var perimeter = h+b+ hyp;
    document.getElementById("result24").innerHTML= "Hypoteneuse : " + hyp ; 
    document.getElementById("result24_2").innerHTML = "Area : " + area;
    document.getElementById("result24_3").innerHTML = "Perimeter : " + perimeter;
}

//25th circle calculator 
function calc25()
{
    var r = parseFloat(document.getElementById("r25").value);
    var d = 2*r;
    var area = 3.14*r*r;
    var circumference = 2*3.14*r;
    document.getElementById("result25").innerHTML= "Diameter : " + d ; 
    document.getElementById("result25_2").innerHTML = "Area : " + area;
    document.getElementById("result25_3").innerHTML = "Circumference : " + circumference;
}


//26th root calculator 
function calc26_1()
{
    var s = parseFloat(document.getElementById("s26").value);
    var c = parseFloat(document.getElementById("c26").value);
    var res = Math.pow(s,0.5);
    document.getElementById("result26_1").innerHTML= "Result : "+ res; 
}
function calc26_2()
{
    var s = parseFloat(document.getElementById("s26").value);
    var c = parseFloat(document.getElementById("c26").value);
    var res = Math.pow(c,(1/3));
    document.getElementById("result26_2").innerHTML="Result : "+  res;  
}

//27th GCF 
numlist27 = new Array
function add27() {
    var m = parseFloat(document.getElementById("add27").value);
    numlist27.push(m);
    document.getElementById("add27").value = " ";
    var str = "";
    for (i = 0; i < numlist27.length; i++) {
        str = str + numlist27[i] + " ";
    }
    var d = document.getElementById("numlist27");
    d.innerHTML = str;
}

function calc27()
{
    function gcd(a, b) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    // Function to find gcd of array of numbers
    function findGCD(arr, n) {
        let result = arr[0];
        for (let i = 1; i < n; i++) {
            result = gcd(arr[i], result);
  
            if (result == 1) {
                return 1;
            }
        }
        return result;
    }
  
    let n = numlist27.length;
    document.getElementById("result27").innerHTML= "Greatest common factor of the given list is : " +(findGCD(numlist27, n) );
}


//28th P value 
function GetZPercent(z) 
  {
    if ( z < -6.5)
      z= 0.0;
    if( z > 6.5) 
      z= 1.0;

    var factK = 1;
    var sum = 0;
    var term = 1;
    var k = 0;
    var loopStop = Math.exp(-23);
    while(Math.abs(term) > loopStop) 
    {
      term = .3989422804 * Math.pow(-1,k) * Math.pow(z,k) / (2 * k + 1) / Math.pow(2,k) * Math.pow(z,k+1) / factK;
      sum += term;
      k++;
      factK *= k;

    }
    sum += 0.5;

    return sum;
  }
  function calc28()
  {
    var z = parseFloat(document.getElementById("z28").value);
    var p = GetZPercent(z);
    document.getElementById("result28").innerHTML= "The P (x lesser than Z) value is : " + p.toFixed(3) ;
  }


  //29th : number sequence 
  function calc29_1()
  {
    var f =  parseFloat(document.getElementById("f29_1").value);
    var cd =  parseFloat(document.getElementById("cd29_1").value);
    var n =  parseFloat(document.getElementById("n29_1").value);
    var an = f + (cd*(n-1));
    document.getElementById("result29_1").innerHTML = "The " + n+ "th term is : " + an; 
  }

  function calc29_2()
  {
    var f =  parseFloat(document.getElementById("f29_2").value);
    var cd =  parseFloat(document.getElementById("cd29_2").value);
    var n =  parseFloat(document.getElementById("n29_2").value);
    var an = f* (Math.pow(cd, n-1));
    document.getElementById("result29_2").innerHTML = "The " + n+ "th term is : " + an; 
  }

  //30th Exponent calculator
  function calc30()
  {
    var base=  parseFloat(document.getElementById("b30").value);
    var power=  parseFloat(document.getElementById("p30").value);
    var res = Math.pow(base, power);
    
    document.getElementById("result30").innerHTML = "Result : " + res; 
  }

  //31 hex calculator 
  function calc31_1()
  {
    var num =  parseFloat(document.getElementById("n31_1").value);
    var hex = num.toString(16);
    document.getElementById("result31_1").innerHTML = "Hexadecimal : " + hex.toUpperCase(); 
  }

  function calc31_2()
  {
    var hex =  (document.getElementById("n31_2").value).toUpperCase();
    var num = parseInt(hex,16);
    document.getElementById("result31_2").innerHTML = "Decimal : " + num; 
  }


  //32 quadratic calculator
  function calc32()
  {
    var a =  parseFloat(document.getElementById("a32").value);
    var b =  parseFloat(document.getElementById("b32").value);
    var c =  parseFloat(document.getElementById("c32").value);
    var D = (b*b) - (4*a*c);
    var D_abs = Math.abs(D);
    var d = Math.pow(D_abs, 0.5); console.log(d);

    if(D<0)
    {
        var x1 = (-b/(2*a)).toFixed(3) ;
        var x2 =  (d/(2*a)).toFixed(3);
        document.getElementById("result32").innerHTML = "x1 : " + x1+"+i"+x2 + " and x2: " + x1+ "-i"+x2; 
    }
    if(D>0)
    {
        var x1_1 = (-b/(2*a));
        var x2_2 =  (d/(2*a));
        var x1 = (x1_1+x2_2).toFixed(3);
        var x2 = (x1_1-x2_2).toFixed(3);

        document.getElementById("result32").innerHTML = "x1 : " +  x1 + " and x2: " + x2; 
    }
    if(D==0)
    {
        var x = (-b/(2*a)).toFixed(3)
        document.getElementById("result32").innerHTML = "Roots are real and equal and those are : " + x;

    }
  }

  //33 log calculator 

  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  function calc33()
  {
    var a =  parseFloat(document.getElementById("l33").value);
    var b =  parseFloat(document.getElementById("b33").value);
    var y = getBaseLog(b,a);
    document.getElementById("result33").innerHTML= "Result : " + y; 
  }

  //34 Confidence interval calculator 
  function calc34()
  {
    var n =  parseFloat(document.getElementById("n34").value);
    var m =  parseFloat(document.getElementById("m34").value);
    var s =  parseFloat(document.getElementById("s34").value);
    var z =  parseFloat(document.getElementById("z34").value);

    var c1 = m + ((z*s)/(Math.pow(n,0.5)));
    var c2 = m - ((z*s)/(Math.pow(n,0.5)));

    document.getElementById("result34").innerHTML = "The confidence interval is from " + c2.toFixed(3)+ " to " +c1.toFixed(3);
  }

  //35 distance calculator 
  function calc35_1()
  {
    var xa =  parseFloat(document.getElementById("xa_34").value);
    var ya =  parseFloat(document.getElementById("ya_34").value);
    var xb =  parseFloat(document.getElementById("xb_34").value);
    var yb =  parseFloat(document.getElementById("yb_34").value);

    var x = Math.pow(xa-xb,2);
    var y = Math.pow(ya-yb,2);
    var distance = Math.pow(x+y,0.5);
   

    document.getElementById("result35_1").innerHTML = "The distance between point A and point B is : " + distance.toFixed(3) + " units";
  }

  function calc35_2()
  {
    var xa =  parseFloat(document.getElementById("xa2_34").value);
    var ya =  parseFloat(document.getElementById("ya2_34").value);
    var za =  parseFloat(document.getElementById("za2_34").value);
    var xb =  parseFloat(document.getElementById("xb2_34").value);
    var yb =  parseFloat(document.getElementById("yb2_34").value);
    var zb =  parseFloat(document.getElementById("zb2_34").value);
    var x = Math.pow(xa-xb,2);
    var y = Math.pow(ya-yb,2);
    var z = Math.pow(za-zb,2);
    var distance = Math.pow(x+y+z,0.5);
    document.getElementById("result35_2").innerHTML = "The distance between point A and point B is : " + distance.toFixed(3) + " units";
  }

  //36 : right triangle 
  function calc36()
{
    var h = parseFloat(document.getElementById("h36").value);
    var b = parseFloat(document.getElementById("b36").value);

    var hyp = Math.pow(((h*h)+(b*b)),0.5);
    var area =  0.5*h *b;
    var perimeter = h+b+ hyp;
    var height = (h*b)/hyp;
    var circumraidus = hyp/2;
    var inradius = (h*b)/(h+b+hyp);
    document.getElementById("result36").innerHTML= "Hypoteneuse : " + hyp.toFixed(3) ; 
    document.getElementById("result36_2").innerHTML = "Area : " + area.toFixed(3);
    document.getElementById("result36_3").innerHTML = "Perimeter : " + perimeter.toFixed(3);
    document.getElementById("result36_4").innerHTML = "Height : " + height.toFixed(3);
    document.getElementById("result36_5").innerHTML = "Circumradius : " + circumraidus.toFixed(3) + " and inradius : " + inradius.toFixed(3);
}

//37 : surface area calculator 

function calc37_1() //sphere
{
    var r = parseFloat(document.getElementById("r1_37").value);
    var area = 4*3.14*r*r;
    document.getElementById("result37_1").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}
function calc37_2() //cone
{
    var r = parseFloat(document.getElementById("r2_37").value);
    var h = parseFloat(document.getElementById("h2_37").value);
    var area = 3.14*r*(r+ Math.pow(((h*h)+(r*r)),0.5));
    document.getElementById("result37_2").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}
function calc37_3() //cube 
{
    var s = parseFloat(document.getElementById("s3_37").value);
    var area = 6*s*s;
    document.getElementById("result37_3").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}
function calc37_4() //cuboid
{
    var l = parseFloat(document.getElementById("l4_37").value);
    var b = parseFloat(document.getElementById("b4_37").value);
    var h = parseFloat(document.getElementById("h4_37").value);
    var area = 2*((l*b) + (l*h) + (h*b));
    document.getElementById("result37_4").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}
function calc37_5() //cylinder
{
    var r = parseFloat(document.getElementById("r5_37").value);
    var h = parseFloat(document.getElementById("h5_37").value);
    var area = (2*3.14*r*h) + (3.14*2*r*r);
    document.getElementById("result37_5").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
    
}
function calc37_6()//frustum
{
    var tr = parseFloat(document.getElementById("tr6_37").value);
    var br = parseFloat(document.getElementById("br6_37").value);
    var h = parseFloat(document.getElementById("h6_37").value);
    var l = Math.pow(((h*h)+ ((tr*tr)-(br*br))),0.5 );
    var area = (3.14*l*(tr+br))+ (3.14*tr*tr) + (3.14*br*br);
    document.getElementById("result37_6").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}
function calc37_7() //hemisphere
{
    var r = parseFloat(document.getElementById("r7_37").value);
    var area = 3*3.14*r*r;
    document.getElementById("result37_7").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}
function calc37_8() //square pyramid
{
    var b = parseFloat(document.getElementById("b8_37").value);
    var h = parseFloat(document.getElementById("h8_37").value);

    var second_term =  Math.pow(((b*b/4) + (h*h)),0.5);
    var area = (b*b)+ (2*b*second_term);
    document.getElementById("result37_8").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
    
}
function calc37_9() //capusle
{
    var b = parseFloat(document.getElementById("b9_37").value); //r
    var h = parseFloat(document.getElementById("h9_37").value);//a
    var area = 2*3.14*b*((2*b)+h);
    document.getElementById("result37_9").innerHTML= "Surface area : "+ area.toFixed(3) + " sq units";
}



//38 LCM calculator 

numlist38 = new Array
function add38() {
    var m = parseFloat(document.getElementById("add38").value);
    numlist38.push(m);
    document.getElementById("add38").value = " ";
    var str = "";
    for (i = 0; i < numlist38.length; i++) {
        str = str + numlist38[i] + " ";
    }
    var d = document.getElementById("numlist38");
    d.innerHTML = str;
}

function calc38()
{
    function gcd(a, b) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }

// Returns LCM of array elements
function findlcm(arr, n)
{
    // Initialize result
    let ans = arr[0];
 
    // ans contains LCM of arr[0], ..arr[i]
    // after i'th iteration,
    for (let i = 1; i < n; i++)
        ans = (((arr[i] * ans)) /
                (gcd(arr[i], ans)));
 
    return ans;
}

  
    let n = numlist38.length;
    document.getElementById("result38").innerHTML= "LCM of the given list is : " +(findlcm(numlist38, n) );
}


//39th -Factor calculator 
function calc39()
{
    var n = parseFloat(document.getElementById("n39").value);
    var i;
    var str = "";
    for(i=1; i<=n ; i++)
    {
       if(n%i==0)
       {
          str = str + i + " ";
       }
    }

    document.getElementById("result39").innerHTML = "The factors of " + n + " are: " + str;
}

//40 Matrix calculator 


//41 Big number calculator
function calc41()
{
    var x = parseFloat(document.getElementById("x41").value);
    var y = parseFloat(document.getElementById("y41").value);
    var op = (document.getElementById("op41").value);
    var res = document.getElementById("result41");

    if(op==1) //add
    {
        res.innerHTML= x+y;
    }
    if(op==2) //subtract
    {
        res.innerHTML= x-y;
    }
    if(op==3) //mul
    {
        res.innerHTML= x*y;
    }
    if(op==4) //divide
    {
        res.innerHTML= x/y;
    }
    if(op==5) //exponent
    {
        res.innerHTML= Math.pow(x,y);
    }
    if(op==6) //root
    {
        res.innerHTML= Math.pow(x,0.5);
    }
    if(op==7) //sq
    {
        res.innerHTML= x*x;
    }
    if(op==8) //factorial
    {
        var fac=1;
        var i;
        for(i=1; i<=x;i++)
        {
            fac= fac*i;
        }
        console.log(fac);
        res.innerHTML= fac;
    }
    
}


//42 Common factor Calculator 

numlist42 = new Array
function add42() {
    var m = parseFloat(document.getElementById("add42").value);
    numlist42.push(m);
    document.getElementById("add42").value = " ";
    var str = "";
    for (i = 0; i < numlist42.length; i++) {
        str = str + numlist42[i] + " ";
    }
    var d = document.getElementById("numlist42");
    d.innerHTML = str;
}

function calc42()
{
    let n = numlist42.length;
    common = new Array;

    var max = numlist42[n-1];
    var i,j;

    for(i=1; i<=max; i++)
    {
        for(j=0; j<n; j++)
        {
            if(numlist42[j]%i!=0)
            {
                break;
            }
            else if(j==n-1){ //if j reaches till n-1 , that means i divides all the numbers completely
                common.push(i);
            }
        }
    }

    console.log(common);
    var str = "";
    for (i = 0; i < common.length; i++) {
        str = str + common[i] + " ";
    }
    var d = document.getElementById("result42");
    d.innerHTML = "The common factors of the given list are : "+str;
    
}


//43 Average calculator 

numlist43 = new Array
function add43() {
    var m = parseFloat(document.getElementById("add43").value);
    numlist43.push(m);
    document.getElementById("add43").value = " ";
    var str = "";
    for (i = 0; i < numlist43.length; i++) {
        str = str + numlist43[i] + " ";
    }
    var d = document.getElementById("numlist43");
    d.innerHTML = str;
}

function calc43()
{
    let n = numlist43.length;
    var sum =0; var i;
    for(i =0 ; i<n ; i++)
    {
        sum = sum + numlist43[i];
    }
  console.log(sum/n)
    var d = document.getElementById("result43");
    d.innerHTML = "The average of the given numbers is : " + (sum/n).toFixed(3);

    
    
}
