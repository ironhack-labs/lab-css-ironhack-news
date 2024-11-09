document.getElementById("burger-menu").addEventListener("click", () => {
    console.log("click");
   let elements = document.getElementsByClassName("navbar");
   let elementss = [...elements];

   elementss.forEach(element => {
       if(element.style.display === "block"){
           element.style.display = "none";
       }else{
           element.style.display = "block";
       }
   });
})
