// Impostiamo le variabili per l'immagine e il bottone
const image = document.getElementById('image');
const newImageBtn = document.getElementById('new-image-btn');

// Impostiamo una funzione per generare un numero casuale tra 1 e 10 (modificare il range a seconda del numero di immagini nella cartella)
function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1; 
}

// Impostiamo una funzione per impostare la nuova immagine, utilizzando il numero casuale come nome del file
function setBackgroundImage() {
  const randomNumber = getRandomNumber();
  const imageUrl = `./images/image${randomNumber}.jpeg`;
  image.setAttribute('src', imageUrl);
}

// Al caricamento della pagina, mostreremo la prima immagine casuale
setBackgroundImage();

// Aggiungiamo un ascoltatore al click del bottone, in modo da aggiornare l'immagine visualizzata
newImageBtn.addEventListener('click', setBackgroundImage);