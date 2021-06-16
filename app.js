function convert(){
    var temperature = document.getElementById('temp-1');
    var valueSelected = temperature.value;

   if (valueSelected == "c") {
    var convertedf = CtoF();
    return document.getElementById('result').value = convertedf + 'f';
    }else if (valueSelected == "f"){
       var convertedc = FtoC();
       return document.getElementById('result').value = convertedc + 'c';
    }

}
///==== Creating function that convert faranheit and Celcuis===

function CtoF(){
    var c = document.getElementById('input-temp').value;
    return (c * 9 / 5) + 32;
    
}
function FtoC(){
    var f = document.getElementById('input-temp').value;
    return (f - 32) * 5 / 9;
}