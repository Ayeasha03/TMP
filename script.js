"use strict";
document.addEventListener("DOMContentLoaded", () => {
    //watch now button
    const watchNowBtn = document.getElementById('watchNow');
    watchNowBtn?.addEventListener("click", () => {
        window.location.href = "home.html";
    });
    //typewriter effect
    const title = document.getElementById('typewriter');
    const text = "Welcome to TMP movie world";
    function typeText(el, content, speed = 80) {
        let i = 0;
        el.textContent = "";
        function step() {
            if (i < content.length) {
                el.textContent += content.charAt(i++);
                setTimeout(step, speed);
            }
        }
        step();
    }
    if (title)
        typeText(title, text, 160);
    //exist button
    const exitBtn = document.getElementById('exitBtn');
    exitBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
    const homeBtn = document.getElementById('homeBtn');
    homeBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
    //hamburger menu
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overLay');
    overlay?.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
    hamburgerMenu?.addEventListener("click", () => {
        navMenu.classList.add('active');
        overlay?.classList.add('active');
    });
    //search input
    const searchInput = document.getElementById('searchInput');
    ;
    const searchResults = document.getElementById('searchResults');
    searchInput?.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (!query) {
            if (searchResults) {
                searchResults.innerHTML = ''; // Clear results if input is empty
            }
            return;
        }
        const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        fetch(searchURL)
            .then(res => res.json())
            .then(data => {
            if (!data.results || data.results.length === 0) {
                searchResults.innerHTML = `<p>No results found for "${query}".</p>`;
                return;
            }
            // Render as list
            searchResults.innerHTML = data.results.map((movie) => `
        <div class="search-card">
          <img class="poster" src="${baseImageUrl + movie.poster_path}" alt="${movie.title || movie.name}">
          <div class="info">
            <h1 class="title">${movie.title || movie.name}</h1>
            <p class="release-date"><strong>Release Date:</strong> ${movie.release_date || 'N/A'}</p>
            <p class="overview">${movie.overview || 'No overview available.'}</p>
          </div>
        </div>
      `).join('');
        })
            .catch(err => console.error(err));
    });
    //calling TMDb api
    const API_KEY = "e0c2307ec0d61f1fd007fd3a40398876";
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    function fetchAndRenderMovies(url, containerId, cardClass) {
        const container = document.getElementById(containerId);
        if (!container)
            return;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
            console.log(data);
            container.innerHTML = data.results
                .map((movie) => ` 
           <div class="${cardClass}">
           <a href="movieDetails.html?id=${movie.id}">
        <img 
          src="${baseImageUrl + movie.poster_path}" 
          alt="${movie.title || movie.name}" 
          style=""
        >
          </a>
        <h4>${movie.title || movie.name}</h4>
        <p class="overview">${movie.overview}</p>
        
      </div>

      
            `).join('');
        })
            .catch(err => console.log(err));
    }
    const recommendedURL = `https://api.themoviedb.org/3/movie/500/recommendations?api_key=${API_KEY}`;
    fetchAndRenderMovies(recommendedURL, 'recommended-container', 'movie_card-card');
    const trailersURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
    fetchAndRenderMovies(trailersURL, 'trailers-container', 'movie-container-card');
    const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    fetchAndRenderMovies(popularURL, 'popular-container', 'popular-card-card');
    // cartoons/animation
    const cartoonsURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`;
    fetchAndRenderMovies(cartoonsURL, 'cartoon-container', 'more_card-card');
    // 1. Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    if (!movieId) {
        console.error("No movie ID found in the url");
    }
    else {
        // 2. Fetch the movie details
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(movie => {
            // 3. Display the movie details inside the container
            const container = document.querySelector('.movie-details');
            if (!container)
                return;
            const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            container.innerHTML = `
      <div class="details-background" style="background-image: url('${posterUrl}')"></div>
        <div class="details-content">
          <img class="poster" src="${posterUrl}" alt="${movie.title}">
          <div class="info">
            <h1 class="title">${movie.title}</h1><br/>
            <p class="release-date"><strong>Release Date:</strong> ${movie.release_date}</p><br/>
            <p class="overview"><p><strong>OVERVIEW</strong></p><br/> ${movie.overview}</p>
          </div>
        </div>
    `;
        });
    }
    const backBtn = document.getElementById('backButton');
    backBtn?.addEventListener("click", () => {
        window.location.href = "home.html";
    });
});
