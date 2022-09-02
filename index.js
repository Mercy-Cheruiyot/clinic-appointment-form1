let a;
function showHide(){
   if(a===1){
      document.getElementById("myform").style.display="in-line";
      return a=0;
   }
   else{
      document.getElementById("myform").style.display="none";
      return a=1;
   }


}
     document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById('myform').addEventListener("submit",(e)=>{
         e.preventDefault();
        alert("I've been submitted.");
      })
      document.getElementById("navbar").addEventListener("click",()=>{
         alert("Register Here!");
      })
   showHide();

     })



