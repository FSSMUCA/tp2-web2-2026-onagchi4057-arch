let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
let a,b,c,d,e,f,g,h,k,l;
a=console.log(nom ?? "valeur par défaut");
b=console.log(age ?? "valeur par défaut");
c=console.log(ville ?? "valeur par défaut");
d=console.log(score ?? "valeur par défaut");
e=console.log(actif?? "valeur par défaut");
f=console.log(nom || "valeur par défaut");
g=console.log(age || "valeur par défaut");
h=console.log(ville || "valeur par défaut");
k=console.log(score || "valeur par défaut");
l=console.log(actif|| "valeur par défaut");
if(a==f)
    console.log("nom   : ?? et || -> même résultat");

else
    console.log("nom   : ?? et || -> resultat differnte");
if(b==g)
    console.log("age  : ?? et || ->même résultat ");
else 
    console.log("age  : ?? et || -> resultat differnte");
if(c==h)
    console.log("ville   : ?? et || -> même résultat");

else
    console.log("ville   : ?? et || -> reultat differnte");
if(d==k)
    console.log("score   : ?? et || -> même résultat");

else
    console.log("score  : ?? et || -> même differnte");
if(e==l)
    console.log("actif  : ?? et || -> même résultat");

else
    console.log("actif   : ?? et || -> même differnte");
