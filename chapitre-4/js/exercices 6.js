var i;
var montant = 0.01;
var jour = 1;
var montantTotal;

for (i = 1; jour <10; i++){
    montantTotal = montant * 2;
    jour ++;
    document.write(jour + "\n");
    document.write(montantTotal + "<br>");
    montant = montant * 2;
}
