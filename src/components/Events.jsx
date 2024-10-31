import Events1 from '../assets/events1.jpg';
import Events2 from '../assets/events2.jpg';
import Events3 from '../assets/events3.jpg';

function Events() {
  return (
    <div className="events__container" id="events">
      <h2>Events</h2>
      <div className="events__row">
        <div className="events__col">
          <img width="460" height="230" src={Events1} alt="" />
          <h3>Weddings</h3>
          <p>Celebrate love with the perfect soundtrack. Our team ensures every moment of your wedding is unforgettable.</p>
        </div>
        <div className="events__col">
          <img width="460" height="230" src={Events2} alt="" />
          <h3>Birthdays</h3>
          <p>Turn up the music and make your birthday party a night to remember with Saxo Jazz DJs.</p>
        </div>
        <div className="events__col">
          <img width="460" height="230" src={Events3} alt="" />
          <h3>Corporate Events</h3>
          <p>Professional, stylish, and engaging music services for all types of corporate gatherings.</p>
        </div>
      </div>
    </div>
  );
}
export default Events;
