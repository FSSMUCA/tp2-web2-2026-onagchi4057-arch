let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
console.log("===== RÉCAPITULATIF =====");
console.log("Produit   :",nomProduit);
console.log("Quantité:",quantite);
console.log("Prix unit.:",prix.toFixed(2),"MAD");
let prixTotal=(prix * quantite).toFixed(2)
console.log("Sous-total:",prixTotal,"MAD");
let reduction = ((prixTotal)/10).toFixed(2);
if((codePromo == null) && estMembre){
    console.log("reduction est ,",reduction,"MAS");
}
else{
    console.log("0");
}
let total=(prixTotal-reduction).toFixed(3)
console.log("total final :",total,"MAS");
if(soldeCompte => total){
    console.log("Paiement accepté");
    let solde=soldeCompte-(prixTotal-reduction);
    console.log("solde",solde.toFixed(3),"MAD");
}
else{
    console.log("Solde insuffisant");
}