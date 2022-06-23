function length() {
    // var lens = document.getElementsbyClass("length");
    var len = document.getElementById("length");
    len.style.display = "flex";
    var temp = document.getElementById("temp");
    temp.style.display = "none";
    var area = document.getElementById("area");
    area.style.display = "none";
    var wei = document.getElementById("weight");
    wei.style.display = "none";
}

function temp() {
    // var lens = document.getElementsbyClass("length");
    var temp = document.getElementById("temp");
    temp.style.display = "flex";
    var len = document.getElementById("length");
    len.style.display = "none";
    var area = document.getElementById("area");
    area.style.display = "none";
    var wei = document.getElementById("weight");
    wei.style.display = "none";
}

function area() {
    // var lens = document.getElementsbyClass("length");
    var area = document.getElementById("area");
    area.style.display = "flex";
    var len = document.getElementById("length");
    len.style.display = "none";
    var temp = document.getElementById("temp");
    temp.style.display = "none";
    var wei = document.getElementById("weight");
    wei.style.display = "none";
}

function weight() {
    // var lens = document.getElementsbyClass("length");
    var wei = document.getElementById("weight");
    wei.style.display = "flex";
    var len = document.getElementById("length");
    len.style.display = "none";
    var temp = document.getElementById("temp");
    temp.style.display = "none";
    var area = document.getElementById("area");
    area.style.display = "none";
}

