document.addEventListener("DOMContentLoaded", function (e) {
    // const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
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
        });
});
