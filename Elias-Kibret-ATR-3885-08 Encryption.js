// Additive Cipher
//______________________________________________________
const plain_Text = window.prompt("please Enter plain text").toLowerCase();
/*Accept string input and Change to small letters  */
var regex = /[a-zA-Z,]/g;
/* this is a regural expresion just to valid to accept letter only hence Additive cipher is works for 26 alphabet only*/

var valid = plain_Text.match(regex).toString().replace(/,/g, "");
//Validting

const key = +window.prompt("please Enter Key");
/* Accept key for Encription */

var cipher_Text_Index = [];
var cipher_Text = [];
for (var index = 0; index < valid.length; index++) {
  cipher_Text_Index.push(((valid.charCodeAt(index) - 97 + key) % 26) + 65);
  /* This part is used to calculate the cipher character for the string using the provided formula for each character in the string and store the ASCII value */
  cipher_Text.push(String.fromCharCode(cipher_Text_Index[index]));
  /*this part is used to convert ASCII code to character */
}
alert(cipher_Text.toString().replace(/,/g, ""));
/*this part is used to show the Encripted form of plain text*/
