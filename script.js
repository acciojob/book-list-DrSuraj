//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('book-list');

    bookForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addBook();
    });

    function addBook() {
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const isbnInput = document.getElementById('isbn');

        const title = titleInput.value;
        const author = authorInput.value;
        const isbn = isbnInput.value;

        if (title && author && isbn) {
            // Create a new table row
            const newRow = document.createElement('tr');

            // Add data to the row
            newRow.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td class="delete" onclick="deleteBook(this)">Clear</td>
            `;

            // Add the row to the book list
            bookList.appendChild(newRow);

            // Clear input fields
            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
        }
    }

    // Function to delete a book row
    window.deleteBook = function (button) {
        const row = button.parentNode;
        bookList.removeChild(row);
    };
});
