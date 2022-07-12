//health calculators.


function calc5() {
    var height = parseFloat(document.getElementById("h5").value);
    var weight = parseFloat(document.getElementById("w5").value);
    var age = parseFloat(document.getElementById("a5").value);
    var bmr;
    if (document.getElementById("gender5").value == 1) {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    } else {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    }
    var act = document.getElementById("activity5").value;
    var calorie;
    if (act == 1) {
        calorie = bmr * 1.2;
    } else if (act == 2) {
        calorie = bmr * 1.375;
    } else if (act == 3) {
        calorie = bmr * 1.55;
    } else {
        calorie = bmr * 1.9;
    }

    document.getElementById("cal").innerHTML = calorie.toFixed(3) + " kcal/day";

}


function calc6() { //body fat percentage
    var height = parseFloat(document.getElementById("h6").value);
    var weight = parseFloat(document.getElementById("w6").value);
    var age = parseFloat(document.getElementById("a6").value);
    var bmi = weight / (Math.pow(height / 100), 2);
    var bfp;
    if (document.getElementById("gender6").value == 1) { //female
        if (age > 18) {
            bfp = (1.20 * bmi) + (0.23 * age) - 5.4;
        } else { //small girls
            bfp = (1.51 * bmi) - (0.70 * age) + 1.4;
        }
    } else {
        if (age > 18) { //adult males
            bfp = (1.20 * bmi) + (0.23 * age) - 16.2;
        } else { //small boys
            bfp = (1.51 * bmi) - (0.70 * age) - 2.2;
        }
    }
    document.getElementById("cal6").innerHTML = bfp.toFixed(3) + "%";

}


function calc7() { //BMR calculator
    var height = parseFloat(document.getElementById("h7").value);
    var weight = parseFloat(document.getElementById("w7").value);
    var age = parseFloat(document.getElementById("a7").value);
    var bmr;
    if (document.getElementById("gender7").value == 1) {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    } else {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    }


    document.getElementById("cal7").innerHTML = bmr.toFixed(3) + " calories/day";

}




function calc8() { //ideal body weight 
    var height = parseFloat(document.getElementById("h8").value);
    // var weight = parseFloat(document.getElementById("w8").value);
    // var age = parseFloat(document.getElementById("a8").value);
    var bw;
    if (document.getElementById("gender8").value == 1) { //female
        bw = 45.5 + (0.91 * (height - 152.4));
    } else {
        bw = 50 + (0.91 * (height - 152.4));
    }

    document.getElementById("cal8").innerHTML = bw.toFixed(3) + " - " + (bw + 5).toFixed(3) + " kgs";

}


function calc9() { //pace calculator 

    var hours = parseFloat(document.getElementById("h9").value);
    var mins = parseFloat(document.getElementById("m9").value);
    var secs = parseFloat(document.getElementById("s9").value);
    total_secs = (hours * 60 * 60) + (mins * 60) + secs;

    var dist = parseFloat(document.getElementById("d9").value);
    var unit = (document.getElementById("unit9").value);
    var pace1; //kms
    var pace2; //miles
    var pace3; //yards
    if (unit == 1) {

        pace1 = (total_secs / dist);
        pace2 = (total_secs / (dist * 0.621371)); //miles 
        pace3 = (total_secs / (dist * 1093.61)); //yards
    }

    if (unit == 2) {
        pace1 = (total_secs / (dist * 1.60934)); //kms
        pace2 = (total_secs / (dist)); //miles
        pace3 = (total_secs / (dist * 1760)) //yards
    }

    if (unit == 3) {
        pace1 = (total_secs / (dist * 0.0009144)); //kms
        pace2 = (total_secs / (dist * 0.000568182)); //miles
        pace3 = (total_secs / dist);
    }

    document.getElementById("cal9").innerHTML = pace1.toFixed(3) + " seconds/kilometers";
    document.getElementById("cal9_1").innerHTML = pace2.toFixed(3) + " seconds/miles";
    document.getElementById("cal9_2").innerHTML = pace3.toFixed(3) + " seconds/yards";

}

//10th pregnancy calculator 


//11th due date calculator


//12th overweight calculator



function calc12() { //ideal body weight 
    var height = parseFloat(document.getElementById("h12").value);
    var weight = parseFloat(document.getElementById("w12").value);
    // var age = parseFloat(document.getElementById("a8").value);
    var bmi = (weight / (height * height / 10000)).toFixed(3);

    if (bmi < 17.5) {
        document.getElementById("cal12").innerHTML = "Underweight , with BMI : " + bmi;
    }

    if (bmi > 17.5 && bmi < 25) {
        document.getElementById("cal12").innerHTML = "Normal , with BMI : " + bmi;
    }

    if (bmi > 25) {
        document.getElementById("cal12").innerHTML = "Overweight , with BMI : " + bmi;
    }
}


//13th