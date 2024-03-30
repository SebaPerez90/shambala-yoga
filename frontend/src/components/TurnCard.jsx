import { useState } from "react";
import { myTurns } from "../helpers/myTurns";
import '../styles/myTurns.css'

const TurnCard = () => {
  // eslint-disable-next-line no-unused-vars
  const [turns, setTurns] = useState(myTurns);

  return (
    <>
      {turns.map((item) => (
        <div className="turn-card" key={item.id}>
          <span>{item.description}</span>
          <span>{item.status}</span>
          <time>{item.date}</time>
          <span>{item.time}</span>
        </div>
      ))}
    </>
  );
};

export default TurnCard;
