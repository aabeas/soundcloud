/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with

var submit = document.querySelector("#search-bar");
var display = document.querySelector(".results");

function search(searchCrit){
  document.querySelector('.results').textContent='Searching... for ' + searchCrit;
  fetch("https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=" + searchCrit,{

    })
    .then( function(r) {
      return r.json()
    })
    .then( function(json){
      console.log(json)

    document.querySelector('.results').textContent='';

      for(var i = 0; i < json.length; i++){

        var title = json[i].title
        var id = json[i].id

        console.log(json[i].artwork_url)

        if (json[i].artwork_url){

          var pic = json[i].artwork_url

        }else{
          var pic = 'images/abstract-gem-pattern-album-alt-vector.jpg';
        }

        var html = `
          <div class="song-wrapper">
            <div class='image'>
              <img src="${pic}" alt="Album Cover">
            </div>
            <div class="title" id="${id}">
              ${title}
            </div>
          </div>
        `
        document.querySelector('.results').insertAdjacentHTML('afterbegin', html)

    }
    var titles = document.querySelectorAll('.song-wrapper .title')
    for (var i = 0; i < titles.length; i++) {
      titles[i].addEventListener("click", function(event) {
        var id = event.target.id
        document.querySelector('audio').src='https://api.soundcloud.com/tracks/'+ id + '/stream?client_id=8538a1744a7fdaa59981232897501e04'
      });
    }
  })
}


// 2. Create your `onSubmit` event for getting the user's search term

document.querySelector('.search-form').addEventListener("submit", function(event) {
  event.preventDefault();
  let artist = document.querySelector('#search-bar').value;
  search(artist);
});

// 3. Create your `fetch` request that is called after a submission



// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
