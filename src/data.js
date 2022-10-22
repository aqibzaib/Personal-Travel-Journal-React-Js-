import "./mountfuji.jpg";
import "./Geirangerfjord.jpg";
import "./Sydney Opera House.jpg";
import "./mountain.jpg";
import "./river.jpg";
import mountain from "./mountain.jpg";

// Getting the current date
const date = new Date();
const startDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
// Getting the random date and month
function datee() {
  return Math.floor(Math.random() * (14 - 0 + 1)) + 0;
}
function month() {
  return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}
//Getting the random date
const endDate = `${date.getDate() + datee()}-${
  date.getMonth() + month()
}-${date.getFullYear()}`;

export const array = [
  {
    imgUrl: require("./mountfuji.jpg"),
    imgTitel: "Image",
    titel: "Mount Fuji",
    location: "JAPAN",
    googleMapLink: "",
    startDate: startDate,
    endDate: endDate,
    discription:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    imgUrl: require("./Geirangerfjord.jpg"),
    imgTitel: "image",
    titel: "Sydney Opera House",
    location: "AUSTRALIA",
    googleMapLink: "",
    startDate: startDate,
    endDate: endDate,
    discription:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
  },
  {
    imgUrl: require("./Sydney Opera House.jpg"),
    imgTitel: "image",
    titel: "Geirangerfjord",
    location: "NORWAY",
    googleMapLink: "",
    startDate: startDate,
    endDate: endDate,
    discription:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
  {
    imgUrl: require("./mountain.jpg"),
    imgTitel: "Moutain",
    titel: "Sharda Nuleem Valley",
    location: "Azad Kashmir",
    googleMapLink: "",
    startDate: startDate,
    endDate: endDate,
    discription:
      "Sharada Peeth is a ruined Hindu temple and ancient centre of learning located in Pakistan administered Kashmir. Between the 6th and 12th centuries CE.",
  },
  {
    // imgUrl:'',
    // imgTitel:'',
    // titel:'',
    // location: '',
    // googleMapLink:'',
    // startDate:startDate,
    // endDate:endDate,
    // discription:''
    imgUrl: require("./river.jpg"),
    imgTitel: "River",
    titel: "Karan Neelum Valley",
    location: "Azad Kashmir",
    googleMapLink: "",
    startDate: startDate,
    endDate: endDate,
    discription:
      "Sharada Peeth is a ruined Hindu temple and ancient centre of learning located in Pakistan administered Kashmir. Between the 6th and 12th centuries CE.",
  },
];
