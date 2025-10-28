(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
  answer.innerHTML = "Ładowanie danych...";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(array => {
      answer.innerHTML = "";
      const ul = document.createElement("ul");
      array.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `Id = ${post.id} <br> Title = ${post.title} <br> Body = ${post.body}`;
        ul.appendChild(li);
      });
      answer.appendChild(ul);
    })
    .catch(error => {
      console.error("Błąd podczas pobierania danych:", error);
    });
});

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();