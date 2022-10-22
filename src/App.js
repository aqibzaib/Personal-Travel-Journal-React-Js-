import "./App.css";
import Card from "./Card";
import { array } from "./data";

const display_data = array.map(function (items) {
  return (
    // method one:
    <Card
      // imgUrl={items.imgUrl}
      // imgTitel={items.imgTitel}
      // titel={items.titel}
      // location={items.location}
      // googleMapLink={items.googleMapLink}
      // startDate={items.startDate}
      // endDate={items.endDate}
      // discription={items.discription}

      //Second Method and it is more usefull:
      {...items}
    />
  );
});

function App() {
  return (
    <div className="App">
      {display_data}
      {/* <Card /> */}
    </div>
  );
}

export default App;
