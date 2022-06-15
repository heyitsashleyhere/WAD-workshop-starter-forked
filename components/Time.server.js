import moment from "moment";
import "moment-timezone"

const Time = () => {
  const date = new Date()
  const time = moment(date)
  const timeInAmsterdam = time.tz("Europe/Amsteram").format("hh:mm:ss")

  return <p id={"time"}>{timeInAmsterdam}</p>;
};

export default Time;
