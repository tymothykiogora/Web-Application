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

//calculate the century.
var cc=(YY-1)/100+1;

//formula that will calculate the specific day of your birthday
var dayOfWeek=Math.floor ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*MM+1/10)) + DD) % 7;

var theFemaleGender=document.getElementById("female");
var theMaleGender=document.getElementById('male');

//check if a radio button has been checked.
if(theFemaleGender.checked)
{
//get value from radio button.
var theFemaleValue = theFemaleGender.value;
}
else if (theMaleGender.checked)
{
//get value from radio button
var theMaleValue = theMaleGender.value;
}

//check if the value return female or male then display the corresponding akan name.
if(theFemaleValue==="female") {
    document.getElementById("display").innerHTML="Your Akan Name is "+femaleNames[dayOfWeek];
    
    } else{
    document.getElementById("display").innerHTML="Your Akan Name is "+maleNames[dayOfWeek];
    }