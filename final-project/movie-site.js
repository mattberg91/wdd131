

const form = document.querySelector("#movieForm");
const output = document.querySelector("#output");

const movieCard = document.querySelector("#movieCard");
const input = document.querySelector('#search');
const searchForm = document.querySelector('.search-bar');

let movieList = [
    {
        name: "Frozen",
        description: "A movie about a cursed princess who controls ice and goes on an adventure with her sister.",
        rating: "PG",
    },
    {
        name: "Tangled",
        description: "A movie about a princess with magic hair that heals people who goes on an adventure to find out who she is.",
        rating: "PG",
    },
    {
        name: "My Hero Academia: Two Heroes",
        description: "A movie about a young heroS and his mentor visiting an island made out of technology and their ensuing adventure.",
        rating: "PG-13",
    },
]


form.addEventListener("submit", function (event) {
    event.preventDefault();

    output.textContent = "";

    const movieName = form.movieName.value.trim();
    const movieDescription = form.movieDescription.value.trim();
    const movieRating = form.ratingMovie.value;
    const movieDate = form.dateMovieEntered.value;

    const newMovie = {
        name: movieName,
        description: movieDescription,
        rating: movieRating,
        date: movieDate,
    };

    movieList.push(newMovie);

    saveMovies();
    
    console.log(movieList);
    output.innerHTML = `
        <h2>Movie Submitted</h2>
        <p>Movie Name: ${movieName}</p>
        <p>Movie Description: ${movieDescription}</p>
        <p>Movie Rating: ${movieRating}</p>
        `;

        movieList.sort(compareMovies);

        init();

        form.reset();
});

searchForm.addEventListener("submit", search)

function search(event) {
        event.preventDefault();

        let searchterm = document.querySelector('#search').value;

        let filteredMovies = movieList.filter(function(movie){
            return (
                movie.name.toLowerCase().includes(searchterm.toLowerCase()) ||
                movie.description.toLowerCase().includes(searchterm.toLowerCase()) ||
                movie.rating.toLowerCase().includes(searchterm.toLowerCase())
            );
        });
        console.log(filteredMovies);

        let sortedMovies = filteredMovies.sort(compareMovies)


        renderMovies(sortedMovies);
    }

    function compareMovies(a, b) {
        if (a.name < b.name) {
            return -1;
        }else if (a.name > b.name) {
            return 1;
        }
        return 0;
}

    function movieTemplate(movies) {
        return `
            <article class="movie-card">
                <h3>${movie.name}</h3>
                <p>${movie.description}</p>
                <p><strong>Rating:</strong> ${movie.rating}</p>
                ${
                    movie.date
                    ? `<p><strong>Date added:</strong> ${movie.date}</p>`
                    : ""
                }
            </article>
            `;
}

function saveMovies() {
    localStorage.setItem("movieList", JSON.stringify(movieList));
}

function loadMovies() {
    let storedMovies = localStorage.getItem("movieList");

    if (storedMovies !== null) {
        movieList = JSON.parse(storedMovies);
    }
}



function renderMovies(movies) {
    movieCard.innerHTML = "";
    movies.forEach(function(movie) {
        movieCard.innerHTML += movieTemplate(movie);
    });
}



function getRandomMovie() {
    let randomNum = Math.floor(Math.random() * movieList.length);
    return movieList[randomNum];
}

function init() {
    loadMovies();
        let randomMovie = getRandomMovie();
        renderMovies([randomMovie]);
}


init();

























