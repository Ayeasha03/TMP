console.log("connected")
 
 document.addEventListener('DOMContentLoaded', function() {
    const enterHomeBtn = document.getElementById('enterHomeBtn');

    
    if (enterHomeBtn) {
        enterHomeBtn.addEventListener('click', function () {
            window.location.href = 'home.html'; 
        });
    } else {
        console.log("Enter button not found");
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    const recommendedMovies = [
        {
            title: "New ActionMovie",
            posterPath: "https://www.youtube.com/embed/_JUcTBF1bRU?si=2vZuv3GAWS5x3ns0",
            overview: "The woman that searched his brief.....", 
            releaseDate: "10 Oct 2024"

        },
        {
            title: "The Assasinators",
            posterPath: "https://www.youtube.com/embed/aZcBWKOVFwg?si=JNjX-DkEA5NsFuap",
            overview: "An elite hitman teaches his trade.....",
            releaseDate: "6 Sept 2024"
        },
        {
            title: "Day Off",
            posterPath: "https://www.youtube.com/embed/IKYvVeWt_n4?si=Yag3f3w7Yg8OqFOx",
             overview: "After his brother's brtal murder.....",
            releaseDate: "5 Oct 2024"
        },
        {
            title: "Sisters Fight For Survival on Dangerous Island",
            posterPath: "https://www.youtube.com/embed/jwErAY9QjMA?si=vvVs3sYeziTPaFoj",
             overview: "Emma and Sofia, two sisters who have .....",
            releaseDate: "13 Jun 2024"
        },
        {
            title: "House of Dead",
            posterPath: "https://www.youtube.com/embed/rGsXo6cjKyE?si=VkO5bnWhAjZSBLrA",
             overview: "The horror anthology of house.....",
            releaseDate: "4 Jul 2024"
        },
        {
            title: "Invasion of Mermaids",
            posterPath: "https://www.youtube.com/embed/TFTJK455wh8?si=aJtuzwK3DP8m9Z3W",
             overview: "On Chen Shui's wedding night, his.....",
            releaseDate: "22 Aug 2024"
        },
        {
            title: "Detective",
            posterPath: "https://www.youtube.com/embed/BTDxEbJldP8?si=wNbaZbOcGAItATsJ",
             overview: "New Jason Statham Superhit Action.....",
            releaseDate: "31 Aug 2024"
        },
    ];

    const latestTrailers = [
        {
            title: "Baby Girl",
            posterPath: "https://www.youtube.com/embed/-8Sx6U6Ou0Q?si=mNE6sWEIcCu2hqSg",
             overview: "This Christmas....",
            releaseDate: "1 Oct 2024"

        },
        {
            title: "Sonic The Hedghog 3",
            posterPath: "https://www.youtube.com/embed/qSu6i2iFMO0?si=WVuCcSl4xxwuqd1K",
             overview: "Two hedghogs.One awesome.....",
            releaseDate: "27 Aug 2024"
        },
        {
            title: "Singham Again",
            posterPath: "https://www.youtube.com/embed/MD7v0-igVIM?si=8DkkWBsRFoyqEIgd",
             overview: "See you in theatre on 1st Nov.....",
            releaseDate: "7 Oct 2024"
        },
        {
            title: "Thunderbolts",
            posterPath: "https://www.youtube.com/embed/v-94Snw-H4o?si=y20sCvL8rXme4358",
             overview: "Mysterious character have been revealed.....",
            releaseDate: "18 Aug 2024"
        },
        {
            title: "The Legend of Hanuman",
            posterPath: "https://www.youtube.com/embed/6cDok313kuE?si=PqSyGABUUDGnaIxF",
            overview: "All episodes will be out soon.....",
            releaseDate: "11 Oct 2024"
        },
        {
            title: "Gladiator",
            posterPath: "https://www.youtube.com/embed/Ts0N8swyWFI?si=8XsT8avPAjvBIwxt",
            overview: "On theatres November 22.....",
            releaseDate: "23 Sep 2024"
        },
    ];

    const WhatsPopular = [
        {
            title: "Brilliant Comedy",
            posterPath: "https://www.youtube.com/embed/-Z4DcdXEvZ4?si=RiFpcEKmgmFL-_Jd",
            overview: "It's a story about young man who faces.....",
            releaseDate: "9 Apr 2024"

        },
        {
            title: "The Mermaid",
            posterPath: "https://www.youtube.com/embed/DefLj6jTrmU?si=g14qrHwFvieJfKDl",
            overview: "The fleet is attacked by the.....",
            releaseDate: "1 Apr 2024"
        },
        {
            title: "Gaurdian",
           posterPath: "https://www.youtube.com/embed/k7tLllmRVu4?si=JndNmMOY1N1Y6nAJ",
            overview: "plaugued by a lifetime of.....",
            releaseDate: "22 Jul 2024"
        },
        {
            title: "John 5 Wick",
           posterPath: "https://www.youtube.com/embed/fSdi2UdMra4?si=zIXQ0UB4G94LCBwj",
           overview: "Play a challenging game.....",
            releaseDate: "15 Apr 2024"
        },
        {
            title: "Sender",
            posterPath: "https://www.youtube.com/embed/PkzT5jIF3ks?si=Ec4iCPTD4R7MagbY",
            overview: "It reveals a mysterious world.....",
            releaseDate: "14 May 2024"
        },
        {
            title: "The Seeds",
            posterPath: "https://www.youtube.com/embed/-KP8vE35DkU?si=coGZum_5dQa2XwWH",
            overview: "Tobias' Quest for 'the one' takes.....",
            releaseDate: "18 Aug 2024"
        },
        {
            title: "A Journey at the Edge Of death",
            posterPath: src="https://www.youtube.com/embed/_3SoSh9a-t4?si=n1rXc8itsCjH5Csy",
            overview: "Solar debris crashes down to Earth, causing catastrophic destruction.....",
            releaseDate: "7 Sep 2024"
        },
        
        
    ];

     const cartoon = [
        {
            title: "Masha and The Bear",
            posterPath: "https://www.youtube.com/embed/gEbbHlMXE9Y?si=HtcdRU2Vr6YuiEMx" ,
            overview: "They are heroes of Russian folkore.....",
            releaseDate: "8 Dec 2023"

        },
        {
            title: "Despicable Me 4",
            posterPath: "https://www.youtube.com/embed/H4RE6JlR7Eo?si=pjz6Axtn_2JQiCIc" ,
            overview: "Enjoy your cartoon.....",
            releaseDate: "15 Sept 2024"
        },
        {
            title: "Moana",
            posterPath: "https://www.youtube.com/embed/nZsz9_2kAyI?si=HJrn_ck0E1OI4Cpz",
            overview: "It's a disney cartoon keep streaming.....",
            releaseDate: "5 Sep 2024"
        },
        {
            title: "Tom and Jerry",
            posterPath: "https://www.youtube.com/embed/3HxXuYSK-K4?si=wD4qxqIN3LaZucUm",
            overview: "Get in the halloween spirit.....",
            releaseDate: "12 Oct 2024"
        },
        {
            title: "Bad Cat",
            posterPath: "https://www.youtube.com/embed/c6hQhfurQjg?si=RcqWSFQy9YUxbiud",
            overview: "Shero and his friends make the.....",
            releaseDate: "30 May 2023"
        },
        {
            title: "PeaPea",
            posterPath: "https://www.youtube.com/embed/0LmM1R2E6Ps?si=_E9v5ePhZYkzlj77",
            overview: "Peapea challenge eating rainbow jelly.....",
            releaseDate: "13 Oct 2024"
        },
    ];


    document.addEventListener('DOMContentLoaded', function () {
        const hamburgerMenu = document.getElementById("hamburgerMenu");
        const navMenu = document.getElementById('navMenu');
    
            hamburgerMenu.addEventListener('click', () => {
                navMenu.classList.toggle("show");
            });
    });
    

    
    function createMovieCards(movies, containerSelector) {
        
        const container = document.querySelector(containerSelector);
    
        
        if (!container) {
            console.error(`Container not found for selector: "${containerSelector}"`);
            return; 
        }
    
        
        movies.forEach((item) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie_card-wrapper"); 
    
            movieCard.innerHTML = `
                <div class="movie_card-card">
                    <iframe
                        src="${item.posterPath}"
                        width="150"
                        height="215"
                        title="${item.title}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                    <div class="movie-card">
                        <h4 class="movie-title">${item.title}</h4>
                        <p class="overview">${item.overview}</p>
                        <p class="date"><strong>Date:</strong> ${item.releaseDate}</p>
                    </div>
                </div>
            `;
    
           
            container.appendChild(movieCard);
        });
    
        console.log(`Successfully added ${movies.length} movie cards to "${containerSelector}"`);
    }

createMovieCards(recommendedMovies, '.down');
createMovieCards(latestTrailers, '.trailer-container');
createMovieCards(WhatsPopular, '.popular-cont');
createMovieCards(cartoon, '.more_container');


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase();
    const cardClasses = [
        '.movie_card-card',
        '.movie-container-card',
        '.popular-card-card',
        '.more_card-card'
    ];

    
    cardClasses.forEach((cardClass) => {
        const cards = document.querySelectorAll(cardClass);
        cards.forEach((card) => {
            const title = card.querySelector('.movie-title').textContent.toLowerCase();
            const overview = card.querySelector('.overview').textContent.toLowerCase();
            if (title.includes(query) || overview.includes(query)) {
                card.style.display = ''; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});



 
 if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
        window.location.href = 'index.html'; 
    });
} else {
    console.log("Logout button not found");
}
});
