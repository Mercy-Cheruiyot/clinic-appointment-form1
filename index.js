document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById('myform').addEventListener("submit",(e)=>{
         e.preventDefault();
        alert(" Submitted.");
     })
   });
   const x=document.getElementById("navbar");
x.addEventListener("click",register);
 function register(){
alert("Register Here!");
   
}
function showHide(){
   const myform1= document.getElementById("myform1");
   if(myform1.style.display==="none"){
      myform1.style.display="block";
   }
   else{
      myform1.style.display="none";
   }
};
 