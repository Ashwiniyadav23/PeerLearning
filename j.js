// const div = document.querySelector("div");
//  div.setAttribute('id',"container");
//  const button = document.getElementById("btn");
//  console.log(button)
//  button.addEventListener('click',() =>{
//     document.body.classList.toggle("Dark");
   
//  })



//GET
// fetch("https://api.sheetbest.com/sheets/66931299-448d-4d0c-b535-7eeac70e1c3d")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("error",error));

//POST

// fetch('https://api.sheetbest.com/sheets/66931299-448d-4d0c-b535-7eeac70e1c3d', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       Name: "Ashwinui",
//       Email: "ashwiniyadav23@navgurukul.org",
//       Age: 18,
//       Class: 12
//     })
//   })
//     .then(response => {
//       if (!response.ok) {
//         console.error('Error:', response.statusText);
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Fetch Error:', error));
  

//PUT


// fetch('https://api.sheetbest.com/sheets/66931299-448d-4d0c-b535-7eeac70e1c3d/tabs/Sheet1/0', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         Name: "Prerna", 
//         Email: "prernasai@nqvgrukul.org",
//         Age: "18" 
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Error:', error));

//DELETE

// fetch('https://api.sheetbest.com/sheets/66931299-448d-4d0c-b535-7eeac70e1c3d/tabs/Sheet1/0',{
//     method: 'DELETE',
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("error",error));