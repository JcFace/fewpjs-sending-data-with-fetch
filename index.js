// Add your code here
function submitData(name, email) { 
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };
    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      appendToDom(object.id);
    })
    .catch(function(error) {
      errorAppend(error);
      console.log(error.message);
    });
}

function appendToDom(id) {
  let body = document.querySelector('body')
  body.innerHTML = id
}

function errorAppend(error) {
  let body = document.querySelector('body')
  body.innerHTML = error.message
}

submitData('Jessse', '1234@gmail.com')




//     fetch('http://localhost:3000/users', configObj)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(object) {
//         console.log(object);
//       })
//       .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });
// };




// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name: name,
//         email: email
//       })
// };

    
   
  
//   fetch("http://localhost:3000/users", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });
