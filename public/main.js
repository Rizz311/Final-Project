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
      type: 'cc',
      title: 'Lee School',
      image: 'img/lee.jpg',
      description:'Best times to show up are Wednesday\'s between pm and 6 pm. Saturday\'s from 2pm to 5pm. Membership is required or a $2 dollar entry fee.'
    }, {
      position: new google.maps.LatLng(42.332047, -71.098164), //Tobin CC
      type: 'cc',
      title: 'Tobin Community Center',
      image: 'img/tobin.jpg'
    }, {
      position: new google.maps.LatLng(42.277112, -71.090677), //Mildred
      type: 'cc',
      title: 'Mildred Ave Community Center',
      image: 'img/mildred.jpg'
    }, {
      position: new google.maps.LatLng(42.276271, -71.103760), //Mattahunt
      type: 'cc',
      title: 'Mattahunt',
      image: 'img/mattahunt.jpg'
    }, {
      position: new google.maps.LatLng(42.305913, -71.074164), //Holland
      type: 'cc',
      title: 'Holland',
      image: 'img/holland.jpg'
    }, {
      position: new google.maps.LatLng(42.307794, -71.080700), //Burke HS
      type: 'cc',
      title: 'Burke HS',
      image: 'img/burke.jpg'
    }, {
      position: new google.maps.LatLng(42.322427, -71.090405), //Shelburne
      type: 'cc',
      title: 'Shelburne',
      image: 'img/shelburne.jpg'
    }, {
      position: new google.maps.LatLng(42.137931, -71.125091), //Stoughton 24/7
      type: 'ff',
      title: 'Family Fitness',
      image: 'img/stoughton.jpg'
    }, {
      position: new google.maps.LatLng(42.343629, -71.080232),//Titus Sparrow Park
      type: 'out',
      title: 'Titus Sparrow Park',
      image: 'img/noimg.png'
    }, {
      position: new google.maps.LatLng(42.307588, -71.108401),//Scagnoli-Nihill Park
      type: 'out',
      title: 'Scagnoli-Nihill Park',
      image: 'img/noimg.png'
    }, {
      position: new google.maps.LatLng(42.341446, -71.096521),//Fenway Park
      type: 'out',
      title: 'Fenway',
      image: 'img/noimg.png'
    }, {
      position: new google.maps.LatLng(42.331767, -71.126290),//Brookline High Park
      type: 'out',
      title: 'Brookline High Outdoors',
      image: 'img/noimg.png'
    }, {
      position: new google.maps.LatLng(42.295340, -71.154227),//Hynes Park
      type: 'out',
      title: 'VFW',
      image: 'img/noimg.png'
    }, {
      position: new google.maps.LatLng(42.283290, -71.156660),//Parkway YMCA
      type: 'ymca',
      title: 'Parkway Y',
      image: 'img/parkwayy.jpg'
    }, {
      position: new google.maps.LatLng(42.284731, -71.070926),//Dorchester YMCA
      type: 'ymca',
      title: 'Dorchester Y',
      image: 'img/dorchestery.jpg'
    }, {
      position: new google.maps.LatLng(42.317781, -71.082908),//Roxbury YMCA
      type: 'ymca',
      title: 'Roxbury Y',
      image: 'img/roxburyy.JPG'
    }, {
      position: new google.maps.LatLng(42.348618, -71.064682),//Chinatown YMCA
      type: 'ymca',
      title: 'Chinatown Y',
      image: 'img/wangy.jpg'

    }
  ];     // Creates corrosponding markers
  features.forEach(function(feature){
    console.log('Make Marker', + feature.position);
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
    marker.addListener('click', function(){
      console.log('You clicked here '+ feature.title);
    var locationName = document.getElementById('locationName');
    var locationImage = document.getElementById('locationImage').src=feature.image;
    var description = document.getElementById('time');
    locationName.innerHTML = '<h2>' + feature.title + '</h2>';
    description.innerHTML = '<h3>' + feature.description + '</h3>';
    })
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
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(wrapper);
  // map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(panel);

}



  $('.logo').click(function(){
    window.location.href= 'http://localhost:8080/';
  });




//Sidebar script
  $(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed == true) {
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });
  });




//Particles for the login
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );

});

var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");







$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});





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
