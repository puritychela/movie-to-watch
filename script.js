document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#movie-list ul");
  const forms = document.forms;

  //delete movies
  list.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  //add movie
  const addMovieForm = forms["add-movie"];
  addMovieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = addMovieForm.querySelector('input[type="text"]').value;

    if (!userInput) {
      alert("Please enter a movie name!");
      return;
    }

    // create element
    const li = document.createElement("li");
    const movieName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //adding content
    movieName.textContent = userInput;
    deleteBtn.textContent = "Delete";

    //adding classes
    movieName.classList.add("name");
    deleteBtn.classList.add("delete");

    //append to DOM
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    //reset form
    addMovieForm.reset();
  });
});
