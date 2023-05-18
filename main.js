document.querySelector('#search').addEventListener('click', getFetch)

function getFetch(){
  const word = document.querySelector('input').value
  
  const url = `https://www.fishwatch.gov/api/species/${word}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector('#species').innerText = data[0]['Species Name']
        document.querySelector('#scientific').innerText = data[0]['Scientific Name']
        document.querySelector('#habitat').innerHTML = data[0].Habitat
        document.querySelector('#physicalDescription').innerHTML = data[0]['Physical Description']
        document.querySelector('#population').innerText = data[0].Population
        document.querySelector('#location').innerHTML = data[0].Location
        document.querySelector('#fishingRate').innerHTML = data[0]['Fishing Rate']
        document.querySelector('#populationStatus').innerHTML = data[0]['Population Status']
        document.querySelector('.fish').src = data[0]['Species Illustration Photo'].src
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
