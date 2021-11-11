function addProducts(){
    console.log("fsafss")

    var products = {0:{"name":"English<br>Breakfast","brand":"Twinigs", "price": "£6.39", "bags": "150"},
                    1:{"name":"Earl<br>Grey", "brand":"Twinigs", "price": "£6.39", "bags": "150"},
                    2:{"name":"Lady<br>Grey", "brand":"Twinigs", "price": "£5.29", "bags": "100"},
                    3:{"name":"English<br>Afternoon", "brand":"Twinigs", "price": "£5.29", "bags": "100"},
                    4:{"name":"Sweet<br>Chai", "brand":"Yogi Tea", "price": "£5,07", "bags": "17"},
                    5:{"name":"Bee<br>Happy", "brand":"Yogi Tea", "price": "£4,99", "bags": "17"}};
    console.log("sadsadsa")

    /*fetch("../assets/products.json")
    .then(response => response.json())
    .then(data => products = data)*/

    var completelist= document.getElementById("productsItems");

    for (i=0; i<Object.keys(products).length; i++){
        completelist.innerHTML += `<li class="productItem">
                                    <h3>${products[i]["name"]}</h3>
                                    <h4>Brand: ${products[i]["brand"]}</h4>
                                    <p>Tea bags: ${products[i]["bags"]}</p>
                                    <p>Price: ${products[i]["price"]}</p>
                                    <a href="temp.html?name=${i}" id="productBtn">View Product</a>
                                    </li>`;
    }
    
}


addProducts()