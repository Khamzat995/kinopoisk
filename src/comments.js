import { generateFilmsByCat } from './films'

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

export {
    getComments,
    addComment
}