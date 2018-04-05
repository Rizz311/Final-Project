var imgPath = ['me.png','burke.jpg','lee.jpg','mildred.jpg','roslindale.jpg','tobin.jpg']
var pic = 0

var carousel = ()=>{
    if(pic >= imgPath.length-1){
      pic = 0
    }else{
      pic = pic + 1;
    }
  $('#images').attr('src','img/' + imgPath[pic]);
}

$(()=>{
  setInterval(carousel,3000)
})
$( document ).ready(function() {
  $('.openList').on('click',function(){
   $('.list').toggleClass('opened');
  })
});
function initMap(){
  //Map starts at going to make the switch to Geolocation
  var start = {
    zoom: 15,
    center: {lat:42.3601, lng:-71.0589},
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#3b80ff"
      },
      {
        "lightness": -100
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels.icon",
    "stylers": [
      {
        "lightness": -100
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "saturation": 100
      },
      {
        "lightness": -100
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
  }
  //My Map
  var map = new google.maps.Map(document.getElementById('map'), start);

  //Add Marker to a location
  //addMarker({lat:42.292501, lng:-71.080053});//Lee School
  // addMarker({lat:});//Tobin CC
  // addMarker({lat:});//Mildred
  // addMarker({lat:});//Mattahunt
  // addMarker({lat:}); //Holland
  // addMarker({lat:}); //Burke HS
  // addMarker({lat:});//Stoughton 24 Hour

  // function addMarker(locations){
  //   var marker = new google.maps.Marker({
  //   position:locations,
  //   map:map
  //   });
  // }
  //Array of icons I will be using
  var iconBase = ['img/ymca.gif', 'img/cc.png', 'img/out.png', '247.png'];
        var icons = {
          ymca: {
            name: 'YMCA',
            icon: 'img/ymca.gif'
          },
          cc: {
            name: 'CC',
            icon: 'img/cc.png'
          },
          out: {
            name: 'Outdoors',
            icon: 'img/out.png'
          },
          ff: {
            name: '24/7',
            icon: 'img/247.png'
          }
        };
//Latitude and Longitude coordinates for the markers
        var features = [
          {
            position: new google.maps.LatLng(42.292501, -71.080053), //Lee School
            type: 'cc'
          }, {
            position: new google.maps.LatLng(42.332047, -71.098164), //Tobin CC
            type: 'cc'
          }, {
            position: new google.maps.LatLng(42.277112, -71.090677), //Mildred
            type: 'cc'
          }, {
            position: new google.maps.LatLng(42.276271, -71.103760), //Mattahunt
            type: 'cc'
          }, {
            position: new google.maps.LatLng(42.305913, -71.074164), //Holland
            type: 'cc'
          }, {
            position: new google.maps.LatLng(42.307794, -71.080700), //Burke HS
            type: 'cc'
          }, {
            position: new google.maps.LatLng(42.137931, -71.125091), //Stoughton 24/7
            type: 'ff'
          }, {
            position: new google.maps.LatLng(42.343629, -71.080232),//Titus Sparrow Park
            type: 'out'
          }, {
            position: new google.maps.LatLng(42.307588, -71.108401),//Scagnoli-Nihill Park
            type: 'out'
          }, {
            position: new google.maps.LatLng(42.341446, -71.096521),//Fenway Park
            type: 'out'
          }, {
            position: new google.maps.LatLng(42.331767, -71.126290),//Brookline High Park
            type: 'out'
          }, {
            position: new google.maps.LatLng(42.295340, -71.154227),//Hynes Park
            type: 'out'
          }, {
            position: new google.maps.LatLng(42.283290, -71.156660),//Parkway YMCA
            type: 'ymca'
          }, {
            position: new google.maps.LatLng(42.284731, -71.070926),//Dorchester YMCA
            type: 'ymca'
          }, {
            position: new google.maps.LatLng(42.317781, -71.082908),//Roxbury YMCA
            type: 'ymca'
          }, {
            position: new google.maps.LatLng(42.348618, -71.064682),//Chinatown YMCA
            type: 'ymca'
          }
        ];     // Creates corrosponding markers
        features.forEach(function(feature){
          console.log('Make Marker', + feature.position);
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });

        var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
console.log('loaded');
