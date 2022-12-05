//fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  //.then(response => response.json())
  //.then(data => console.log(data));


//api --> https://uselessfacts.jsph.pl/random.json?language=en

/*REFACTORING
1. Dejar el código más legible
2. Menos cantidad de líneas de código
3. Una función una responsabilidad
4. No mezclemos capas de abstracción
*/


const myParagraph = document.querySelector('p');
const button = document.querySelector('button');

// async/await
//Función qu etrae datos de la Api
const getApiData = async () =>{

  const result = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await result.json();
    return data.text;
  }

  //Función que pinta los datos en el párrafo
  const printData = (text) =>{
    myParagraph.innerText = text
  }
 
//Función que se ejecuta con el click del botón
const buttonClick = async () => {
    const text = await getApiData();
    printData(text);
}

button.addEventListener("click", buttonClick);





