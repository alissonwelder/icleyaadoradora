const $navBar = document.querySelectorAll('.nav-bar')[0]
window.addEventListener('scroll',toggleNavBar,false)
function toggleNavBar(){
}
const $intLinks = document.querySelectorAll('.int-link a')
$intLinks.forEach(function (cur) {
    cur.addEventListener('click',function(evt) {
        evt.preventDefault()   
        window.scrollTo({
                top: document.querySelector(cur.getAttribute('href')).offsetTop - $navBar.offsetHeight,
                left: 0,
                behavior: 'smooth'
        })
    }, false)
})