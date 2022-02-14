import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardGroup from 'react-bootstrap/CardGroup'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faBolt , faCloudRain, faSmog, faSnowman, faSun} from '@fortawesome/free-solid-svg-icons'


function Day({forecast, dicon}){
    let weatherDicons = null;
    if (dicon === 'Haze') {
      weatherDicons = <FontAwesomeIcon icon={faSmog} size="2xl" color="#212121" />
    }
    else if (dicon === 'Thunderstorm') {
      weatherDicons = <FontAwesomeIcon icon={faBolt} size="2xl" color="#212121" />
    }
    else if (dicon === 'Drizzle') {
      weatherDicons = <FontAwesomeIcon icon={faCloudRain} size="2xl" color="#212121" />
    }
    else if (dicon === 'Rain') {
      weatherDicons = <FontAwesomeIcon icon={faCloudRain} size="2xl" color="#212121" />
    }
    else if (dicon === 'Snow') {
      weatherDicons = <FontAwesomeIcon icon={faSnowman} size="2xl" color="#212121" />
    }
    else if (dicon === 'Mist') {
      weatherDicons = <FontAwesomeIcon icon={faSmog} size="2xl" color="#212121" />
    }
    else if (dicon === 'Clear') {
      weatherDicons = <FontAwesomeIcon icon={faSun} size="2xl" color="#212121" />
    }
    else if (dicon === 'Clouds') {
      weatherDicons = <FontAwesomeIcon icon={faCloud} size="2xl" color="#212121" />
    }

  return (
    <div className ="col-sm">
        <CardGroup>
            {forecast.map((data)=>{
                return(
                    <Card bg= "light" border = "dark" style={{ width: '18rem' , color: 'green' }}>
                    <Card.Body className = "Weather-card-daily">
                      <Card.Title> {moment.unix(data.dt).format("ll")}</Card.Title>
        <Card.Title>{(Math.round(data.temp.max+ data.temp.min/2))}℃</Card.Title>   
        <h6 className= "description"> {data.weather[0].description} </h6>
        <div className = "icon-container-daily"> {weatherDicons} </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroupItem>{data.humidity}%</ListGroupItem>
        <ListGroupItem>Pressure: {data.pressure} hPa</ListGroupItem>
        <ListGroupItem>Sunrise: {new Date(data.sunrise * 1000).toLocaleTimeString('en-IN')}</ListGroupItem>
        <ListGroupItem>Sunset: {new Date(data.sunset * 1000).toLocaleTimeString('en-IN')}</ListGroupItem>
        </ListGroup>
                </Card>
                )
            })}
            </CardGroup>

        

        
    </div>

    
  )
}


export default Day;