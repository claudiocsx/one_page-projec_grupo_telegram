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

/*-----------------------------------*\
  #FAQS
\*-----------------------------------*/

const allItems = document.querySelectorAll('.faqs__data');
const allPlusBalls = document.querySelectorAll('.faqs__data-plusball');
const allMinusBalls = document.querySelectorAll('.faqs__data-minusball');

console.log(allMinusBalls)

allItems.forEach(item=>{
    console.log(item)
    item.addEventListener('click', event=>{
        event.currentTarget.classList.toggle('active')
    })
})

