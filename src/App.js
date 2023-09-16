import { useEffect, useState } from "react";
import ButtonOn from "./ButtonOn";
import ButtonOff from "./ButtonOff";

function App() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const switcher = setInterval(() => {
      setIsOn(!isOn);
      console.log("switching");
    },1000);
    return () => {
      clearInterval(switcher);
    };
  }, [isOn]);

  return (
    <div
      className="App"
      style={{ backgroundImage: `url('./img/${isOn ? "1" : "2"}.png')` }}
    >
      <ButtonOn isOn={isOn} />
      <ButtonOff isOn={isOn} />
    </div>
  );
}

export default App;
