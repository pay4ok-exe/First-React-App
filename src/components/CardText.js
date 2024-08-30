import MusicIcon from '../img/icon-music.svg';

const CardText = ()=>{
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft: '30px',
            paddingRight: '30px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <p style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: 'center',
                paddingTop: '20px',
                marginBottom: '5px'
              }}>Order Summary</p>
    
              <p style={{
                fontSize: 16,
                color: 'gray',
                textAlign: 'center'
              }}>
                You can now listen to millions of songs
                audiobooks and podcasts on any device anywhere
                you like!
              </p>
            </div>
    
    
            {/* Plan Details Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F8F9FD',
                // padding: '15px',
                paddingLeft: '5px',
                paddingRight: '5px',
                marginBottom: '20px',
                borderRadius: '20px',
                marginTop: '20px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={MusicIcon} alt="music-icon" style={{ marginRight: '15px', marginLeft: '10px' }} />
                    <div>
                        <p style={{
                            fontWeight: 600,
                            margin: '10px 0px 0px 0px',
                            // marginBottom: '0px',
                            // marginTop: '10px'
                        }}>Annual Plan</p>
                        <p style={{
                            margin: '5px 0px 10px 0px',
                            color: 'gray',
                            fontSize: '14px'
                        }}>$59.99/year</p>
                    </div>
                </div>
                <a href="#" style={{
                    color: '#372cd6',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    fontSize: '14px',
                    paddingRight: '15px'
                }}>Change</a>
            </div>

            {/* Proceed to Payment Button */}
            <button style={{
                backgroundColor: '#372cd6',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '15px 0px 15px 0px',
                border: 'none',
                borderRadius: '10px',
                marginTop: '20px',
                cursor: 'pointer',
                marginBottom: '20px',
                boxShadow: '0 20px 10px #e4e2fe'  // Adding shadow
            }}>
                Proceed to Payment
            </button>

            {/* Cancel Order Link */}
            <a href="#" style={{
                color: 'gray',
                textAlign: 'center',
                marginTop: '15px',
                marginBottom: '30px',
                fontWeight: 400,
                fontWeight: 'bold'
            }}>
                Cancel Order
            </a>
          </div>
    );
}

export default CardText;