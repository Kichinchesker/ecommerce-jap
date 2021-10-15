//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function validarCarrito() {
    var calle = document.getElementById('calle').value;
    if (calle.length == 0) {
        return;
    }

    var numero = document.getElementById('numero').value;
    if (numero.length == 0) {
        return;
    }
    var esquina = document.getElementById('esquina').value;
    if (esquina.length == 0) {
        return;
    }
    else
        swal("!Felicitaciones!", "Ha realizado su compra con éxito.", "success", {
            button: "Regresar al inicio"
        }
        )

            .then(function () {
                window.location.href = "./home.html";

            });
}

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}



let unitCost = 100;
let productCount = 2;
let currency = "UYU";
let porcentajeEnvio = "";

function updateTotalCosts() {

    let unitProductCost = document.getElementById("productCostText");
    let shippingCost = document.getElementById("comissionText");
    let totalCost = document.getElementById("totalCostText");

    let productCost = unitCost * productCount;
    let unitCostToShow = currency + " " + (financial(unitCost * productCount));
    let shippingToShow = currency + " " + (financial(unitCost * productCount * porcentajeEnvio));
    let totalCostToShow = currency + " " + ((financial(unitCost * productCount * porcentajeEnvio * 100) / 100 + productCost));

    unitProductCost.innerHTML = unitCostToShow;
    shippingCost.innerHTML = shippingToShow;
    totalCost.innerHTML = totalCostToShow;
}







document.addEventListener("DOMContentLoaded", function (e) {

    function mostrarElemento() {
        fetch(CART_INFO_URL)
            .then((response) => response.json())
            .then((data) => {

                let name = document.getElementById("name");
                let cost = document.getElementById("cost");
                let image = data.articles[0].src;
                let counter = data.articles[0].count;
                let product = "";
                product += `
                 <img class="img-fluid img-thumbnail" src="` + image + `" alt= "Pino de olor para el auto">
                 `
                document.getElementById("image").innerHTML = product;
                name.innerHTML = data.articles[0].name;
                cost.innerHTML = data.articles[0].currency + " " + data.articles[0].unitCost;
                document.getElementById("cantidades").defaultValue = counter;
            });
    }
    mostrarElemento();
    updateTotalCosts();

    document.getElementById("cantidades").onchange = function () {
        productCount = this.value;
        updateTotalCosts();
    };

    document.getElementById("premiumradio").onchange = function () {
        porcentajeEnvio = 0.15;
        updateTotalCosts();
    };

    document.getElementById("expressradio").onchange = function () {
        porcentajeEnvio = 0.07;
        updateTotalCosts();
    };

    document.getElementById("standardradio").onchange = function () {
        porcentajeEnvio = 0.05;
        updateTotalCosts();
    };



    document.getElementById("finalizar").onclick = function (e) {
        validarCarrito(e);
    }
});