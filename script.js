async function getWeather(){

    const city = document.getElementById("city").value;

    const apiKey = "ade5e5f95f83a183ba13e4a87982ef4e";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod == "404"){

            alert("City not found");

            return;
        }

        document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";

        document.getElementById("cityName").innerHTML =
        data.name;

        document.getElementById("condition").innerHTML =
        data.weather[0].main;

        document.getElementById("humidity").innerHTML =
        "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
        "Wind: " + data.wind.speed + " km/h";

        const weatherMain = data.weather[0].main;

        const weatherIcon =
        document.querySelector(".weather-icon");

        if(weatherMain == "Clouds"){

            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/414/414825.png";
        }

        else if(weatherMain == "Rain"){

            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
        }

        else if(weatherMain == "Clear"){

            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/869/869869.png";
        }

        else if(weatherMain == "Snow"){

            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/642/642102.png";
        }

        else if(weatherMain == "Thunderstorm"){

            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/1146/1146860.png";
        }

    }

    catch(error){

        alert("Error fetching weather");

        console.log(error);
    }
}