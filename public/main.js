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
    center: {lat:42.3601, lng:-71.0589}
  }
  //My Map
  var map = new google.maps.Map(document.getElementById('map'), start);

  //Add Marker to a location
  addMarker({lat:42.292501, lng:-71.080053});//Lee School
  addMarker({lat:42.332047, lng:-71.098164});//Tobin CC
  addMarker({lat:42.277112, lng:-71.090677});//Mildred
  addMarker({lat:42.276271, lng:-71.103760});//Mattahunt
  addMarker({lat:42.305913, lng:-71.074164}); //Holland
  addMarker({lat:42.307794, lng:-71.080700}); //Burke HS
  addMarker({lat:42.137931, lng:-71.125091});//Stoughton 24 Hour

  function addMarker(locations){
    var marker = new google.maps.Marker({
    position:locations,
    map:map
    });
  }
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
