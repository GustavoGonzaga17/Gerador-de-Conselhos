const randomBtn = document.querySelector('.main__card__button')
const url = 'https://api.adviceslip.com/advice'
const idAdvice = document.querySelector('#idAdvice')
const textAdvice = document.querySelector('#text-advice')

randomBtn.addEventListener('click', () => {
    randomAdvice()
})

function randomAdvice () {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na Requisição')
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
            updateElements(data.slip.id,data.slip.advice)
        })
        .catch(error => {
            console.log("Erro:",error)
        })
}

function updateElements(id, advice) {
    idAdvice.textContent = `#${id}`
    textAdvice.textContent = advice
}