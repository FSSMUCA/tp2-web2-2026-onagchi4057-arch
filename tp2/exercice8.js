let nom = "   Fatima   "
let nomCorrige = nom.trim();
if (nomCorrige === "") {
  nomCorrige = "Inconnu"
}
console.log("nom : \"" + nomCorrige + "\"");
let age = "23"
let ageENtier =Number(age);
if(ageENtier==NaN || ageENtier<=0){
    console.log("invalide");
}
else{
    console.log("age "+ageENtier+"age valide");
}
let email = "fatima@example"
if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
    console.log("invalide");
}
else {
    console.log(email+"valide")
}
let scoreJeu = "150pts"
console.log(parseInt(scoreJeu));
let test="false"
let estAdmin = test==="false";
console.log(estAdmin);
let derniereConnexion = null
console.log(derniereConnexion ?? "Jamais connecté" )
let nombreConnexions = "0"
if(Number(nombreConnexions)===0){
    console.log("Aucune connexion")
}