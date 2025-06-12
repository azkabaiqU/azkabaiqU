document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loading");

   

  
    
    setTimeout(function () {
      
      document.getElementById("Spash-Screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
  
      
      document.body.classList.remove("loading");
    }, 5000); 
  });