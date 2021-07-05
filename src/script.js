const addCatInMenu = (route) => {
    const block = document.getElementById('categories-menu')
    block.textContent = ''
    const mainTagA = document.createElement('a')
    mainTagA.className = 'nav-link text-danger'
    mainTagA.href = 'index.html'
    mainTagA.textContent = 'Главная'
    block.prepend(mainTagA)
    fetch('http://localhost:4030/genre')
        .then(res => res.json())
        .then(json => {
            json.forEach(item => {
                const tagA = document.createElement('a')
                tagA.className = 'nav-link'
                tagA.href = '#'
                tagA.textContent = item.name
                block.append(tagA)
                tagA.addEventListener('click', () => {
                    generateFilmsByCat('films/', item._id)
                })
            });
        })

    getRandomFilms(route)
}

function generateFilmsByCat(route, id) {
    const cards = document.querySelectorAll('.card')
    cards.forEach(item => {
        item.innerHTML = ''
    })
    getRandomFilms(route + id)
}

const getComments = (id) => {
    const cards = document.querySelectorAll('.card')
    cards.forEach(item => {
        item.innerHTML = ''
    })

    generateFilmsByCat('film/', id)


    const card = document.querySelector('.card')
    const cardParrent = card.parentElement
    const commentsBlock = document.createElement('div')
    commentsBlock.className = 'comment-block'

    fetch('http://localhost:4030/review/' + id)
        .then(res => res.json())
        .then(json => {
            json.forEach(item => {
                const h5 = document.createElement('h5')
                const p = document.createElement('p')
                h5.textContent = item.authorName
                p.textContent = item.text
                commentsBlock.append(h5)
                commentsBlock.append(p)
            })
        })
    cardParrent.after(commentsBlock)
    addComment(id)
}

const addComment = (id) => {
    const commentsBlock = document.querySelector('.comment-block')
    const formBlock = document.createElement('div')

    const form = document.createElement("form");
    const inputName = document.createElement("input");
    const inputComment = document.createElement("input");
    const button = document.createElement("button");

    form.method = "post";
    inputName.type = "text";
    inputName.name = "authorName";
    inputComment.type = "text";
    inputComment.name = "text";
    inputName.placeholder = 'name'
    inputComment.placeholder = 'commentary'
    button.type = "submit";
    button.prepend("Отправить");
    form.append(inputName, inputComment, button)

    button.addEventListener('click', (e) => {
        e.preventDefault()

        fetch('http://localhost:4030/review/' + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    authorName: inputName.value,
                    text: inputComment.value
                })
            }).then(res => res.json())
            .then(json => {
                commentsBlock.textContent = ''
                formBlock.textContent = ''
                inputComment.value = ''
                inputName.value = ''
                getComments(id)
            })
    })
    commentsBlock.after(formBlock)
    formBlock.append(form)
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

export { addCatInMenu }