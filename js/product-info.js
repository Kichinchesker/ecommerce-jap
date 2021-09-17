//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    fetch(PRODUCT_INFO_URL)
        .then(response => response.json())
        .then(data => {
            let product = data;
            let images = product.images;
            let htmlContentToAppend = "";
            for (let i = 0; i < images.length; i++) {
                let image = images[i];
                htmlContentToAppend += `
              <div class="col-lg-3 col-md-4 col-6">
                  <div class="d-block mb-4 h-100">
                      <img class="img-fluid img-thumbnail" src="` + image + `" alt="">
                  </div>
              </div>
              `
                document.getElementById("productImages").innerHTML = htmlContentToAppend;
            }

            document.getElementById("description").innerHTML = product.description;
            document.getElementById("category").innerHTML = product.category;
            document.getElementById("productCost").innerHTML = product.currency + " " + product.cost;
            document.getElementById("productSoldCount").innerHTML = product.soldCount;

        });

    fetch(PRODUCT_INFO_COMMENTS_URL)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let status = data[i];
                let stars = ""; // Como poner estrellas
                for (let counter = 0; counter < status.score; counter++)
                    stars += '<span class="fa fa-star checked" style="color: yellow">';
                let commit = "";
                commit += `
        <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">` + stars + `</h4>
                    <small class="text-muted"><b>` + status.description + `</b></small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1"> </h4>
                    <small class="text-muted"> ` + status.dateTime + `</small>
                </div>
                <div class="text-muted"> <h5>` + status.user + `</h5></div>
            </div>
        </div>
    </div>
    `;
                document.getElementById("commit").innerHTML += commit;
            }

        });

});
