import MusicIcon from '../img/icon-music.svg';
import '../styles/CardText.css'

const CardText = () => {
  return (
    <div className="card-text">
      <div className="card-text-content">
        <p className="order-summary">Order Summary</p>

        <p className="order-description">
          You can now listen to millions of songs
          audiobooks and podcasts on any device anywhere
          you like!
        </p>
      </div>

      {/* Plan Details Section */}
      <div className="plan-details">
        <div className="plan-info">
          <img src={MusicIcon} alt="music-icon" className="music-icon" />
          <div>
            <p className="plan-title">Annual Plan</p>
            <p className="plan-price">$59.99/year</p>
          </div>
        </div>
        <a href="#" className="change-link">Change</a>
      </div>

      {/* Proceed to Payment Button */}
      <button className="proceed-button">
        Proceed to Payment
      </button>

      {/* Cancel Order Link */}
      <a href="#" className="cancel-link">
        Cancel Order
      </a>
    </div>
  );
}

export default CardText;
