const panles = document.querySelectorAll('.panel');

panles.forEach(panel => {
    panel.addEventListener('click', () => {
        // this is will remove all active classes

        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panles.forEach(panel => {
        panel.classList.remove('active');
    })
}