function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLocation = new google.maps.LatLng(31.296567, 121.156022)
        var mapOptions = {
          center: myLocation,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var marker = new google.maps.Marker({
        	position: myLocation,
        	map: map,
        	title: "Source Access Headquarters"
        })
      }
      google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', initialize)