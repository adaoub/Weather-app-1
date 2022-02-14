import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCloud, faBolt , faCloudRain, faSmog, faSnowman, faSun} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function Scard({temperature, city, sunrise, sunset, humidity, icon}) {
  let weatherIcons = null;
  if (icon === 'Haze') {
    weatherIcons = <FontAwesomeIcon icon={faSmog} size="2xl" color="#212121" />
  }
  else if (icon === 'Thunderstorm') {
    weatherIcons = <FontAwesomeIcon icon={faBolt} size="2xl" color="#212121" />
  }
  else if (icon === 'Drizzle') {
    weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="2xl" color="#212121" />
  }
  else if (icon === 'Rain') {
    weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="2xl" color="#212121" />
  }
  else if (icon === 'Snow') {
    weatherIcons = <FontAwesomeIcon icon={faSnowman} size="2xl" color="#212121" />
  }
  else if (icon === 'Mist') {
    weatherIcons = <FontAwesomeIcon icon={faSmog} size="2xl" color="#212121" />
  }
  else if (icon === 'Clear') {
    weatherIcons = <FontAwesomeIcon icon={faSun} size="2xl" color="#212121" />
  }
  else if (icon === 'Clouds') {
    weatherIcons = <FontAwesomeIcon icon={faCloud} size="2xl" color="#212121" />
  }
  return (
    <div>
      <Card bg= "light" border = "dark" style={{ width: '18rem' , color: 'green' }}>

  <Card.Body className = "Weather-card">
    <Card.Title>{city}</Card.Title>   
    <h6 className= "date"> {moment().format('MMMM Do YYYY, h:mm a')}</h6>
    <div className = "icon-container">{weatherIcons} </div>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><b>Temperature</b> : {Math.floor(temperature)}℃ </ListGroupItem>
    <ListGroupItem><b>Humidity</b>: {humidity}%</ListGroupItem>
    <ListGroupItem><b>Sunrise</b>: {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</ListGroupItem>
    <ListGroupItem><b>Sunset</b>: {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</ListGroupItem>
  </ListGroup>
  
</Card>
      

    </div>
  );
}


export default Scard;