const apiKey = 'e826c9fc5c929e0d6c6d423841a282aa';

let searchIcon = document.getElementById('searchIcon');
let search = document.getElementById('search');
let plusGifos = document.getElementById('plusGifos');

const d = document,
 $sectionGifos = d.getElementById('sectionGifos'),
 $templateGifos = d.getElementById('templateGifos'),
 $searchGifos = d.getElementById('searchGifos'),
 $fragment = d.createDocumentFragment();

 var offset = 0;
 var limit = 12;

 searchIcon.addEventListener('click', () =>{
     let gifo = input.value;
     returnGifos(gifo);
     $searchGifos.innerHTML = `<h2 id='gifo-name'>${gifo}</h2>`;
     $searchGifos.setAttribute("class", "textTittle");
     closeSearchBtn.style.display = "block";

     if (localStorage.getItem("themeMode") == "dark") {
         closeSearchBtn.src = "./assets/close-modo-noct.svg";
     }
 });

 async function returnGifos(gifo){
     try {
         $sectionGifos.innerHTML = `<img class='loader' src='./assets/loader.svg' alt='Cargando un momento...'>`;

         let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${gifo}&limit=${limit}&offset=${offset}`;
         let answer = await fetch(url);
         let json = await answer.json();
         console.log(json);
         
         if (!answer.ok) throw{
             status: answer.status,
             statusText: answer.statusText
         };

         if (json.data.length === 0) {
             $sectionGifos.innerHTML = `<h2> No tenemos resultados para : ${gifo} </h2>`;
         } else {
             json.data.forEach(element => {
                 $sectionGifos.setAttribute('class', 'grind-fluid');
                 $templateGifos.getElementById('searchGifos').src = element.images.original.url ? element.images.original.url : '>( no Gifos';
                 $templateGifos.getElementById('searchGifos').alt = element.name;

                 let $clone = d.importNode($templateGifos, true);
                 $fragment.appendChild($clone);
             });
             $sectionGifos.innerHTML = '';
             $sectionGifos.appendChild($fragment);
             plusGifos.style.display = 'block';
         }


     } catch (error) {
         let message = error.statusText || "Ocurrio un error";
         $sectionGifos.innerHTML = `<p> Error ${error.status}: ${message}</p>`
     }
 }

 plusGifos.addEventListener('click', () => {
     limit = limit + 12;
     returnGifos(input.value);
 });

 closeSearchBtn.addEventListener('click', () => {
     $sectionGifos.style.display = 'none';
     $searchGifos.innerHTML = '';
     input.value = '';
     plusGifos.style.display = 'none';

     closeSearchBtn.style.display = 'none';
     searchIcon.style.display = 'block';
     if (localStorage.getItem("themeMode") == "dark") {
         searchIcon.src = "./assets/icon-search.svg"
     } else {
         searchIcon.src = "./assets/icon-search-mod-noc.svg"
     }
 });
