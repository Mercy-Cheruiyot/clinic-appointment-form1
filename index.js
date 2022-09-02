let navbar=document.getElementById("navbar")

document.getElementById("navbar").addEventListener("click",()=>{
   alert("Register Here!");
     document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById('myform').addEventListener("submit",(e)=>{
         e.preventDefault();
        alert("I've been submitted.");
      })
      document.getElementById("navbar").addEventListener("click",()=>{
         alert("Register Here!");
      })

     })



