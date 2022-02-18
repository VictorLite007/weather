const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const date = new Date
const day = date.getDay()
const date1 = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()



document.querySelector('.btn').addEventListener('click', () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('.city_name').value},ukt&appid=2593974dc29f26ca9157642339010606`

    fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {

            document.querySelector('.city_name').innerHTML = data.name;
            console.log(data);
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273.15) + ' °deg'
            document.querySelector('.main').innerHTML = data.weather[0]['main']
            document.querySelector('.today').innerHTML = `${weekDays[day]} ${date1} ${monthNames[month]} ${year}`
        }).catch(function (error) {
            console.log(error);
        });

})

