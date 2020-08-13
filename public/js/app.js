console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1= document.querySelector('#message-1');
const message2= document.querySelector('#message-2');
message1.textContent='Loading';
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                //console.log(data.error)
                message2.textContent=data.error
            } else {
                message2.textContent=data.location
                message2.textContent=data.forecast
                //console.log(data.location)
                //onsole.log(data.forecast)
            }
        })
    })
})