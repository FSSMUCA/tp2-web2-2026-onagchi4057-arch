console.log(JSON.stringify(0).padEnd(10) + "et" + JSON.stringify("").padEnd(10) +
" -> " + JSON.stringify(0 == "").padEnd(7) +
" | " + JSON.stringify(0 === ""));

console.log(JSON.stringify(0).padEnd(10) + "et" + JSON.stringify("0").padEnd(10) +
" -> " + JSON.stringify(0 == "0").padEnd(7) +
" | " + JSON.stringify(0 === "0"));

console.log(JSON.stringify(0).padEnd(10) + "et" + JSON.stringify(false).padEnd(10) +
" -> " + JSON.stringify(0 == false).padEnd(7) +
" | " + JSON.stringify(0 === false));

console.log(JSON.stringify("").padEnd(10) + "et" + JSON.stringify(false).padEnd(10) +
" -> " + JSON.stringify("" == false).padEnd(7) +
" | " + JSON.stringify("" === false));

console.log(
JSON.stringify(null).padEnd(10) + "et" +
"undefined".padEnd(10) +
" -> " + JSON.stringify(null == undefined).padEnd(7) +
" | " + JSON.stringify(null === undefined))

console.log(JSON.stringify(null).padEnd(10) + "et" + JSON.stringify(false).padEnd(10) +
" -> " + JSON.stringify(null == false).padEnd(7) +
" | " + JSON.stringify(null === false));

console.log(JSON.stringify(NaN).padEnd(10) + "et" + JSON.stringify(NaN).padEnd(10) +
" -> " + JSON.stringify(NaN == NaN).padEnd(7) +
" | " + JSON.stringify(NaN === NaN));

console.log(JSON.stringify(1).padEnd(10) + "et" + JSON.stringify("1").padEnd(10) +
" -> " + JSON.stringify(1 == "1").padEnd(7) +
" | " + JSON.stringify(1 === "1"));

console.log(JSON.stringify(" \t\n ").padEnd(10) + "et" + JSON.stringify(0).padEnd(10) +
" -> " + JSON.stringify(" \t\n " == 0).padEnd(7) +
" | " + JSON.stringify(" \t\n " === 0));