function calc54() {

    var m = parseFloat(document.getElementById("m54").value);
    var i = document.getElementById("input").value;
    var o = document.getElementById("output").value;
    var ans = document.getElementById("answer");

    //index number 1 , meter
    if (i == 1 && o == 1) {
        var cm = m;
        ans.innerHTML = cm + " mts";
    }

    if (i == 1 && o == 2) {
        var cm = m * 100;
        ans.innerHTML = cm + " cms";
    }
    if (i == 1 && o == 3) {
        var cm = m / 1000;
        ans.innerHTML = cm + " Kms";
    }

    if (i == 1 && o == 4) {
        var cm = m * 1000;
        ans.innerHTML = cm + " mm";
    }
    if (i == 1 && o == 5) {
        var cm = m * Math.pow(10, 9);
        ans.innerHTML = cm + " nm";
    }


    if (i == 1 && o == 6) {
        var cm = m * Math.pow(10, 6);
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 1 && o == 7) {
        var cm = m * 1.09361;
        ans.innerHTML = cm + " yards";
    }

    if (i == 1 && o == 8) {
        var cm = m * 3.280;
        ans.innerHTML = cm + " foots";
    }
    if (i == 1 && o == 9) {
        var cm = m * 39.37;
        ans.innerHTML = cm + " inch";
    }

    if (i == 1 && o == 10) {
        var cm = m * 0.000621;
        ans.innerHTML = cm + " miles";
    }


    // index number 2 , centimeter


    if (i == 2 && o == 1) {
        var cm = m / 100;
        ans.innerHTML = cm + " mts";
    }

    if (i == 2 && o == 2) {
        var cm = m;
        ans.innerHTML = cm + " cms";
    }
    if (i == 2 && o == 3) {
        var cm = m / (1000 * 100);
        ans.innerHTML = cm + " Kms";
    }

    if (i == 2 && o == 4) {
        var cm = m * 10;
        ans.innerHTML = cm + " mm";
    }
    if (i == 2 && o == 5) {
        var cm = m * Math.pow(10, 7);
        ans.innerHTML = cm + " nm";
    }


    if (i == 2 && o == 6) {
        var cm = m * Math.pow(10, 4);
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 2 && o == 7) {
        var cm = m * 0.0109361;
        ans.innerHTML = cm + " yards";
    }

    if (i == 2 && o == 8) {
        var cm = m * 0.03280;
        ans.innerHTML = cm + " foots";
    }
    if (i == 1 && o == 9) {
        var cm = m * 0.3937;
        ans.innerHTML = cm + " inch";
    }

    if (i == 1 && o == 10) {
        var cm = m * 0.00000621;
        ans.innerHTML = cm + " miles";
    }

    //kilometer index 3

    if (i == 3 && o == 1) {
        var cm = m * 1000;
        ans.innerHTML = cm + " mts";
    }

    if (i == 3 && o == 2) {
        var cm = m * 100000;
        ans.innerHTML = cm + " cms";
    }
    if (i == 3 && o == 3) {
        var cm = m;
        ans.innerHTML = cm + " Kms";
    }

    if (i == 3 && o == 4) {
        var cm = m * 1000000;
        ans.innerHTML = cm + " mm";
    }
    if (i == 3 && o == 5) {
        var cm = m * Math.pow(10, 12);
        ans.innerHTML = cm + " nm";
    }


    if (i == 3 && o == 6) {
        var cm = m * Math.pow(10, 9);
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 3 && o == 7) {
        var cm = m * 1093.61;
        ans.innerHTML = cm + " yards";
    }

    if (i == 3 && o == 8) {
        var cm = m * 3280.84;
        ans.innerHTML = cm + " foots";
    }
    if (i == 3 && o == 9) {
        var cm = m * 39370.1;
        ans.innerHTML = cm + " inches";
    }

    if (i == 3 && o == 10) {
        var cm = m * 0.621371;
        ans.innerHTML = cm + " miles";
    }


    //milimeter index 4

    if (i == 4 && o == 1) {
        var cm = m / 1000;
        ans.innerHTML = cm + " mts";
    }

    if (i == 4 && o == 2) {
        var cm = m / 10;
        ans.innerHTML = cm + " cms";
    }
    if (i == 4 && o == 3) {
        var cm = m / (1000000);
        ans.innerHTML = cm + " Kms";
    }

    if (i == 4 && o == 4) {
        var cm = m;
        ans.innerHTML = cm + " mm";
    }
    if (i == 4 && o == 5) {
        var cm = m * Math.pow(10, 6);
        ans.innerHTML = cm + " nm";
    }


    if (i == 4 && o == 6) {
        var cm = m * Math.pow(10, 3);
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 4 && o == 7) {
        var cm = m * 0.00109361;
        ans.innerHTML = cm + " yards";
    }

    if (i == 4 && o == 8) {
        var cm = m * 0.00328084;
        ans.innerHTML = cm + " foots";
    }
    if (i == 4 && o == 9) {
        var cm = m * 0.0393701;
        ans.innerHTML = cm + " inches";
    }

    if (i == 4 && o == 10) {
        var cm = m * 0.000000621371;
        ans.innerHTML = cm + " miles";
    }

    //index 5 nanometer 

    if (i == 5 && o == 1) {
        var cm = m * Math.pow(10, -9);
        ans.innerHTML = cm + " mts";
    }

    if (i == 5 && o == 2) {
        var cm = m * Math.pow(10, -7);
        ans.innerHTML = cm + " cms";
    }
    if (i == 5 && o == 3) {
        var cm = m * Math.pow(10, -12);
        ans.innerHTML = cm + " Kms";
    }

    if (i == 5 && o == 4) {
        var cm = m * Math.pow(10, -6);
        ans.innerHTML = cm + " mm";
    }
    if (i == 5 && o == 5) {
        var cm = m;
        ans.innerHTML = cm + " nm";
    }


    if (i == 5 && o == 6) {
        var cm = m * Math.pow(10, -3);
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 5 && o == 7) {
        var cm = m * 1.09361e-9;
        ans.innerHTML = cm + " yards";
    }

    if (i == 5 && o == 8) {
        var cm = m * 3.28084e-9;
        ans.innerHTML = cm + " feet";
    }
    if (i == 5 && o == 9) {
        var cm = m * 3.93701e-8;
        ans.innerHTML = cm + " inches";
    }

    if (i == 5 && o == 10) {
        var cm = m * 6.21371e-13;
        ans.innerHTML = cm + " miles";
    }

    //index 6 - micrometer 

    if (i == 6 && o == 1) {
        var cm = m * Math.pow(10, -6);
        ans.innerHTML = cm + " mts";
    }

    if (i == 6 && o == 2) {
        var cm = m * Math.pow(10, -4);
        ans.innerHTML = cm + " cms";
    }
    if (i == 6 && o == 3) {
        var cm = m * Math.pow(10, -9);
        ans.innerHTML = cm + " Kms";
    }

    if (i == 6 && o == 4) {
        var cm = m * Math.pow(10, -3);
        ans.innerHTML = cm + " mm";
    }
    if (i == 6 && o == 5) {
        var cm = m * Math.pow(10, 3);
        ans.innerHTML = cm + " nm";
    }


    if (i == 6 && o == 6) {
        var cm = m;
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 6 && o == 7) {
        var cm = m * 1.09361e-6;
        ans.innerHTML = cm + " yards";
    }

    if (i == 6 && o == 8) {
        var cm = m * 3.28084e-9;
        ans.innerHTML = cm + " feet";
    }
    if (i == 6 && o == 9) {
        var cm = m * 3.28084e-6;
        ans.innerHTML = cm + " inches";
    }

    if (i == 6 && o == 10) {
        var cm = m * 6.21371e-10;
        ans.innerHTML = cm + " miles";
    }

    //index 7 - yard 

    if (i == 7 && o == 1) {
        var cm = m * 0.9144;
        ans.innerHTML = cm + " mts";
    }

    if (i == 7 && o == 2) {
        var cm = m * 91.44;
        ans.innerHTML = cm + " cms";
    }
    if (i == 7 && o == 3) {
        var cm = m * 0.0009144;
        ans.innerHTML = cm + " Kms";
    }

    if (i == 7 && o == 4) {
        var cm = m * 914.4;
        ans.innerHTML = cm + " mm";
    }
    if (i == 7 && o == 5) {
        var cm = m * 9.144e+8;
        ans.innerHTML = cm + " nm";
    }

    if (i == 7 && o == 6) {
        var cm = m * 914400;
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 7 && o == 7) {
        var cm = m;
        ans.innerHTML = cm + " yards";
    }

    if (i == 7 && o == 8) {
        var cm = m * 3;
        ans.innerHTML = cm + " feet";
    }
    if (i == 7 && o == 9) {
        var cm = m * 36;
        ans.innerHTML = cm + " inches";
    }

    if (i == 7 && o == 10) {
        var cm = m * 0.000568182;
        ans.innerHTML = cm + " miles";
    }

    //index 8 - foot


    if (i == 8 && o == 1) {
        var cm = m * 0.3048;
        ans.innerHTML = cm + " mts";
    }

    if (i == 8 && o == 2) {
        var cm = m * 30.48;
        ans.innerHTML = cm + " cms";
    }
    if (i == 8 && o == 3) {
        var cm = m * 0.0003048;
        ans.innerHTML = cm + " Kms";
    }

    if (i == 8 && o == 4) {
        var cm = m * 304.8;
        ans.innerHTML = cm + " mm";
    }
    if (i == 8 && o == 5) {
        var cm = m * 3.048e+8;
        ans.innerHTML = cm + " nm";
    }

    if (i == 8 && o == 6) {
        var cm = m * 304800;
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 8 && o == 7) {
        var cm = m * 0.333333;
        ans.innerHTML = cm + " yards";
    }

    if (i == 8 && o == 8) {
        var cm = m;
        ans.innerHTML = cm + " feet";
    }
    if (i == 8 && o == 9) {
        var cm = m * 12;
        ans.innerHTML = cm + " inches";
    }

    if (i == 8 && o == 10) {
        var cm = m * 0.000189394;
        ans.innerHTML = cm + " miles";
    }

    //index 9 Inch 
    if (i == 9 && o == 1) {
        var cm = m * 0.0254;
        ans.innerHTML = cm + " mts";
    }

    if (i == 9 && o == 2) {
        var cm = m * 2.54;
        ans.innerHTML = cm + " cms";
    }
    if (i == 8 && o == 3) {
        var cm = m * 2.54e-5;
        ans.innerHTML = cm + " Kms";
    }

    if (i == 9 && o == 4) {
        var cm = m * 25.4;
        ans.innerHTML = cm + " mm";
    }
    if (i == 9 && o == 5) {
        var cm = m * 2.54e+7;
        ans.innerHTML = cm + " nm";
    }

    if (i == 9 && o == 6) {
        var cm = m * 25400;
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 9 && o == 7) {
        var cm = m * 0.0277778;
        ans.innerHTML = cm + " yards";
    }

    if (i == 9 && o == 8) {
        var cm = m * 0.0833333;
        ans.innerHTML = cm + " feet";
    }
    if (i == 9 && o == 9) {
        var cm = m;
        ans.innerHTML = cm + " inches";
    }

    if (i == 9 && o == 10) {
        var cm = m * 1.57828e-5;
        ans.innerHTML = cm + " miles";
    }

    //index 10 miles

    if (i == 10 && o == 1) {
        var cm = m * 1609.34;
        ans.innerHTML = cm + " mts";
    }

    if (i == 10 && o == 2) {
        var cm = m * 160934;
        ans.innerHTML = cm + " cms";
    }
    if (i == 10 && o == 3) {
        var cm = m * 1.60934;
        ans.innerHTML = cm + " Kms";
    }

    if (i == 10 && o == 4) {
        var cm = m * 25.4;
        ans.innerHTML = cm + " mm";
    }
    if (i == 10 && o == 5) {
        var cm = m * 1.609e+12;
        ans.innerHTML = cm + " nm";
    }

    if (i == 10 && o == 6) {
        var cm = m * 1.609e+9;
        ans.innerHTML = cm + " micro meters";
    }

    if (i == 10 && o == 7) {
        var cm = m * 1760;
        ans.innerHTML = cm + " yards";
    }

    if (i == 10 && o == 8) {
        var cm = m * 5280;
        ans.innerHTML = cm + " feet";
    }
    if (i == 10 && o == 9) {
        var cm = m * 63360;
        ans.innerHTML = cm + " inches";
    }

    if (i == 10 && o == 10) {
        var cm = m;
        ans.innerHTML = cm + " miles";
    }

}


function calc55() {

    var m = parseFloat(document.getElementById("m254").value);
    var i = document.getElementById("input2").value;
    var o = document.getElementById("output2").value;
    var ans = document.getElementById("answer2");
    //index 1 celcius
    if (i == 1 && o == 1) {
        var tem = m;
        ans.innerHTML = tem + " celcius";
    }
    if (i == 1 && o == 2) {
        var tem = m + 273.15;
        ans.innerHTML = tem + " kelvin";
    }

    if (i == 1 && o == 3) {
        var tem = (m * 9 / 5) + 32;
        ans.innerHTML = tem + " Farenheit";
    }
    //index 2 kelvin

    if (i == 2 && o == 1) {
        var tem = m - 273.25;
        ans.innerHTML = tem + " celcius";
    }
    if (i == 2 && o == 2) {
        var tem = m;
        ans.innerHTML = tem + " kelvin";
    }

    if (i == 2 && o == 3) {
        var tem = ((m - 273.15) * 9 / 5) + 32;
        ans.innerHTML = tem + " Farenheit";
    }
    //index 3 

    if (i == 3 && o == 1) {
        var tem = (m - 2) * 5 / 9;
        ans.innerHTML = tem + " celcius";
    }
    if (i == 3 && o == 2) {
        var tem = m;
        ans.innerHTML = tem + " kelvin";
    }

    if (i == 3 && o == 3) {
        var tem = m;
        ans.innerHTML = tem + " Farenheit";
    }

}


