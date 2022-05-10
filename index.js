let prompt = require('prompt');
prompt.start();
let origWorld = "é !  te";
let cibleWorld = "";

function palindrome(string){
    let manipulateString = [];
    let cleanStr = strNoAccent(string);

    cleanStr = removeSpecialChars(cleanStr);
    cleanStr = cleanStr.toLowerCase();
    origWorld = cleanStr;
    manipulateString = cleanStr.split("");
    manipulateString = manipulateString.reverse();
    cibleWorld = manipulateString.join("");

    if(cibleWorld === origWorld){
        return true;
    }else{
        return false;
    }


    console.log(cibleWorld);
}
function clean(string){

}
function strNoAccent(a) {
    let b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ",
        c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
        d="";
    for(let i = 0, j = a.length; i < j; i++) {
      let e = a.substr(i, 1);
      d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
    }
    return d;
  }
  
  strNoAccent('tést');
  // renvoie : "test"

function removeSpecialChars(str) {
    return str.replace(/(?!\w|\s)./g, '')
      .replace(/\s+/g, '')
      .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
  }
  console.log("Tapez votre mot:");

  prompt.get([{
    name: 'data',
    required: true
  },], function (err, result) {
    palindrome(result.data) === true ? console.log("Ceci est un palindrome") : console.log("ceci n'est pas un palindrome");
  });
