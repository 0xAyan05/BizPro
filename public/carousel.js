const carousel = document.querySelector('.carousel')

fetch('http://localhost:5000/api/services')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(e => {
        carousel.innerHTML += `
        <div class="card">
        <p>${e.services}</p>
        <img  src="${e.poster}" ></img>
        </div>`
    })
})
.catch(err => console.log(err))