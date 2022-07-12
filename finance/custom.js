function calc1() {
    var salary = parseFloat(document.getElementById("salary").value);
    var days = parseFloat(document.getElementById("days").value);
    var hours = parseFloat(document.getElementById("hours").value) / days;
    var holidays = parseFloat(document.getElementById("holidays").value);
    var vacation = parseFloat(document.getElementById("vacation").value);
    var total_salary;
    if (document.getElementById("per").value == 1) { //hourly
        total_salary = salary * hours * 52;
        document.getElementById("h1").innerHTML = salary;
        var daily = (total_salary / (52 * days)).toFixed(3);
        document.getElementById("d1").innerHTML = daily;
        var weekly = (total_salary / 52).toFixed(3);
        document.getElementById("w1").innerHTML = weekly;
        var montly = (total_salary / 12).toFixed(3);
        document.getElementById("m1").innerHTML = montly;
        document.getElementById("y1").innerHTML = total_salary;

    }
    if (document.getElementById("per").value == 2) { //daily
        total_salary = salary * days * 52;
        document.getElementById("d1").innerHTML = salary;
        var un_hourly = (total_salary / (52 * hours * days)).toFixed(3);
        document.getElementById("h1").innerHTML = un_hourly;
        var weekly = (total_salary / 52).toFixed(3);
        document.getElementById("w1").innerHTML = weekly;
        var montly = (total_salary / 12).toFixed(3);
        document.getElementById("m1").innerHTML = montly;
        document.getElementById("y1").innerHTML = total_salary;


    }
    if (document.getElementById("per").value == 3) { //weekly
        total_salary = salary * 52;
        document.getElementById("w1").innerHTML = salary;
        var daily = (total_salary / (52 * days)).toFixed(3);
        document.getElementById("d1").innerHTML = daily;
        var un_hourly = (total_salary / (52 * hours * days)).toFixed(3);
        document.getElementById("h1").innerHTML = un_hourly;
        var montly = (total_salary / 12).toFixed(3);
        document.getElementById("m1").innerHTML = montly;
        document.getElementById("y1").innerHTML = total_salary;


    }
    if (document.getElementById("per").value == 4) { //montly
        total_salary = salary * 12;
        document.getElementById("m1").innerHTML = salary;
        var daily = (total_salary / (52 * days)).toFixed(3);
        document.getElementById("d1").innerHTML = daily;
        var un_hourly = (total_salary / (52 * hours * days)).toFixed(3);
        document.getElementById("h1").innerHTML = un_hourly;
        var weekly = (total_salary / 52).toFixed(3);
        document.getElementById("w1").innerHTML = weekly;
        document.getElementById("y1").innerHTML = total_salary;
    }
    if (document.getElementById("per").value == 5) { //yearly
        total_salary = salary;
        document.getElementById("y1").innerHTML = salary;
        var daily = (total_salary / (52 * days)).toFixed(3);
        document.getElementById("d1").innerHTML = daily;
        var un_hourly = (total_salary / (52 * hours * days)).toFixed(3);
        document.getElementById("h1").innerHTML = un_hourly;
        var weekly = (total_salary / 52).toFixed(3);
        document.getElementById("w1").innerHTML = weekly;
        var montly = (total_salary / 12).toFixed(3);
        document.getElementById("m1").innerHTML = montly;

    }

    //adjusted 
    var tdays = days * 52;
    var daily1 = (total_salary / (tdays - vacation - holidays)).toFixed(3);
    var hourly1 = (total_salary / ((tdays - vacation - holidays) * hours)).toFixed(3);
    var weekly1 = (total_salary / ((tdays - vacation - holidays) / days)).toFixed(3);
    var monthly1 = (total_salary / ((tdays - vacation - holidays) / 30)).toFixed(3);
    var yearly1 = (total_salary / ((tdays - vacation - holidays) / 365)).toFixed(3);

    document.getElementById("h2").innerHTML = hourly1;
    document.getElementById("d2").innerHTML = daily1;
    document.getElementById("w2").innerHTML = weekly1;
    document.getElementById("m2").innerHTML = monthly1;
    document.getElementById("y2").innerHTML = yearly1;

}


function calc2() {

    var p = parseFloat(document.getElementById("s2").value);
    var t = parseFloat(document.getElementById("t2").value);
    var r = parseFloat(document.getElementById("r2").value) / 100;
    var n = parseFloat(document.getElementById("n2").value);
    var a = parseFloat(document.getElementById("a2").value);

    var interest = p * (Math.pow((1 + (r / n)), (n * t))) - p;
    document.getElementById("starting").innerHTML = p;
    document.getElementById("contribution").innerHTML = a * t;
    document.getElementById("interest").innerHTML = interest.toFixed(3);
    document.getElementById("amount").innerHTML = (p + (a * t) + interest).toFixed(3);

}

function calc3() {

    var p_age = parseFloat(document.getElementById("pa3").value);
    var r_age = parseFloat(document.getElementById("r3").value);
    var ir = parseFloat(document.getElementById("ir3").value) / 100;
    var pv = parseFloat(document.getElementById("ps3").value);

    var amount = (pv * (Math.pow((1 + ir), (r_age - p_age))) * 12).toFixed(3);
    document.getElementById("income3").innerHTML = amount;

}


function calc4() {

    var m = parseFloat(document.getElementById("pa4").value);
    var i = parseFloat(document.getElementById("r4").value) / 100;
    var n = parseFloat(document.getElementById("n4").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment4");
    payment.innerHTML = pay.toFixed(3);
}