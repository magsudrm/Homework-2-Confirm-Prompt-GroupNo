function FindGroup(){
   let groupNo =document.getElementById("inp").value;
   let groupNo2=groupNo+ "";
   let group=groupNo2.slice(-3).slice(0,1);
   if(group=="1"){
    document.body.style.backgroundColor = "yellow";
    alert("Good Morning");
   }
   if(group=="2"){
    document.body.style.backgroundColor = "red";
    alert("Good Afternon");
   }
   if(group=="3"){
    document.body.style.backgroundColor = "black";
    alert("Good Evening");
   }
   else{
        document.body.style.backgroundColor = "gray";
        alert("Bele bir qrup yoxdur")
   }
}