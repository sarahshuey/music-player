/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let button = document.querySelector('.search-button')
      button.addEventListener('click', function () {
        let input = document.querySelector('.search-input');
        console.log('value = ', input.value);
        let music = input.value
let results = document.querySelector('.results')
let url ='https://itunes.apple.com/search?term='

fetch(`${url}${music}`)
.then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('data', data);
        let allResults =''
        console.log('all results', allResults);
          data.results.forEach(function(a) {
              allResults += `<div class ='eachResult'>
              <div class ='albumCover'><a href="${a.previewUrl}"><img src='${a.artworkUrl100}'></a></div>
              <div class ='info'>
              <div class ='songName'> ${a.trackName}</div>
              <div class ='albumName'> ${a.collectionName}</div>
              <div class ='name'> ${a.artistName}</div>
              </div>
              </div>`
              results.innerHTML = allResults
            })
          }
        )
      })
      });
