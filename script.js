let movie1 = {
    name: "Harry Potter",
    img: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg"
};
let movie2 = {
    name: "The Hunger Games",
    img: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg"
};
let movie3 = {
    name: "The Silent Voice",
    img: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
};
let movies = [];
movies.push(movie1)
movies.push(movie2)
movies.push(movie3)
let movieContainer = document.getElementById("container")
movies.forEach(movie => {
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.img}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;
});