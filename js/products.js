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
            
            document.getElementById("clearRangeFilter").onclick = function(){
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

    document.getElementById("rangeFilterCount").onclick = function(){
        min = document.getElementById("rangeFilterCountMin").value;
        max = document.getElementById("rangeFilterCountMax").value;
        articulosFiltrados();
    };

    
});
