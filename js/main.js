document.querySelector('#search').addEventListener('click', getFetch)

function getFetch(){
  const name = document.querySelector('input').value
  
  const url = `https://restcountries.com/v3.1/name/${name}`

  fetch(url, {mode:'cors'})
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let langs = Object.values(data[0].languages)
        
        
  
        document.querySelector('#commonName').innerText = data[0].name.common
        document.querySelector('#officialName').innerText = data[0].name.official
        document.querySelector('#continent').innerHTML = data[0].continents
        document.querySelector('#capital').innerHTML = data[0].capital
        document.querySelector('#population').innerText = data[0].population
        document.querySelector('#language').innerHTML = langs
        document.querySelector('#region').innerHTML = data[0].subregion
        document.querySelector('#coatOfArms').src = data[0].coatOfArms.png
        document.querySelector('.flag').src = data[0].flags.png
        document.querySelector('.flag').alt = data[0].flags.alt
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
