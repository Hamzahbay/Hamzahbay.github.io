fetch('json/PLdata-teams.json').then(response => response.json()).then(response => {
    const teams = response.data
    let draft = ''
    teams.forEach(m => {
        draft += `<div class="teams" id="${m.id}"><div class="card-teams"><div>${m.cleanName}</div><img src="${m.image}" name="image"></div></div>`
    })
    document.querySelector('.draft').innerHTML = draft

    document.querySelector('.draft .teams').forEach(cards => {
        cards.addEventListener('click', function() {
            console.log(this.dataset.id)
        })
    })
})