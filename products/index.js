function addProducts(){

    var products = [{"name":"English Breakfast","brand":"Twinigs", "price": "£6.39"},
                    {"name":"Earl <br> Grey", "brand":"Twinigs", "price": "£6.39"},
                    {"name":"Lady <br> Grey", "brand":"Twinigs", "price": "£5.29"},
                    {"name":"English Afternoon", "brand":"Twinigs", "price": "£5.29"},
                    {"name":"Test Name", "brand":"Test brand"},
                    {"name":"Test Name", "brand":"Test brand"}];

    /*fetch("../assets/products.json")
    .then(response => response.json())
    .then(data => products = data)*/

    var completelist= document.getElementById("productsItems");

    for (i=0; i<products.length; i++){
        completelist.innerHTML += `<li class="productItem"><h3>${products[i]["name"]}</h3><h4>Brand: ${products[i]["brand"]}</h4><p>${products[i]["price"]}</p></li>`;
    }
    
}


addProducts()