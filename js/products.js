document.addEventListener("DOMContentLoaded", function (e) {
    // const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";

    var min = '';
    var max = '';


    fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(data => {
            let htmlContentToAppend = "";
            for (let i = 0; i < data.length; i++) {
                let product = data[i];
                console.log(product);
                htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name + `</h4>
                        <small class="text-muted">` + product.currency + ' ' + product.cost + `</small>
                    </div>
                    <div class="text-muted"> <h5>` + product.description + `</h5></div>
                    <div class="text-muted"> <h5> Vendidos: ` + product.soldCount + `</h5></div>
                </div>
                
            </div>
        </div>
        `
                document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
            };

            document.getElementById("clearRangeFilter").onclick = function () {
                document.getElementById("rangeFilterCountMin").value = "";
                document.getElementById("rangeFilterCountMax").value = "";
                document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
            };
        });



    function articulosFiltrados() {

        let artFiltrado = '';
        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let product = data[i];
                    console.log(product);
                    if (((min == '') || (min != '' && product.cost >= min)) &&
                        ((max == '') || (max != '' && product.cost <= max))) {
                        artFiltrado += `
                <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name + `</h4>
                        <small class="text-muted">` + product.currency + ' ' + product.cost + `</small>
                    </div>
                    <div class="text-muted"> <h5>` + product.description + `</h5></div>
                    <div class="text-muted"> <h5> Vendidos: ` + product.soldCount + `</h5></div>
                </div>
                
            </div>
        </div>
        `
                        document.getElementById("cat-list-container").innerHTML = artFiltrado;
                    }
                };
            });
    }

    document.getElementById("rangeFilterCount").onclick = function () {
        min = document.getElementById("rangeFilterCountMin").value;
        max = document.getElementById("rangeFilterCountMax").value;
        articulosFiltrados();
    };

    // Punto 2 Entrega 2
    
    function listaAsc() {

        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(data => {
                data.sort(function(precio1, precio2) {
                    return precio1.cost - precio2.cost;
                });
                let listaPrecioAsc = "";
                for (let i = 0; i < data.length; i++) {
                    let product = data[i];
                    console.log(product);
                    listaPrecioAsc += `
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name + `</h4>
                    <small class="text-muted">` + product.currency + ' ' + product.cost + `</small>
                </div>
                <div class="text-muted"> <h5>` + product.description + `</h5></div>
                <div class="text-muted"> <h5> Vendidos: ` + product.soldCount + `</h5></div>
            </div>
            
        </div>
    </div>
    `
                    document.getElementById("cat-list-container").innerHTML = listaPrecioAsc;
                }
            });
    }
    document.getElementById("sortAsc").onclick = function () {
        listaAsc();
    };

    function listaDesc() {

        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(data => {
                data.sort(function(precio1, precio2) {
                    return precio2.cost - precio1.cost;
                });
                let listaPrecioDesc = "";
                for (let i = 0; i < data.length; i++) {
                    let product = data[i];
                    console.log(product);
                    listaPrecioDesc += `
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name + `</h4>
                    <small class="text-muted">` + product.currency + ' ' + product.cost + `</small>
                </div>
                <div class="text-muted"> <h5>` + product.description + `</h5></div>
                <div class="text-muted"> <h5> Vendidos: ` + product.soldCount + `</h5></div>
            </div>
            
        </div>
    </div>
    `
                    document.getElementById("cat-list-container").innerHTML = listaPrecioDesc;
                }
            });
    }
    document.getElementById("sortDesc").onclick = function () {
        listaDesc();
    };

    function listaRelevanciaDesc() {

        fetch(PRODUCTS_URL)
            .then(response => response.json())
            .then(data => {
                data.sort(function(vendido1, vendido2) {
                    return vendido2.soldCount - vendido1.soldCount;
                });
                let listaRelev = "";
                for (let i = 0; i < data.length; i++) {
                    let product = data[i];
                    console.log(product);
                    listaRelev += `
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ product.name + `</h4>
                    <small class="text-muted">` + product.currency + ' ' + product.cost + `</small>
                </div>
                <div class="text-muted"> <h5>` + product.description + `</h5></div>
                <div class="text-muted"> <h5> Vendidos: ` + product.soldCount + `</h5></div>
            </div>
            
        </div>
    </div>
    `
                    document.getElementById("cat-list-container").innerHTML = listaRelev;
                }
            });
    }
    document.getElementById("sortByCount").onclick = function () {
        listaRelevanciaDesc();
    };


});
