const tables = document.querySelectorAll('.packge__table')


 tables[1].classList.add('packge__table--dark')

 function activeBlackMode(index) {
    tables.forEach((table) => {
        table.classList.remove('packge__table--dark')
    })
    tables[index].classList.add('packge__table--dark')
}


tables.forEach((item, index) =>{
    item.addEventListener('mouseover', function() {
        activeBlackMode(index)
    })
    
})