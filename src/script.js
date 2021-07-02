const addCatInMenu = async(route) => {
    const block = document.getElementById('categories-menu')
    block.textContent = ''
    const mainTagA = document.createElement('a')
    mainTagA.className = 'nav-link text-danger'
    mainTagA.href = 'index.html'
    mainTagA.textContent = 'Главная'
    block.prepend(mainTagA)
    const data = await fetch('http://localhost:4030/genre')
    const json = await data.json()
    json.forEach(item => {
        const tagA = document.createElement('a')
        tagA.className = 'nav-link'
        tagA.href = '#'
        tagA.textContent = item.name
        block.append(tagA)
        tagA.addEventListener('click', () => {
            generateFilmsByCat(route, item._id)
        })
    });
    getRandomFilms(route)
}

function generateFilmsByCat(route, id) {
    const cards = document.querySelectorAll('.card')
    cards.forEach(item => {
        item.innerHTML = ''
    })
    getRandomFilms(route + id)
}

const getRandomFilms = async(route) => {
    const cards = document.querySelectorAll('.card')
    const data = await fetch('http://localhost:4030/' + route)
    const json = await data.json()

    json.forEach((item, i) => {
        const filmsTagA = document.createElement('a')
        const filmImg = document.createElement('img')
        const cardBlock = document.createElement('div')
        const cardTitle = document.createElement('h5')
        const cardText = document.createElement('p')
        console.log(1);
        filmImg.src = item.img
        filmImg.className = 'card-img-top'
        filmImg.style.height = '452px'
        filmsTagA.append(filmImg)

        cardBlock.className = 'card-body'

        cardTitle.className = 'card-title'
        cardTitle.textContent = item.name

        cardText.className = 'card-text'
        cardText.textContent = item.description

        cardBlock.append(cardTitle)
        cardBlock.append(cardText)

        cards[i].append(filmsTagA)
        cards[i].append(cardBlock)
    })
}

addCatInMenu('films/')