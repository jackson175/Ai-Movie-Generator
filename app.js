document.getElementById('movieForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const genre = document.getElementById('genre').value;
  const theme = document.getElementById('theme').value;

  const response = await fetch('http://127.0.0.1:5000/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ genre, theme })
  });

  const data = await response.json();

  // Populate the result section
  document.getElementById('movieTitle').textContent = data.title;
  document.getElementById('moviePlot').textContent = data.plot;

  const poster = document.getElementById('moviePoster');
  poster.src = data.poster_url;
  poster.style.display = 'block';
});