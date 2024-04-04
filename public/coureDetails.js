const cards = document.querySelectorAll('.course-card')

cards.forEach(crd => {
    crd.addEventListener('click', (e)=>{
        console.log(crd.childNodes[3],' ', crd.childNodes[5])

        fetch('http://localhost:5000/course/info')
        .then(res => window.open(res.url, '_self'))
    })
})