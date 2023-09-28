import { useEffect, useState } from "react";
import ButtonOn from "./components/ButtonOn";
import ButtonOff from "./components/ButtonOff";
import Window from "./components/Window";
// THINGS I NEED TO HANDLE
// ROUTING TWO MAIN BUTTON TO DOWNLOAD RESUME AND GO TO OTHER PAGE
// GUESS I CAN HANDLE THE LAST ONE BY STATE MANAGMENT
// I need an object to hold
// image of web page
// a hexcode of website
// a link of the code if it is not private on my github
// make page responsive 
// SOME CONTACT WAYS LIKE EMAIL TELEGRAM ID OR ANYTHING ELSE
// THEN DEPLYING THE HAJI OF COURSE UPDATING THE RESUME IS NEEDED
function App() {
  const [isOn, setIsOn] = useState({ state: false });

  useEffect(() => {
    const switcher = setInterval(() => {
      setIsOn((prevIsOn) => !prevIsOn);
      console.log("switching");
    }, 1000);
    return () => {
      clearInterval(switcher);
    };
  }, []);

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

/* 
const hexCodes = ["#008148","#352F3A","#CFB3FD","#03D37C"]
  const [windows, setWindows] = useState([1, 0, 1, 0]);
  //making a random array of 0 and 1
  const randomArray = (n,hexCodes) => {
    let array = [];
    for (let i = 0; i < n; i++) {
      if (Math.random() > 0.5) {
        array.push(1);
      } else {
        array.push(0);
      }  
    }
    return array;
  };
  // launching a timer to call randomArray function
  useEffect(() => {
    const switcher = setInterval(() => {
      setWindows(randomArray(4));
    }, 1000);
    return () => {
      clearInterval(switcher);
    };
  }, []);

  
  return (
    <main>
      {windows.map((window,i) => (
        <Window window={window} color={hexCodes[i]} />
      ))}
    </main>
  );

 */
