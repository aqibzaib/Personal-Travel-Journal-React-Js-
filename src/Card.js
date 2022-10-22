import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  return (
    <div className="main">
      <div className="main--left">
        <img src={props.imgUrl} alt={props.imgTitel} width="200px" />
      </div>
      <div className="main--right">
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <span className="text">{props.location}</span>
          <span className="map--location">View on Google Maps</span>
        </div>
        <h1 className="place">{props.titel}</h1>
        <span className="startdate">{props.startDate}</span>{" "}
        <span className="enddate">{props.endDate}</span>
        <p className="discripton">{props.discription}</p>
      </div>
    </div>
  );
}
