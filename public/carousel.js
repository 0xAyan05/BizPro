const co_carousel = document.querySelector('.carousel')
const co_btn = document.querySelectorAll('.carousel-container button')
const co_path = 'api/services'
const co_route = ''

const ex_carousel =  document.querySelector('.ex-carousel')
const ex_btn = document.querySelectorAll('.ex-carousel-container button')
const ex_path = 'api/experts'

/* <section class="carousel-experts-section">
      <div class="ex-carousel-container">
        <h1 class="popExperts">Popular Experts</h1>
        <button class="left"><i class="fas fa-chevron-left"></i></button>
        <div class="ex-carousel"></div>
        <button class="right"><i class="fas fa-chevron-right"></i></button>
      </div>
    </section> */

    createCarousel(co_btn, co_carousel, co_path)
    
    createCarousel(ex_btn, ex_carousel, ex_path)

function createCarousel(btn, carousel, path) {

    let dragging = false, start, distance
    let isCo = carousel.className[0]=='c'? true: false
    let name = isCo? 'left': 'ex-left'

    btn.forEach(b =>{
        b.addEventListener('click', e => {
            console.log(e.className)
            carousel.scrollLeft += b.className==name? -1060: 1060
        })
    })

    carousel.addEventListener('mousedown', e => {
        dragging = true
        start = e.pageX
        distance = carousel.scrollLeft
    })
    window.addEventListener('mouseup', e =>{
        dragging = false
    })
    carousel.addEventListener('mousemove', e => {
    if(!dragging) return
    else carousel.scrollLeft = distance - (e.pageX - start) *1.5
    })


    fetch(`http://localhost:5000/${path}`)
    .then(res => res.json())
    .then(data => {
        data.forEach((dt, i) => {
            carousel.innerHTML += isCo? `
            <div class="card" style="background-image: url('${dt.poster}')" >
                <div class="text" >${dt.services}</div>
            </div>`:
           ` <div class="ex-card" >
                <div class="expert-picture" ></div>
                <p class="ex-name" >${dt.name}</p>
                <div class="ex-ratings" >${dt.ratings}</div>
            </div>`

            const cards = document.querySelectorAll(isCo? '.card': '.ex-card')
        cards.forEach(card => {
        card.addEventListener('click', (e)=>{
            const route = isCo? `/genres/${card.children[0].textContent}`: `/experts/${dt.id}`

            fetch(`http://localhost:5000${route}`)        
            .then(res => {
                window.open(res.url, '_self')
            })
        })
    })
        })
    })
    .catch(err => console.log(err))
}