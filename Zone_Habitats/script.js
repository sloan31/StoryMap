$.getJSON("ODHE_Stick.js",function(data_1){
	// add GeoJSON layer to the map once the file is loaded
		L.geoJson(data_1, {
			polyline: function(feature, latlng){
              			
			}
		}).addTo(mymap);