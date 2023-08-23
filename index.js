const bookRow = document.getElementById("bookRow");

// Effettua la chiamata GET all'endpoint dei libri
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((data) => {
    // cicla attraverso i dati dei libri e crea le carte
    data.forEach((book) => {
      const card = createBookCard(book);
      bookRow.appendChild(card);
    });
  })
  .catch((error) => console.error("Errore nella chiamata GET:", error));

// Funzione per creare una carta libro
function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("col-md-3", "mb-4");

  card.innerHTML = `
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: ${book.price}$</p>
            <button class="btn btn-danger" onclick="discardCard(this)">Scarta</button>
          </div>
        </div>
      `;

  return card;
}

// Bottone per scartare
function discardCard(button) {
  const card = button.closest(".card");
  card.remove();
}
