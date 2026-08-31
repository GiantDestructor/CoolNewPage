## Cool New Page!
Is a cool new page that I would love to see each time I enter a browser, it´s inspired on a handheld design that I love
<img width="1844" height="832" alt="image" src="https://github.com/user-attachments/assets/9c45bccd-0af1-4487-aca1-6b5092b87d23" />


Give it a try! (https://giantdestructor.github.io/DSi-New-Page/)

## ¿Whats Cool about this?
- You have a searchbar to look for anything you want on the web
- You can watch a photo of the universe everyday and get to know the author name!
- You have a nostalgic view and sound of a good old dsi
- When you write, you hear pictochat keyboard sounds
- Live clock!

## How to run on your PC?
Firts of all make sure that you have *NodeJs* and *npm*

Clone the repository:

```bash
git clone https://github.com/GiantDestructor/CoolNewPage.git
```
Enter the project directory:
```
cd CoolNewPage
```
Install the dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
and then feel free to add whatever you want!

## Resources Used
1. Add Google Searchar (https://stackoverflow.com/questions/13822927/how-can-i-add-a-google-search-box-to-my-website)
2. Color picker (https://htmlcolorcodes.com/image-color-picker/)
3. How I made the D pad (https://bennettfeely.com/clippy/)
4. How I added clock (https://www.youtube.com/watch?v=U0eS_ckLS4w)
5. [Where I got the Font] (https://www.dafont.com/nintendo-ds-bios.font)
6. Add touch event (https://stackoverflow.com/questions/26961140/on-click-event-for-mobile)
7. Add TTF font (https://stackoverflow.com/questions/64508137/how-to-use-ttf-as-font-family-in-html)
8. How to loop the audio (https://www.w3schools.com/jsref/prop_audio_loop.asp)

## AI Use
```
import musicSrc from "./sounds/menu.mp3";
```
Learning this was with AI because I tried using:
```
let music = new Audio("./menu.mp3");
music.play();
```
and got error message *Uncaught (in promise) NotSupportedError: Failed to load because no supported source was found.*
