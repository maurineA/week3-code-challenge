let films = [];
document.addEventListener("DOMContentLoaded", function(){
    getFilms()
})

function getFilms(){
    fetch('http://localhost:3002/films')
    .then(response => response.json())
    .then(data => {
        films = [...data]
        displayItems(data)
    })
}



function displayItems(films){
    const itemContainer = document.querySelector("#films");
    for(film of films){
        itemContainer.innerHTML += `
        <div class="p-2 m-1 col-3">
            <div class="card" >
                <img src="${film.poster}" height="250px" class="card-img-top image" alt="...">
                <div class="card-body">
                <h5 class="card-title">${film.title}</h5>
                <span class="card-text">
                <ul>
                 <li>Runtime: ${film.runtime}</li>
                 <li>Capacity: ${film.capacity}</li>
                 <li>Showtime: ${film.showtime}</li>
                 <li>Tickets_sold: ${film.tickets_sold}</li>
                 <li>Description: ${film.description}</li>
                 <li>Completed: ${film.completed}</li>
                </ul>
                </span>
                <form>
                    <label>Buy</label>
                    <input type="number" min="1" value="1"/>
                    <button class="btn btn-primary btn-block m-2 btn-lg">Buy Ticket</button>
                </form>
                </div>
            </div>6
        </div>
        `
    }
}