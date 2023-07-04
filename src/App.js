import "./App.css";
import copy from "./img/copy.svg";

function App() {
  return (  
    <div className="App">
      <div className="w-full h-full bg-[#121117]">
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-4 text-[#7F7D8B]">Password Generator</h1>
          <div className="w-96  mb-3 h-16 flex flex-row bg-[#24232B]">
            <p className="w-5/6 h-full text-[#55545C] mr-44 ">P44/5W0rD!</p>
            <img className="w-1/6  h-full" src={copy}></img>
          </div>

          <div className="w-96 h-96 flex flex-col bg-[#24232B]">
        <div className="flex flex-row mb-5">
          <p>Character Lenght</p>
          <p> 8</p>
          <div>Slider</div>
        </div>
        <div className="flex flex-col mb-5">
          <p>Include Uppercase Letters</p>
          <p>Include Lowercase Letters</p>
          <p>Include Numbers</p>
          <p>Include Symsolb</p>
        </div>
        <div className="flex flex-col">
          <btn>STRENGHT</btn>
          <btn>Generate</btn>

        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
