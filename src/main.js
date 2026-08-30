//Declared variables
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const cross = document.getElementById("cross");
const cross2 = document.getElementById("cross2");

//Import music
import musicSrc from "./sounds/menu.mp3";
import clicksound from "./sounds/pup.mp3"
import click1 from "./sounds/click1.mp3";
import click2 from "./sounds/click2.mp3";
import click3 from "./sounds/click3.mp3";
import click4 from "./sounds/click4.mp3";
import click5 from "./sounds/click5.mp3";
import click6 from "./sounds/click6.mp3";

//array of the keyboard sounds
const keySounds = [
    new Audio(click1),
    new Audio(click2),
    new Audio(click3),
    new Audio(click4),
    new Audio(click5),
    new Audio(click6)
];

let time;
let author;
let title;
let numOpciones = 0;
let opciones;

const music = new Audio(musicSrc); 
const click = new Audio(clicksound);


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
    
    author = data.copyright;
    //What happens if no author is given
    if (author == null)
    {
      author = "No authors given";
    } else
    {
      author = data.copyright;
     }
      
    title = data.title;

    

}).catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
});



// Shows all the info
function showElements()
{
    opciones = [`<p id="time"></p>
            <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
            <input name="sitesearch" type="hidden" value="" placeholder="">
            <input autocomplete="on" class="form-control search" name="q" placeholder="Search for Something!" required=""  type="text" style="border-radius: 15px; border: 1px solid black;"></form>
            <p>Try clicking the D-pad!</p>
            <img src="https://static.thenounproject.com/png/1939979-200.png" alt="" style="height: 20px; width: 20px;" id ="sound">`,
            `<h2>Author: </h2> <p>${author}</p>
             <h2>Title: </h2> <p>${title}</p>`,
  ] 
  
  
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
  
  click.play()
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

// added for the phone users
cross.addEventListener("touchend", funcOpcion);
cross2.addEventListener("touchend", funcOpcion);


//Adds event to the sound image
const sound = document.getElementById("sound");
let soundcheck = false;

sound.addEventListener("touchend", function (event)
{
  if(soundcheck == false){
    console.log(event);
    click.play()
    music.loop = true;
    music.volume = 0.2;
    music.play();
    soundcheck = true;
  } else
  {
    click.play()
    music.pause();
    soundcheck = false;
   }

 })

sound.addEventListener("click", function (event)
{
  if(soundcheck == false){
    console.log(event);
    click.play()
    music.loop = true;
    music.volume = 0.2;
    music.play();
    soundcheck = true;
  } else
  {
    click.play()
    music.pause();
    soundcheck = false;
   }

 })
//plays the sound of the keyboard
document.addEventListener("keydown", function(event) {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);
  let keynumber
  keynumber = Math.round(Math.random() * (6 - 1) + 1);
  console.log(Math.round(keynumber));
  keySounds[keynumber - 1].volume = 1;
  keySounds[keynumber - 1].play();
  
});