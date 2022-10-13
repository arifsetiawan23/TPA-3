const API_URL =  'https://api.themoviedb.org/3/movie/popular?api_key=7144e46790bc896a9a1c877126c190a9&language=en-US&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=0f384af42e76e72036056fa90c1b9d00&query=';

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const content = document.querySelector('.content')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}


function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, genres, release_date} = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <div class="p-2">
          <div class="flex-col card m-auto" style="width: 242px;">
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${title}</h4>
              <p class="card-text">Realese : ${release_date}</p>
              <h5 class="card-text">Rating : ${vote_average}</h5>
            </div>
          </div>
        </div> 
        `
        main.appendChild(movieEl)
    })
}

let getDataSearch = async (URL) => {
  let response = await fetch(URL);
  let movies = await response.json();
  let html = "";

  movies.results.forEach((item, index) => {
    let IMG = "https://image.tmdb.org/t/p/w500";
    let htmlSegment = 
    `<div class="p-2">
    <div class="flex-col card m-auto" style="width: 20rem;">
        <img src="${IMG + item.poster_path}" alt="" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <h5 class="card-text">Realese : ${item.release_date}</h5>
            <h5 class="card-text">Rating : ${item.vote_average}</h5>
        </div>
    </div>
    </div>`;

    html += htmlSegment;
  });

  content.innerHTML = html;
};

showMovies(API_URL);

form.addEventListener("submit", (e) => {
  let SEARCH_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d41688cb0f0ee69b62145a634b120198&query=";
  let searchValue = inputSearch.value;
  e.preventDefault();
 // desc.innerText = "You searched for " + '"' + searchValue + '"';
  getDataSearch(SEARCH_URL + searchValue + "&page=1");
});