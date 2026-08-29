const API_KEY = import.meta.env.VITE_NASA_API_KEY;

document.querySelector("#app").innerHTML = "<p>Hola papu<p>"
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(response => response.json())
  .then(data => {
    console.log(data);
    let media

    if (data.media_type === "image")
    {
      media = `<img src ="${data.url}" style="width: 300px; height: 200px;""/>`
    }
    else
    {
      media = `<video src="${data.url}" controls></video>`
    }
    

}).catch(err => {
    document.querySelector("#app").innerHTML = `<p>Error: ${err.message}</p>`;
});