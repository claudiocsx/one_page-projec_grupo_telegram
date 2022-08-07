const tables = document.querySelectorAll('.package__table')


 tables[1].classList.add('package__table--dark')

 function activeBlackMode(index) {
    tables.forEach((table) => {
        table.classList.remove('package__table--dark')
    })
    tables[index].classList.add('package__table--dark')
}


tables.forEach((item, index) =>{
    item.addEventListener('mouseover', function() {
        activeBlackMode(index)
    })
    
})