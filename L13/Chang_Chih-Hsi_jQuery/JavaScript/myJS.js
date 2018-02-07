$(function () {
		var baseUrl = 'https://restcountries.eu/';
      
		var getData = function(region) {
			if (region.value == "") {
				$("#divResult").html("");
				return;
			}
         
			var countryUrl = baseUrl + "rest/v2/region/" + region.value;
			
			$.ajax({
				url: countryUrl,
				type: "GET",
				dataType: 'json',
				error: function (x, y, z) {
					alert(x + '\n' + y + '\n' + z);
				},
				success: function (data) {
					WriteResponse(data);
				}
			});
		}

		var WriteResponse = function (countries) {
            var strResult = "";
            strResult += "<h2>Number of countries: " + countries.length + "</h2>"; 
            
			strResult += "<table class='table'>";
			
			strResult += "<tr>\n";
            strResult += "<th>Country</th>\n";
			strResult += "<th>Capital</th>\n";
			strResult += "<th class='population'>Population</th>\n";
			strResult += "<th>Flag</th>\n";
			
			strResult += "</tr>\n";
			
			$.each(countries, function (index, t) {
               strResult += "<tr>\n";

               strResult += "  <td class='name'> " + t.name + "</td>\n";
			   strResult += "  <td class='capital'> " + t.capital + "</td>\n";
			   strResult += "  <td class='population'> " + t.population + "</td>\n";
               strResult += "  <td><img class='flag' src='" + t.flag + "' /></td>\n";
			   
			   

               strResult += "</tr>\n";
            });
			
			
			
            strResult += "</table>\n";
            $("#divResult").html(strResult);
		}
      
		$( "#regions" ).change(function() {
			getData(this);
		});
	});