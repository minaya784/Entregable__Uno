import { useState } from "react";
import Phase from "./components/Phases/Phase";
import frameworks from "./assets/data.json";
import { getRandomNumber } from "./utils/getRandomNumber";

function App() {
  const [indexPhrase, setIndexPhrase] = useState(
    getRandomNumber(0, frameworks.length - 1)
  );

  const changePhrase = () => {
    const newIndex = getRandomNumber(0, frameworks.length - 1);

    setIndexPhrase(newIndex);
  };

  return (
    <>
      <div className="App" >
        <Phase
          dataPhrase={frameworks[indexPhrase]}
          changePhrase={changePhrase}
        />
      </div>
    </>
  );
}

export default App;
