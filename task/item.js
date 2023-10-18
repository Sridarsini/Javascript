var itemList=[]
function Add()
{
    var itemBox=document.getElementById("textBox").value;
    itemList.push(itemBox);
    var itemBox=document.getElementById("textBox").value="";
    // console.log(itemList);
    document.getElementById("itemList").innerHTML="<tr><td>" +itemList+ "</td></tr>";
}