document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById('myform').addEventListener("submit",(e)=>{
         e.preventDefault();
        alert("I've been submitted.");
     })
   });
 