var ajax = new XMLHttpRequest(); // We create the HTTP Object

function getCitiesFromProvince() {
    "use strict";
    var province, url;
    province = document.getElementById("provSelect").value;
    url = "cities_from_province.php?prov=" + window.encodeURI(province);
    ajax.open("GET", url, true);
    ajax.onreadystatechange = handleHttpResponse;
    ajax.send(null);
    document.getElementById("animation").innerHTML = '<img id="loading" src="images/ajax-loader.gif" alt="Currently Loading" />';
    

    
}

function handleHttpResponse() {
    "use strict";
    var cities;
    if (ajax.readyState == 4 && ajax.status == 200) {
        cities = ajax.responseText;
        // The cities string contains cities separated by the tilde (~).
        // Use JavaScript split() function to return all cities in an array.
        var cityList = cities.split("~");
        // Then, add code that populates cities drop-down list.
        document.getElementById("citySelect").options.length=0;

        for (var i = 0; i < cityList.length; i++) { 
            document.getElementById("citySelect").options[i] = new Option(cityList[i]);
        }
        
        setTimeout(function(){ 
            document.getElementById("animation").style.display = "none"; 
        }, 500);
        
    }

    
}

