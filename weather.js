const apikey = '2e79be0bd4f593a48e522169072dfe5e'

var search = document.querySelector('.search')
search.addEventListener('click', function(){
    var city = document.querySelector('.input_data').value

// Define the API URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'+'&q='+city+'&appid='+apikey;

// Fetch data from the API
                    // fetch(apiUrl)
                    //   .then(response => {
                    //     // Check if the response is successful
                    //     if (!response.ok) {
                    //       throw new Error('Network response was not ok');
                    //     }
                    //     // Parse the JSON data from the response
                    //     return response.json();
                    //   })
                    //   .then(data => {
                    //     // Work with the retrieved data
                    //     console.log(data)
                    //     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
                    //     document.querySelector('.humidityValue').innerHTML = data.main.humidity + '%'
                    //     document.querySelector('.windspeedValue').innerHTML = data.wind.speed + 'km/h'
                    //     var img_name = data.weather[0].main
                    //     document.querySelector('.weather_img').setAttribute('src', "./images/"+img_name+".png")
                    //     document.querySelector('.city_name').innerHTML = data.name
                    //   })
                    //   .catch(error => {
                    //     // Handle errors
                    //     alert('City not found')
                    //     console.error('There was a problem with the fetch operation:', error);
                    //   });



async function fetchData() {
  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Now you can use the 'data' variable outside of the fetch
      console.log(data)
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
      document.querySelector('.humidityValue').innerHTML = data.main.humidity + '%'
      document.querySelector('.windspeedValue').innerHTML = data.wind.speed + 'km/h'
      var img_name = data.weather[0].main
      document.querySelector('.weather_img').setAttribute('src', "./images/"+img_name+".png")
      document.querySelector('.city_name').innerHTML = data.name
  } 
  catch (error) {
      alert('City not found')
      console.error('Error fetching data:', error);
  }
}


    });