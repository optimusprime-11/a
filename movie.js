function searchMovie() {
    const title = document.getElementById('movie-title').value;
    const movieDetails = document.getElementById('movie-details');
    const errorDiv = document.getElementById('error');
    movieDetails.innerHTML = '';
    errorDiv.innerHTML = '';
    if (!title) {
      errorDiv.textContent = 'Please enter a movie title.';
      return;
    }

    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=3a7909a3`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          movieDetails.innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <img  align-item=center src="${data.Poster}" alt="${data.Title}" style="max-width:100%; border-radius: 10px;" />
          `;
        } else {
          errorDiv.textContent = 'Movie not found. Please try another title.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        errorDiv.textContent = 'An error occurred while fetching movie details.';
      });
  }
