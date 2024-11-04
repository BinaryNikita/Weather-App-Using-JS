const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click',() =>{
  
    const APIKey = '90a8ff92bc7c92c32b2b76ffb3b076e5';
    const city = document.getElementById('search-btn').value;
    if(city==''){
        return ;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
    
    if(json.cod == '404'){
        container.style.height = '450px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error404.classList.add('active');
        return;
    }

    container.style.height = '560px';
    weatherBox.classList.add('active');
    weatherDetails.classList.add('active');
    error404.classList.remove('active');

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=';
                break;
            case 'Rain':
                image.src = 'https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=-new.png';
                break;
            case 'Snow':
                image.src = 'https://media.istockphoto.com/id/863513024/photo/winter-scene-snowfall-on-the-blurred-background.jpg?s=612x612&w=0&k=20&c=piIhc2R6dExYQ5X_7CnpPhJk8rCB7itK-PQ0pgsCai4=';
                break;
            case 'Clouds':
                image.src = 'https://media.istockphoto.com/id/962500712/video/4k-tl-cloudy-sky-with-sun-rays.jpg?s=640x640&k=20&c=XQrz-Y4FIzovVlayePLhPZpHoM8-iLN7gZ_uSdnoe-8=';
                break; 
            case 'Mist':
                image.src = 'https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.jpg?s=612x612&w=0&k=20&c=UQ4ZHZk0H_c75Vy9Wv5VaXn00obvPT98LMTOvjXZOWc=-new.png';
                break;                  
            case 'Haze':
                image.src = 'https://media.istockphoto.com/id/57423616/photo/woman-walking-through-park.jpg?s=612x612&w=0&k=20&c=HR-DK8jMricqFtYXAVejJXTpqv6ZVhxeO87Fh2oIo-A=';
                break;     
            default:
                image.src = 'https://media.istockphoto.com/id/182175143/photo/photo-of-some-white-whispy-clouds-and-blue-sky-cloudscape.jpg?s=612x612&w=0&k=20&c=4pM1uET260cVlZooulBBBjST9Cx-uzKwBNNYyn3AN_k=';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });

});
