
import Illustration from '../img/illustration-hero.svg';
import CardText from './CardText';
import '../styles/Card.css';

const Card = ()=>{
    return(
        <div className='card'>
            <div>
              <img src={Illustration} className='image'></img>
            </div>
    
            <CardText/>
          </div>
    )
}

export default Card;