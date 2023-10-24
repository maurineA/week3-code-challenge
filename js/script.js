let films = [];

document.addEventListener("DOMContentLoaded", function(){
    getFilms();
    
});

function getFilms(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => {
        films = [...data];
        displayItems(data);
    });
}

function displayItems(films){

    const itemContainer = document.querySelector("#films");
    for(film of films){
        itemContainer.innerHTML +=`
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
                            <li>Tickets Sold: <span id="tickets-sold-${film.id}">${film.tickets_sold}</span></li>
                            <li>Description: ${film.description}</li>
                            <li>Completed: ${film.completed}</li>
                        </ul>
                    </span>
                
                        <button id="btn"class="btn btn-primary btn-block m-2 btn-lg">Buy Ticket</button>
                        
                    
                </div>
            </div>
        </div>
        `;

        const btn = itemContainer.querySelector("#btn")
        //console.log(btn)
        btn.addEventListener('click', () =>{

            console.log("i'm clicked")

            fetch(`http://localhost:3000/films/${film.id}`,{
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",
                    "Accept": "application/json"

                },
                body:JSON.stringify({

                    tickets_sold:film.tickets_sold +1

                })

            })
           
        })

        

       

    }
}
    