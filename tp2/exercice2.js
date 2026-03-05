let valeurs=[0, 1, "", "0", null, undefined, NaN, false, [], {}];
let i;
for(i=0;i<10;i++){
    let valeur=valeurs[i];
    let affichage;
   if(valeur===""){
        affichage ="chaine vide";
   }
   else 
        affichage=String(valeur);

    if(affichage){
    console.log(affichage,"->truthy");
}
    else 
{
    console.log(affichage,"falsy");
}
}