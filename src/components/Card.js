
import Illustration from '../img/illustration-hero.svg';
import CardText from './CardText';

const Card = ()=>{
    return(
        <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            width: '400px'
          }}>
            <div>
              <img src={Illustration} style={{
                width: '400px',
                borderTopRightRadius: '20px',
                borderTopLeftRadius: '20px'
              }}></img>
            </div>
    
            <CardText/>
          </div>
    )
}

export default Card;