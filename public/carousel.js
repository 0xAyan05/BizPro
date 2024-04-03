const carousel = document.querySelector('.carousel')

fetch('http://localhost:5000/api/services')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(e => {
        carousel.innerHTML += `
        <img class="card" src="${e.poster}" ><p>${e.services}</p></img>`
    })
})
.catch(err => console.log(err))