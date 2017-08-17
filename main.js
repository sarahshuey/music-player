let button = document.querySelector('.search-button')
      button.addEventListener('click', function () {
        let input = document.querySelector('.search-input');
        console.log('value = ', input.value);
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
        console.log('data', data);
        let allResults =''
        console.log('all results', allResults);
          data.results.forEach(function(a) {
            let bigdiv = document.createElement('div')
            bigdiv.classList.add('eachResult')
              allResults = `
              <div class ='albumCover'><img src='${a.artworkUrl100}'></div>
              <div class ='info'>
              <div class ='songName'> ${a.trackName}</div>
              <div class ='albumName'> ${a.collectionName}</div>
              <div class ='name'> ${a.artistName}</div>
              </div>`
              bigdiv.innerHTML = allResults
              results.appendChild(bigdiv)
              bigdiv.addEventListener('click', function() {
                console.log('click');
                console.log(a.previewUrl);
                player.src = a.previewUrl
              })
            })
          })
      })
      });
