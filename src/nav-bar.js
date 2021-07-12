import { getRandomFilms, generateFilmsByCat } from "./films";

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

}

export default addCatInMenu;