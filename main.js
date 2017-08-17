let button = document.querySelector('.search-button')
      button.addEventListener('click', function () {
        let input = document.querySelector('.search-input');
        let music = input.value
        let player = document.querySelector('.music-player')
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
        results.innerHTML =''
          data.results.forEach(function(a) {
            let bigdiv = document.createElement('div')
            bigdiv.classList.add('eachResult')
              let allResults = `
              <div class ='albumCover'><img src='${a.artworkUrl100}'></div>
              <div class ='info'>
              <div class ='songName'> ${a.trackName}</div>
              <div class ='albumName'> ${a.collectionName}</div>
              <div class ='name'> ${a.artistName}</div>
              </div>`
              bigdiv.innerHTML = allResults
              results.appendChild(bigdiv)
              bigdiv.addEventListener('click', function() {
                player.src = a.previewUrl
              })
            })
          })
      })
      });
