var controleur = prompt("Dans votre robots voulez vous un Raspberry Pi (RBP) ou un Raspberry Pi Zero (RBPZ)" +
    "Raspberry Pi = RBP et RaspBerry Pi Zero = RBPZ");
var moteur = prompt("entrer entre 2 et 24 moteur que vous voulez");
var camera = prompt("voulez vous une caméra oui ou non");
var leds = prompt(" voulez vous des leds pour les yeux oui ou non");
var prix = 0;
if (controleur === RBP) {
    prix += 55;
}
else {
    prix += 15;
}
if (moteur<=24||moteur >=2)
    prix=moteur*5;
if (camera === oui)
    prix+=35;
if (leds === oui)
    prix+=10;
prix+=20;
prix+=15;

document.write("Robot avec " + controleur + "," + moteur + "moteurs," + "une camera" + camera + "une Matrice de LEDS" + leds);
document.write(" voici le prix "+prix+"$");
prix=prix*1.15;
document.write("voici le prix avec l'ivraison" + prix + "$");