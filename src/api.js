//fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  //.then(response => response.json())
  //.then(data => console.log(data));


//api --> https://uselessfacts.jsph.pl/random.json?language=en

document.querySelector("button").addEventListener("click", ()=> {

let myParagraph = document.querySelector("p")

fetch('https://uselessfacts.jsph.pl/random.json?language=en')
   .then(result => result.json())
   .then(data => {
       myParagraph.textContent = data.text
   })
   .catch(error => console.log(error))

  })

