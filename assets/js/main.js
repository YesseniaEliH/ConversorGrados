function convertirCelsius(){
    var gF = document.getElementById("fahrenheit");
    var cel = (parseInt(gF.value) - 32) * (5 / 9);
   document.getElementById("celsius").value = cel;
}

function convertirFahrenheit(){
    var gC = document.getElementById("celsius");
    var cel = (1.8 * parseInt(gC.value) + 32);
   document.getElementById("fahrenheit").value = cel;
}
