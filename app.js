let input = document.querySelector(".city")
let button = document.querySelector(".search-btn")
let locationdiv = document.querySelector(".weather-container") 
let lastdiv = document.querySelector(".seacrh-city")


function searchapi(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=b63c65041a084f4892e121055241811&q=${input.value}&aqi=no`)

    .then(res => res.json())
    .then((res) =>{
    console.log(res);
lastdiv.classList.add("disab")
    
    locationdiv.innerHTML = `
     <div class="location-data-container">
                <div class="location">
                    <span class="material-symbols-outlined">
                        location_on
                        </span>

                        <h5>${res.location.country},${res.location.name}</h5>
                </div>
                <h5 class="current-data-txt rigular-txt">${new Date(res.location.localtime).toDateString()}</h5>
            </div>
             <div class="weather-summer">
             <img src="https:${res.current.condition.icon}" alt="" class="weather-img">
                 <div class="weather-summary-info">
                    <h1 class="temp-txt">${res.current.temp_c}℃</h1>
                    <h3 class="condition-txt rigular-txt">${res.current.wind_dir}</h3>
                </div>
            </div>
            
            <div class="weather-condition-container">
             <div class="condition-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"/></svg>
                    <div class="condition-info">
                        <h5 class="rigular-txt">Humidity</h5>
                        <h5 class="humidity-value-txt">${res.current.humidity} %</h5>
                    </div>
             </div>
              <div class="condition-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg>
                       <div class="condition-info">
                           <h5 class="rigular-txt">wind speed</h5>
                           <h5 class="humidity-value-txt">${res.current.wind_kph} M/s</h5>
                       </div>
                </div>
            </div>
            <div class="forecast-item-container">
                <div class="forecast-item">
                    <h5 class="forecast-item-data rigular-txt">05 Aug</h5>
                    <img src="transparent-weather-19.png" alt="">
                    <h5 class="forecast-item-temp">29 ℃</h5>
                </div>
                <div class="forecast-item">
                    <h5 class="forecast-item-data rigular-txt">05 Aug</h5>
                    <img src="transparent-weather-19.png" alt="">
                    <h5 class="forecast-item-temp">29 ℃</h5>
                </div>
                <div class="forecast-item">
                    <h5 class="forecast-item-data rigular-txt">05 Aug</h5>
                    <img src="transparent-weather-19.png" alt="">
                    <h5 class="forecast-item-temp">29 ℃</h5>
                </div>
                <div class="forecast-item">
                    <h5 class="forecast-item-data rigular-txt">05 Aug</h5>
                    <img src="transparent-weather-19.png" alt="">
                    <h5 class="forecast-item-temp">29 ℃</h5>
                </div>
            </div>
          `
    })
    .catch((err) =>{
        console.log(err);
lastdiv.classList.remove("disab")
locationdiv.classList.add("disab")        
    })
}


button.addEventListener("click", ()=>{
    searchapi()
})





























