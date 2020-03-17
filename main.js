const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

const modal = document.getElementById('userId');

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display="none";
    }
}
