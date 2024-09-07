$(document).ready(function () {
    $("#boton").click(function () {
        findCharacter();
    });
});

function findCharacter() {
    $("#personajes").html("");
    let busqueda = $("#input").val();

    if(busqueda != ''){
        $.ajax({
            url: "https://rickandmortyapi.com/api/character/?name=" + busqueda,
            type: "get",
            dataType: "json",
    
            success: function (json) {
    
                if (json.results && json.results.length > 0) {
                    let jsonPersonajes = json.results;
                    $.each(jsonPersonajes, function (i, data) {
                        $("#personajes").append(
                            `<div class="col-md-2 mb-3">
                                <div class="card text-center text-bg-dark mb-3">
                                    <img src="${data.image}" class="card-img-top" alt="${data.name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${data.name}</h5>
                                        <p class="card-text">Status: ${data.status}</p>
                                        <p class="card-text">Species: ${data.species}</p>
                                        <p class="card-text">Gender: ${data.gender}</p>
                                    </div>
                                </div>
                            </div>`
                        );
                    });
                    $("#input").val("");
                } else {
                    $("#personajes").html(
                        `<hr>
                        <h1 class="text-center text-white">Ingresa un personaje valido</h1>`
                    );
                }
            },
            error: function () {
                $("#personajes").html(
                    `<hr>
                    <h1 class="text-center text-white">Algo salio mal, vuelve a intentarlo mas tarde</h1>`
                );
            }
        });
    } else {
        $("#personajes").html(
            `<hr>
            <h1 class="text-center text-white">Ingrese un personaje</h1>`
        );
    }
}
