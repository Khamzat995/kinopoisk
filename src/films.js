import { getComments } from './comments'

function generateFilmsByCat(route, id) {
    const cards = document.querySelectorAll('.card')
    cards.forEach(item => {
        item.innerHTML = ''
    })
    getRandomFilms(route + id)
}

const getRandomFilms = (route) => {
    const cards = document.querySelectorAll('.card')
    fetch('http://localhost:4030/' + route)
        .then(res => res.json())
        .then(json => {
            json.forEach((item, i) => {
                const filmsTagA = document.createElement('a')
                const filmImg = document.createElement('img')
                const cardBlock = document.createElement('div')
                const cardTitle = document.createElement('h5')
                const cardText = document.createElement('p')
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

                filmsTagA.addEventListener('click', () => {
                    getComments(item._id)
                })
            })
        })
}

export {
    generateFilmsByCat,
    getRandomFilms
}