//area

function calc56() {

    var m = parseFloat(document.getElementById("m354").value);
    var i = document.getElementById("input3").value;
    var o = document.getElementById("output3").value;
    var ans = document.getElementById("answer3");
    //index 1 sq metere
    if (i == 1 && o == 1) {
        var area = m;
        ans.innerHTML = area + " sq m";
    }

    if (i == 1 && o == 2) {
        var area = m * 1e-6;
        ans.innerHTML = area + " sq km";
    }
    if (i == 1 && o == 3) {
        var area = m * 10000;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 1 && o == 4) {
        var area = m * 1000000;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 1 && o == 5) {
        var area = m * 0.0001;
        ans.innerHTML = area + " hectare";
    }
    if (i == 1 && o == 6) {
        var area = m * 3.86102e-7;
        ans.innerHTML = area + " sq mile";
    }
    if (i == 1 && o == 7) {
        var area = m * 1.19599;
        ans.innerHTML = area + " sq yards";
    }
    if (i == 1 && o == 8) {
        var area = m * 10.7639;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 1 && o == 9) {
        var area = m * 1550;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 1 && o == 10) {
        var area = m * 0.000247105;
        ans.innerHTML = area + " Acre";
    }

    //index 2 - sq km
    if (i == 2 && o == 1) {
        var area = m * 1000000;
        ans.innerHTML = area + " sq m";
    }
    if (i == 2 && o == 2) {
        var area = m;
        ans.innerHTML = area + " sq km";
    }
    if (i == 2 && o == 3) {
        var area = m * 1e+10;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 2 && o == 4) {
        var area = m * 1e+12;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 2 && o == 5) {
        var area = m * 100;
        ans.innerHTML = area + " hectare";
    }
    if (i == 2 && o == 6) {
        var area = m * 0.386102;
        ans.innerHTML = area + " sq mile";
    }
    if (i == 2 && o == 7) {
        var area = m * 1.196e+6;
        ans.innerHTML = area + " sq yards";
    }
    if (i == 2 && o == 8) {
        var area = m * 1.076e+7;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 2 && o == 9) {
        var area = m * 1.55e+9;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 2 && o == 10) {
        var area = m * 247.105;
        ans.innerHTML = area + " Acre";
    }

    //index 3 sq cm
    if (i == 3 && o == 1) {
        var area = m * 0.0001;
        ans.innerHTML = area + " sq m";
    }
    if (i == 3 && o == 2) {
        var area = m * 1e-10;
        ans.innerHTML = area + " sq km";
    }
    if (i == 3 && o == 3) {
        var area = m;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 3 && o == 4) {
        var area = m * 100;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 3 && o == 5) {
        var area = m * 1e-8;
        ans.innerHTML = area + " hectare";
    }
    if (i == 3 && o == 6) {
        var area = m * 3.86102e-11;
        ans.innerHTML = area + " sq mile";
    }
    if (i == 3 && o == 7) {
        var area = m * 0.000119599;
        ans.innerHTML = area + " sq yards";
    }
    if (i == 3 && o == 8) {
        var area = m * 0.00107639;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 3 && o == 9) {
        var area = m * 0.155;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 3 && o == 10) {
        var area = m * 2.47105e-8;
        ans.innerHTML = area + " Acre";
    }
    //index 4 - sq mm
    if (i == 4 && o == 1) {
        var area = m * 1e-6;
        ans.innerHTML = area + " sq m";
    }
    if (i == 4 && o == 2) {
        var area = m * 1e-12;
        ans.innerHTML = area + " sq km";
    }
    if (i == 4 && o == 3) {
        var area = m * 0.01;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 4 && o == 4) {
        var area = m;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 4 && o == 5) {
        var area = m * 1e-10;
        ans.innerHTML = area + " hectare";
    }
    if (i == 4 && o == 6) {
        var area = m * 3.86102e-13;
        ans.innerHTML = area + " sq mile";
    }
    if (i == 4 && o == 7) {
        var area = m * 1.19599e-6;
        ans.innerHTML = area + " sq yards";
    }
    if (i == 4 && o == 8) {
        var area = m * 1.07639e-5;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 4 && o == 9) {
        var area = m * 0.00155;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 4 && o == 10) {
        var area = m * 2.47105e-10;
        ans.innerHTML = area + " Acre";
    }

    //index 5 hectare 
    if (i == 5 && o == 1) {
        var area = m * 10000;
        ans.innerHTML = area + " sq m";
    }
    if (i == 5 && o == 2) {
        var area = m * 0.01;
        ans.innerHTML = area + " sq km";
    }
    if (i == 5 && o == 3) {
        var area = m * 1e+8;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 5 && o == 4) {
        var area = m * 1e+10;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 5 && o == 5) {
        var area = m;
        ans.innerHTML = area + " hectare";
    }
    if (i == 5 && o == 6) {
        var area = m * 0.00386102;
        ans.innerHTML = area + " sq mile";
    }
    if (i == 5 && o == 7) {
        var area = m * 11959.9;
        ans.innerHTML = area + " sq yards";
    }
    if (i == 5 && o == 8) {
        var area = m * 107639;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 5 && o == 9) {
        var area = m * 15500015.996032;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 5 && o == 10) {
        var area = m * 2.471;
        ans.innerHTML = area + " Acre";
    }

    //index 6 sq mile
    if (i == 6 && o == 1) {
        var area = m * 2.59e+6;
        ans.innerHTML = area + " sq m";
    }
    if (i == 6 && o == 2) {
        var area = m * 2.59;
        ans.innerHTML = area + " sq km";
    }
    if (i == 6 && o == 3) {
        var area = m * 2.59e+10;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 6 && o == 4) {
        var area = m * 2.59e+12;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 6 && o == 5) {
        var area = m * 259;
        ans.innerHTML = area + " hectare";
    }
    if (i == 6 && o == 6) {
        var area = m;
        ans.innerHTML = area.toFixed(3) + " sq mile";
    }
    if (i == 6 && o == 7) {
        var area = m * 3097614.2199197988957;
        ans.innerHTML = area.toFixed(3) + " sq yards";
    }
    if (i == 6 && o == 8) {
        var area = m * 27878527.979;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 6 && o == 9) {
        var area = m * 4014508029.0161;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 6 && o == 10) {
        var area = m * 640;
        ans.innerHTML = area + " Acre";
    }

    //index 7 sq yard 

    if (i == 7 && o == 1) {
        var area = m * 0.8361;
        ans.innerHTML = area + " sq m";
    }
    if (i == 7 && o == 2) {
        var area = m * 8.369e-7;
        ans.innerHTML = area + " sq km";
    }
    if (i == 7 && o == 3) {
        var area = m * 8361.27;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 7 && o == 4) {
        var area = m * 836127;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 7 && o == 5) {
        var area = m * 8.361e-5;
        ans.innerHTML = area + " hectare";
    }
    if (i == 7 && o == 6) {
        var area = m * 3.22831e-7;
        ans.innerHTML = area.toFixed(3) + " sq mile";
    }
    if (i == 7 && o == 7) {
        var area = m;
        ans.innerHTML = area.toFixed(3) + " sq yards";
    }
    if (i == 7 && o == 8) {
        var area = m * 9.00;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 7 && o == 9) {
        var area = m * 1296.00;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 7 && o == 10) {
        var area = m * 0.0002;
        ans.innerHTML = area + " Acre";
    }
    //index 8 sq foot

    if (i == 8 && o == 1) {
        var area = m * 0.0929;
        ans.innerHTML = area + " sq m";
    }
    if (i == 8 && o == 2) {
        var area = m * 9.290e-8;
        ans.innerHTML = area + " sq km";
    }
    if (i == 8 && o == 3) {
        var area = m * 929.03;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 8 && o == 4) {
        var area = m * 92903;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 8 && o == 5) {
        var area = m * 9.29e-6;
        ans.innerHTML = area + " hectare";
    }
    if (i == 8 && o == 6) {
        var area = m * 3.587e-8;
        ans.innerHTML = area.toFixed(3) + " sq mile";
    }
    if (i == 8 && o == 7) {
        var area = m * 0.11111106333334194729;
        ans.innerHTML = area.toFixed(3) + " sq yards";
    }
    if (i == 8 && o == 8) {
        var area = m;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 8 && o == 9) {
        var area = m * 143.999;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 8 && o == 10) {
        var area = m * 2.295e-5;
        ans.innerHTML = area + " Acre";
    }

    //index 9 sq inch
    if (i == 9 && o == 1) {
        var area = m * 0.000645;
        ans.innerHTML = area + " sq m";
    }
    if (i == 9 && o == 2) {
        var area = m * 6.451e-10;
        ans.innerHTML = area + " sq km";
    }
    if (i == 9 && o == 3) {
        var area = m * 6.4516;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 9 && o == 4) {
        var area = m * 645.16;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 9 && o == 5) {
        var area = m * 6.4516e-8;
        ans.innerHTML = area + " hectare";
    }
    if (i == 9 && o == 6) {
        var area = m * 2.491e-10;
        ans.innerHTML = area.toFixed(3) + " sq mile";
    }
    if (i == 9 && o == 7) {
        var area = m * 0.000771612191358;
        ans.innerHTML = area.toFixed(3) + " sq yards";
    }
    if (i == 9 && o == 8) {
        var area = m * 0.00694;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 9 && o == 9) {
        var area = m;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 9 && o == 10) {
        var area = m * 1.59411e-7;
        ans.innerHTML = area + " Acre";
    }

    //index 10 acre 

    if (i == 10 && o == 1) {
        var area = m * 4046.86;
        ans.innerHTML = area + " sq m";
    }
    if (i == 10 && o == 2) {
        var area = m * 0.00404685;
        ans.innerHTML = area + " sq km";
    }
    if (i == 10 && o == 3) {
        var area = m * 4.047e+7;
        ans.innerHTML = area + " sq cm";
    }
    if (i == 10 && o == 4) {
        var area = m * 4.047e+9;
        ans.innerHTML = area + " sq mm";
    }
    if (i == 10 && o == 5) {
        var area = m * 0.4047;
        ans.innerHTML = area + " hectare";
    }
    if (i == 10 && o == 6) {
        var area = m * 0.0015625554356218753545;
        ans.innerHTML = area.toFixed(3) + " sq mile";
    }
    if (i == 10 && o == 7) {
        var area = m * 4840.1717173823217308;
        ans.innerHTML = area.toFixed(3) + " sq yards";
    }
    if (i == 10 && o == 8) {
        var area = m * 43561.545;
        ans.innerHTML = area + " sq feet";
    }
    if (i == 10 && o == 9) {
        var area = m * 6272862.545;
        ans.innerHTML = area + " sq inches";
    }
    if (i == 10 && o == 10) {
        var area = m;
        ans.innerHTML = area + " Acre";
    }

}



