// Declaring variables for female and male names.
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

//create a function that will be called whenever you hit the submit button.
function akanNames (){

    //Declare date inputs and get its values
 var DD=parseFloat(document.getElementById("dd").value);
var MM=parseFloat(document.getElementById("mm").value);
var YY=parseFloat(document.getElementById("yy").value);

//calculate the century.
var cc=(YY-1)/100+1;
