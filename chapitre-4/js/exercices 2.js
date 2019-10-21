var i;
var celsius;
var fahrenheit = -40;
for (i = 11; i < 40;i++){
    celsius = 5/9*(fahrenheit-32);
    document.write("\n" + celsius);
    fahrenheit += 5;
}