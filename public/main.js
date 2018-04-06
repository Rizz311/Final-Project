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

  //My Map
  var map = new google.maps.Map(document.getElementById('map'), start);

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
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(panel);
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
