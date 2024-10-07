function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
  books.forEach(books => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    h2.innerHTML = books.name;
    main.appendChild(h2);
  });
}
  )}