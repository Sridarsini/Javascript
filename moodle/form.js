document.getElementById("firstName").innerHTML="FirstName : ";
document.getElementById("secondName").innerHTML="SecondName : ";
document.getElementById("age").innerHTML="Age : ";
document.getElementById("qualification").innerHTML="Qualification : ";
document.getElementById("phone").innerHTML="PhoneNumber : ";
document.getElementById("email").innerHTML="E-mail : ";
document.getElementById("btn").innerHTML="Print Details";

function displayPrintDetails(){ 
    var firstName = document.getElementById("firstNameInput").value ;
    document.getElementById("firstNamePrint").innerHTML = "FirstName : "+ firstName;
    var secondName = document.getElementById("secondNameInput").value ;
    document.getElementById("secondNamePrint").innerHTML = "SecondName : "+ secondName;
    var age = document.getElementById("ageInput").value ;
    document.getElementById("agePrint").innerHTML = "Age : "+ age;
    var qualification = document.getElementById("qualificationInput").value ;
    document.getElementById("qualificationPrint").innerHTML = "Qualification : "+ qualification;
    var phoneNumber = document.getElementById("phoneInput").value ;
    document.getElementById("phoneNumber").innerHTML = "PhoneNumber : "+ phoneNumber;
    var email = document.getElementById("emailInput").value ;
    document.getElementById("emailId").innerHTML = "E-mail : "+ email;
}