// Ambil ID artikel dari URL
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");

// Ambil data dari file JSON dan ditampilkan artikel berdasarkan ID
fetch("articles.json")
  .then((response) => response.json())
  .then((articles) => {
    const article = articles.find((art) => art.id == articleId);
    const articleContainer = document.getElementById("article-content");

    if (article) {
      // Tampilkan detail artikel di halaman
      articleContainer.innerHTML = `
                <h1>${article.title}</h1>
                <img src="${article.image}" alt="${article.title}">
                <div class="article-info">
                    <p>Ditulis oleh: ${article.author} | ${new Date(
        article.date
      ).toLocaleDateString()}</p>
                </div>
                <p>${article.content}</p>
            `;
    } else {
      // Jika artikel tidak ditemukan
      articleContainer.innerHTML = "<p>Artikel tidak ditemukan.</p>";
    }
  })
  .catch((error) => console.error("Error loading article:", error));
