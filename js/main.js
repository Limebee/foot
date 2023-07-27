document.querySelector('#search').addEventListener('click', getFetch)

function getFetch(){
  const name = document.querySelector('input').value
  
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        
        
        document.querySelector('#playerName').innerText = data.player[0].strPlayer
        document.querySelector('#playerImage').src = data.player[0].strThumb
        document.querySelector('#playerNation').innerText = data.player[0].strNationality
        document.querySelector('#birthDate').innerText = data.player[0].dateBorn
        document.querySelector('#team').innerText = data.player[0].strTeam
        document.querySelector('#position').innerText = data.player[0].strPosition
        document.querySelector('#foot').innerText = data.player[0].strSide
        document.querySelector('#jersey').innerText = data.player[0].strNumber
        


       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }