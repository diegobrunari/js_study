function addPlayer() {
  const position = document.getElementById('position').value
  const playerName = document.getElementById('name').value
  const playerNumber = document.getElementById('number').value

  const confirmation = confirm('Escalar ' + playerName + ' como ' + position + '?')

  if (confirmation) {
    const teamList = document.getElementById('team-list')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + playerNumber
    playerItem.innerText = position + ': ' + playerName + '(' + playerNumber + ')'
    teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer() {
  const playerNumber = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player-' + playerNumber)

  const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

  if (confirmation) {
    playerToRemove.remove()
    document.getElementById('numberToRemove').value = ''
  }
}