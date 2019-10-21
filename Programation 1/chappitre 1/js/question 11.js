var prixBase;
var prixCommision;
var prixFrais;
var tpstpq;
var totale
prixBase= Number(prompt ("entrer le prix de char"));
prixCommision=Number (prixBase*0.12);
prixFrais=Number (prixBase*0.02);
tpstpq=(prixBase*0.15);
totale=(prixBase+prixFrais+prixCommision+tpstpq);
alert(prixCommision);
alert(prixFrais);
alert(tpstpq);
alert(totale);

