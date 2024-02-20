import axios from "axios";

export default axios.create({
  baseURL: "https://worchitui.worchit.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});