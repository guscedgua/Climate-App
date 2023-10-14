import React from 'react';
import Alert from './components/alert.jsx';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import style from './components/App.module.css';

const apiKey = "73596cc383719de37ff140c2d4476568";


function App() {

const [cities, setCities] = React.useState([]);


function onSearch(ciudad) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  .then(r => r.json())
  .then((recurso) => {
   if(recurso.main !== undefined){
    const ciudad = {
      min: Math.round(recurso.main.temp_min),
      max: Math.round(recurso.main.temp_max),
      img: recurso.weather[0].icon,
      id: recurso.id,
      wind: recurso.wind.speed,
      temp: recurso.main.temp,
      name: recurso.name,
      weather: recurso.weather[0].main,
      clouds: recurso.clouds.all,
      latitud: recurso.coord.lat,
      longitud: recurso.coord.lon,
    };


     const exist = cities.find((c) => c.id === ciudad.id)
     if (!exist) {
    setCities((oldCities) => {
    return [...oldCities, ciudad];
    });
  }
   } else {
    alert("City not found.");
     }
  });
}

function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id !== id));
}


  return (

    <div className="App">
    <div className="container">
    <div className="row">
    <SearchBar onSearch={(ciudad) => onSearch(ciudad)}/>
    </div>
      

    <main className={style.main}>
    <section className={style.mainCity}>


        {cities.length ? (
        <Card
          max={cities[cities.length - 1].max}
          min={cities[cities.length - 1].min}
          name={cities[cities.length - 1].name}
          img={cities[cities.length - 1].img}
          main={true}
          />
          ) : (<span></span>)}
          </section>
<section className={style.reelCities}>
<Cards cities={cities} onClose={onClose} />
</section>
</main>
    <div className="row">
    <Alert/>
    </div>
</div>
</div>
);
}

export default App;