//weight



function calc57() {

    var m = parseFloat(document.getElementById("m454").value);
    var i = document.getElementById("input4").value;
    var o = document.getElementById("output4").value;
    var ans = document.getElementById("answer4");
    //index 1 kg
    if (i == 1 && o == 1) {
        var weight = m;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 1 && o == 2) {
        var weight = m * 1000;
        ans.innerHTML = weight + " grams"
    }

    if (i == 1 && o == 3) {
        var weight = m * 1000000;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 1 && o == 4) {
        var weight = m * 0.001;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 1 && o == 5) {
        var weight = m * 2.20462;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 1 && o == 6) {
        var weight = m * 35.273;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 1 && o == 7) {
        var weight = m * 5000;
        ans.innerHTML = weight + " carat"
    }

    //index 2 gram


    if (i == 2 && o == 1) {
        var weight = m / 1000;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 2 && o == 2) {
        var weight = m;
        ans.innerHTML = weight + " grams"
    }

    if (i == 2 && o == 3) {
        var weight = m * 1000;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 2 && o == 4) {
        var weight = m * 1e-6;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 2 && o == 5) {
        var weight = m * 0.0022;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 2 && o == 6) {
        var weight = m * 0.0352739;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 2 && o == 7) {
        var weight = m * 5;
        ans.innerHTML = weight + " carat"
    }

    //index 3 miligram

    if (i == 3 && o == 1) {
        var weight = m / 1000000;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 3 && o == 2) {
        var weight = m / 1000;
        ans.innerHTML = weight + " grams"
    }

    if (i == 3 && o == 3) {
        var weight = m;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 3 && o == 4) {
        var weight = m * 1e-9;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 3 && o == 5) {
        var weight = m * 2.2046e-6;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 3 && o == 6) {
        var weight = m * 3.527360000346e-5;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 3 && o == 7) {
        var weight = m * 0.005;
        ans.innerHTML = weight + " carat"
    }

    //index 4 metric ton
    if (i == 4 && o == 1) {
        var weight = m * 1000;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 4 && o == 2) {
        var weight = m * 1e+6;
        ans.innerHTML = weight + " grams"
    }

    if (i == 4 && o == 3) {
        var weight = m * 1e+9;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 4 && o == 4) {
        var weight = m;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 4 && o == 5) {
        var weight = m * 2204.62;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 4 && o == 6) {
        var weight = m * 35273.919;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 4 && o == 7) {
        var weight = m * 5e+6;
        ans.innerHTML = weight + " carat"
    }

    //index 5 pound

    if (i == 5 && o == 1) {
        var weight = m * 0.453;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 5 && o == 2) {
        var weight = m * 453.592;
        ans.innerHTML = weight + " grams"
    }

    if (i == 5 && o == 3) {
        var weight = m * 453592;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 5 && o == 4) {
        var weight = m * 0.000453;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 5 && o == 5) {
        var weight = m;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 5 && o == 6) {
        var weight = m * 16;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 5 && o == 7) {
        var weight = m * 2267.96;
        ans.innerHTML = weight + " carat"
    }

    //index 6 ounce 

    if (i == 6 && o == 1) {
        var weight = m * 0.0283495;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 6 && o == 2) {
        var weight = m * 28.349;
        ans.innerHTML = weight + " grams"
    }

    if (i == 6 && o == 3) {
        var weight = m * 28349.5;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 6 && o == 4) {
        var weight = m * 2.83495e-5;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 6 && o == 5) {
        var weight = m * 0.0624;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 6 && o == 6) {
        var weight = m;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 6 && o == 7) {
        var weight = m * 141.748;
        ans.innerHTML = weight + " carat"
    }

    //index 7 carat

    if (i == 7 && o == 1) {
        var weight = m * 0.0002;
        ans.innerHTML = weight + " Kg"
    }

    if (i == 7 && o == 2) {
        var weight = m * 0.2;
        ans.innerHTML = weight + " grams"
    }

    if (i == 7 && o == 3) {
        var weight = m * 200;
        ans.innerHTML = weight + " miligrams"
    }
    if (i == 7 && o == 4) {
        var weight = m * 2e-7;
        ans.innerHTML = weight + " metric ton"
    }

    if (i == 7 && o == 5) {
        var weight = m * 0.00044;
        ans.innerHTML = weight + " pounds"
    }
    if (i == 7 && o == 6) {
        var weight = m * 0.007054;
        ans.innerHTML = weight + " ounce"
    }

    if (i == 7 && o == 7) {
        var weight = m;
        ans.innerHTML = weight + " carat"
    }







}