var impaire=1
var i
var nombre=1
for(i=1;impaire<=49;i++){
    document.write("\n"+impaire)
    impaire+= 2

    if(nombre===5){
        document.write("<br>")
        nombre-=5
    }
nombre++
}