function CalcEstimate() {
   // Price List
    normal=75 ;
    club=100;
    royale=125;
    movie1 = 0;
    movie2 = 0;
    popcorn=100;
    drink=50;
   
    
   var result = 0.00;
   var allDataEntered = true;
   var outp=0;
   var not=0;
  


   if (document.getElementById("type").value === "movie1")
    {
     // result += movie1;
   } else if (document.getElementById("type").value === "movie2") {
     // result += movie2;
   } else {
      allDataEntered = false;
      alert("You must select the movie");
   }

   if (document.getElementById("low").checked)
   
    {
      result += normal;
   } else if (document.getElementById("half").checked) {
      result += club;
   } else if (document.getElementById("full").checked) {
      result += royale;
   } else {
      allDataEntered = false;
      alert("You must select the class");
   }
   
   if (document.getElementById("numoftckt").value<=10 && document.getElementById("numoftckt").value>=0){
       not=document.getElementById("numoftckt").value;
       result=(not*result);
   }else{
        allDataEntered = false;
        alert("You must enter the value under the given range for number of tickets");
   }
   
   

   if (document.getElementById("popcorn").checked) {
      result += popcorn;
   }

   if (document.getElementById("drink").checked) {
      result += drink;
   }

   if (allDataEntered) {
  // document.getElementById("outp1").innerHTML = result;
    $("#outp1").html(result);
    $("#outp1").css("color", "green");
    
      
   }

}