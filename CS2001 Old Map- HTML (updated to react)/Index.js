let map;

function initMap() {
  var options = {
    zoom: 11,
    center: { lat: 51.532210, lng: -0.484810 },
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);



  infoWindow = new google.maps.InfoWindow();



  var markers = [
    {
      coords: { lat: 51.532210, lng: -0.484810 },
      content:
        '<h3 style="font-family: Verdana; color: black ">Foodbank @ The Living Room</h3>' +
        '<h5 style="font-family: Verdana; color: black ">Address: The Living Room, High St, Cowley, Uxbridge UB8 2DZ</h5>' +
        '<h5>Phone Number : 01895 233466</h5>'



    },
    {
      coords: { lat: 51.551920, lng: -0.486690 },
      content:
        '<h3 style="font-family: Verdana; color: black ">Hillingdon FoodBank</h3>' +
        '<h5 style="font-family: Verdana; color: black ">Address: 30 Oxford Rd, Denham, Uxbridge UB9 4DQ</h5>' +
        '<h5>Phone Number : 01895 252224</h5>'
    },
    {
      coords: { lat: 51.532430, lng: -0.451780 },
      content:
        '<h3 style="font-family: Verdana; color: black ">The Salvation Army (Hillingdon)</h3>' +
        '<h5 style="font-family: Verdana; color: black ">Address: The Royal British Legion, 125 Uxbridge Rd, Uxbridge UB10 0LQ</h5>' +
        '<h5>Phone Number : 01895 271395</h5>'

    },
    {
      coords: { lat: 51.544877, lng: -0.483096 },
      content:
        '<h3 style="font-family: Verdana; color: black ">Hillingdon FoodBank</h3>' +
        '<h5 style="font-family: Verdana; color: black ">Address:  4 New Windsor St, Uxbridge UB8 2TU</h5>'



    },

    {
      coords: { lat: 51.603473, lng: -0.482039 },
      content:
        '<h3 style="font-family: Verdana; color: black ">Hillingdon Crisis Support</h3>' +
        '<h5 style="font-family: Verdana; color: black ">Address:  R/o church hall, High St, Harefield UB9 6BX</h5>' +
        '<h5>Phone Number : 01895 725145</h5>'



    }
    ,

    {
      coords: { lat: 51.639995, lng: -0.490113 },
      content:
        '<h3 style="font-family: Verdana; color: black ">Rickmansworth Foodbank</h3>' +
        '<h5 style="font-family: Verdana; color: black ">Address: The Mill, Methodist Church, Berry Lane, Mill End, Rickmansworth WD3 7HJ</h5>' +
        '<h5>Phone Number : 07716 856892</h5>'



    }


  ];

  var myLatlng = new google.maps.LatLng(51.53470, -0.468640);
  var mapOptions = {
    zoom: 10,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), options);

  var marker = new google.maps.Marker({




  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,

    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
      setIcon: {
        url: "icon.svg"

      }

    }

    //Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content

      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      })

      autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"),
        {
          componentRestrictions: { 'country': ['uk'] },
          fields: ['geometry', 'name'],
          types: ['establishment']
        });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        new google.maps.Marker({
          position: place.geometry.location,
          title: place.name,
          map: map
        })
      });




      ;
    }
    /*
 
   if(navigator.geolocation){
     console.log('geolocation is here');
     navigator.geolocation.getCurrentPosition((loc) => {
         location.lat = loc.coords.latitude;
         location.lang=loc.coords.longitude;
         map = new google.maps.Map(document.getElementById("map"), options);
     },
     (err) => {
       console.log("user clicked no");
       map = new google.maps.Map(document.getElementById("map"),options);
     }
     )
   }else{
       console.log('geolocation not supported :(');
   } */


  }

  // autocomplete = new google.maps.places.Autocomplete(document.getElementById("input") , {
  // componentRestrictions : {
  //   'country' : ['uk'],
  //   fields:['geometry','name'],
  //   types:['establishment']
  // }
  // })

  // autocomplete.addListener("place_changed"), () =>{
  //   const place = autocomplete.getPlace();
  //   new google.maps.Marker({
  //     position : place.geomery.location,
  //     title : place.name,
  //     map : map
  //   })
  // }





}
