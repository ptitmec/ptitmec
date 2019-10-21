var i;
var montant=5;
var montanttaxe;
for(i= 5; montant<=100; i++){
    montanttaxe=montant*1.09;
    montant += 5;
    i++;
    document.write("<br>" +montanttaxe)
}