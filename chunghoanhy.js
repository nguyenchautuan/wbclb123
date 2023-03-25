const panelElement = document.querySelectorAll('.panel');

panelElement.forEach((panel) => {
    panel.addEventListener('click',()=>{
        removeActiveClass();
        panel.classList.add('active');
    })
})
function removeActiveClass(){
    panelElement.forEach((panel) => {
        panel.classList.remove('active');
    })
}