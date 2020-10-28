const myKey = 'acacc200e1559c7fa37b23c918faef10'
const body = document.querySelector('body');
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${myKey}&units=metric`
const input = document.createElement('input');
const form = document.querySelector('form');
const button = document.createElement('button');
const aboutCity = document.createElement('div');
const laikoJuosta = document.createElement('p');
button.textContent = 'Pateikti';
input.placeholder = 'enter city name';
button.classList.add('search');
input.classList.add('input');
form.classList.add('form');
aboutCity.classList.add('box');


form.appendChild(input);
form.appendChild(button);
body.appendChild(aboutCity);
body.appendChild(laikoJuosta);




function getCityData(cityName) {
    return fetch(`${url}&q=${cityName}`)
     .then((response) => {
         return response.json();
     })
     .then((json) => {
        if (typeof json.name === 'undefined') {
            myAlert();
        }
        else {
            if (array.indexOf(json.name) !== -1) {
                alert("This city already exists")
            }
            else {
                console.log(json);
                getCity(json);
                array.push(json.name);
            }
        }
    })
     .catch((error) => {
         console.log(error);
     })
 }
 
 function myAlert() {
    alert('Your city was not found, please check the spelling')
 }
 const array = []; 


 button.addEventListener('click', (e) => {

         return getCityData(input.value)
       }
 );
 const span = '';
 function getCity(data) {
    let dataBlyn = new Date().getTime();
    const d = new Date(dataBlyn);
    const d2 = d.toString();

   
    
      return aboutCity.innerHTML +=`
     <div class = 'div'>
     <h3> ${data.name}</h3>
     <main>
     <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>
     <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>
     <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>
     </main>
     <h3> Temperature: ${data.main.temp} °C</h3>
     <h3>Description:${data.weather[0].description}</h3>
     <h3> Humidity: ${data.main.humidity}%</h3>
     <h3>Retrieved on ${d2}</h3>
     <span onclick="bandymas(event)" class="x"></span>

     </div>`
      
     
     };

     function bandymas(event) {
        console.log(event.target.parentElement)
        event.target.parentElement.remove()
    }
     
    