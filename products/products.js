function main(){

    var products = {0:{"name":"English Breakfast","brand":"Twinigs", "price": "£6.39", "bags": "150"},
                    1:{"name":"Earl Grey", "brand":"Twinigs", "price": "£6.39", "bags": "150"},
                    2:{"name":"Lady Grey", "brand":"Twinigs", "price": "£5.29", "bags": "100"},
                    3:{"name":"English Afternoon", "brand":"Twinigs", "price": "£5.29", "bags": "100"},
                    4:{"name":"Sweet Chai", "brand":"Yogi Tea", "price": "£5,07", "bags": "17"},
                    5:{"name":"Bee Happy", "brand":"Yogi Tea", "price": "£4,99", "bags": "17"}};

    console.log(window.location.href);
    if ( window.location.href.indexOf('?name=') > -1){
        let index = window.location.href.indexOf("?name=");
        let id = window.location.href.slice(index+6)

        /*
        let desc;

        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "./teas/0.txt", false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    desc = rawFile.responseText;
                    
                }
            }
        }
        rawFile.send(null);
        */

        //document.getElementById("desc").innerHTML = desc;
        document.getElementById("h1").innerHTML = products[id]["name"]
    }

        
}

main();