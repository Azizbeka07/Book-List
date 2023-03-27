 window.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const year = document.querySelector("#year");
    const button = document.querySelector(".btn");
    const booklist = document.querySelector("#book-list");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (title.value == "" && author.value == "" && year.value == "" ) {
            alert("please complete all inputs!")
        } else {
            const newRow = document.createElement("tr");
            // CREATE NEW TITLE
            const newTitle = document.createElement("td");
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);

            // CREATE NEW AUTHOR
            const newAuthor = document.createElement("td");
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);

            // CREATE NEW DATE
            const newDate = document.createElement("td");
            newDate.innerHTML = year.value;
            newRow.appendChild(newDate);

            booklist.appendChild(newRow);

            FormData.reset();
        }
    })
 })