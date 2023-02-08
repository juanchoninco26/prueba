import {useEffect,useState} from 'react';
import {apiClima} from '../../api/apiNoticias';
import './Tiempo.css'

function Tiempo() {
    const [clima, setCLlima] = useState([]);
    const [lugar, setlugar] = useState([]);
    const [lat, setLat] = useState([]);
    const [imagen, setImagen] = useState([]);

    useEffect(()=>{
        const key='d7469c3993f8099a8ff4fea6add51e8b';
        apiClima(`https://api.openweathermap.org/data/2.5/weather?q=Bogota&appid=${key}`)
        .then((data)=>{
            const datoClima=data.main;
            const datoCiudad=data.name;
            const lat=data.coord;
            const imagen=data.weather;
            

            setCLlima(datoClima)
            setlugar(datoCiudad)
            setLat(lat)
            setImagen(imagen)
            console.log(imagen)
        })
    },[])
    const rutaImagen=`https://openweathermap.org/img/wn/04d@2x.png`;
    return(
        <section className='targeta'>
            <div className='container-targeta'>
                <div className='container-img'>
                    <div>
                        <h4>Ciudad: {lugar} / COL</h4>
                    </div>
                    <div className='imagen'>
                        <img className='imagen' src={rutaImagen} />
                    </div>
                    <div>
                        <p>Coordenadas: Lat {lat.lat} / Long {lat.lon} </p>
                    </div>
                </div>
                <div className='container-text'>
                    <h1>{clima.temp}F</h1>
                    <p>Temperatura maxima: {clima.temp_max}</p>
                    <p>Temperatura minima: {clima.temp_min}</p>
                    <p>Humedad: {clima.humidity}</p>
                    <p></p>
                </div>
            </div>
        </section>
    );
}
export default Tiempo