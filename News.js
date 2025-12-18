const apiKey = 'a9d1b120668643f2b67b430c110a79a5'; 
const newsContainer = document.getElementById('news-container');

fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');
        newsArticle.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="News Image">
          <h3>${article.title}</h3>
          <p>${article.description || 'No description available.'}</p>
          <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(newsArticle);
      });
    } else {
      newsContainer.innerHTML = '<p>No articles found.</p>';
    }
  })
  .catch(error => {
    console.error('Error fetching news:', error);
    newsContainer.innerHTML = '<p>Failed to fetch news articles. Please try again later.</p>';
  });

