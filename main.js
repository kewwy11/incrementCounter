const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const value = +counter.innerText

        const increment = target / 300
       
        if(value < target){
            counter.innerText = `${Math.ceil(value + increment)}`
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()
})