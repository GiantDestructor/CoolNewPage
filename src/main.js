//Declared variables
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const cross = document.getElementById("cross")
const cross2 = document.getElementById("cross2")
let time 

//API Call to NASA to get info
document.querySelector("#app").innerHTML = ""
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(response => response.json())
  .then(data => {
    console.log(data);
    let media

    if (data.media_type === "image")
    {
      media = `<img src ="${data.url}" style="width: 200px; height: 200px;"/>`
    }
    else
    {
      media = `<video src="${data.url}" controls></video>`
    }

    document.querySelector("#screen1").innerHTML = `<a href="https://apod.nasa.gov/apod/astropix.html">${media}</a>`
    

}).catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
});



// Shows all the info
function showElements()
{
   let opciones = [`<p id="time"></p>
            <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
            <input name="sitesearch" type="hidden" value="" placeholder="">
            <input autocomplete="on" class="form-control search" name="q" placeholder="Search for Something!" required=""  type="text" style="border-radius: 15px; border: 1px solid black;"></form>`,
  ] 
let numOpciones = 0

  //prints the info in the screen
  document.querySelector("#screen2").innerHTML = opciones[numOpciones];
  getTime();
}

//gets time and updates it on the screen
function getTime()
{
  let today = new Date();
  let hr = today.getHours();
  let mn = today.getMinutes();

  hr = String(hr).padStart(2, "0");
  mn = String(mn).padStart(2, "0");
  time = `${hr}:${mn}`;
  document.getElementById("time").textContent = time
 
}
 
showElements();
setInterval(getTime, 1000);

//Manages the options
function funcOpcion()
{
  console.log(numOpciones)
  numOpciones++;
  if (numOpciones > opciones.length -1)
  {
    numOpciones = 0;
  }
  showElements();
}

// what happens when you press D-pad
cross.addEventListener("click", funcOpcion);
cross2.addEventListener("click", funcOpcion);