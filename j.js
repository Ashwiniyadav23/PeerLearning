// const div = document.querySelector("div");
//  div.setAttribute('id',"container");
//  const button = document.getElementById("btn");
//  console.log(button)
//  button.addEventListener('click',() =>{
//     document.body.classList.toggle("Dark");
   
//  })



fetch("https://api.sheetbest.com/sheets/66931299-448d-4d0c-b535-7eeac70e1c3d")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("error",error));