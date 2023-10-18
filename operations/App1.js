function add()
{
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    var Total=firstValue + secondValue;
    document.getElementById("Result").innerHTML=firstValue+ "+" +secondValue+ "="+Total;
}
function sub()
{
    var firstValue=document.getElementById("firstValue").value;
    var secondValue=document.getElementById("secondValue").value;
    var Total=firstValue - secondValue;
    document.getElementById("Result").innerHTML=firstValue+ "-" +secondValue+ "="+Total;
}
function multiply()
{
    var firstValue=document.getElementById("firstValue").value;
    var secondValue=document.getElementById("secondValue").value;
    var Total=firstValue * secondValue;
    document.getElementById("Result").innerHTML=firstValue+ "*" +secondValue+ "="+Total;
}
function divide()
{
    var firstValue=document.getElementById("firstValue").value;
    var secondValue=document.getElementById("secondValue").value;
    var Total=firstValue / secondValue;
    document.getElementById("Result").innerHTML=firstValue+ "/" +secondValue+ "="+Total;
}
function modulus()
{
    var firstValue=document.getElementById("firstValue").value;
    var secondValue=document.getElementById("secondValue").value;
    var Total=firstValue % secondValue;
    document.getElementById("Result").innerHTML=firstValue+ "%" +secondValue+ "="+Total;
}