import "./App.css";
import copy from "./img/copy.svg";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

function App() {
  // základní nastavení aplikace při spuštění = výchozí hodnoty pro všechny proměnné v aplikaci.
  const [password, setPassword] = useState("Generate Password");
  const [criterias, setCriterias] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    length: 10,
  });

  // Funkce pro kopírování hesla do schránky po kliknutí na ikonu kopírovat
  function Copied() {
    navigator.clipboard.writeText(password);
  }

  // Funkce pro generování hesla
  // 1. Vytvoříme proměnnou str, která bude obsahovat všechny znaky, které může heslo obsahovat
  function Generate() {
    let str = "";
    // 2. Podle toho, jaké kritéria jsou zaškrtnuté, přidáme do proměnné str znaky
    // které může heslo obsahovat
    if (criterias.uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (criterias.lowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (criterias.numbers) str += "0123456789";
    if (criterias.symbols) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // 3. Vytvoříme proměnnou password, která bude obsahovat heslo
    let password = "";
    // 4. Vytvoříme cyklus, který se bude opakovat tolikrát, kolik má heslo znaků
    // a v každém cyklu vybere náhodný znak z proměnné str a přidá ho do hesla
    // popsání cyklu: https://www.w3schools.com/js/js_loop_for.asp
    for (let i = 0; i < criterias.length; i++) {
      // Math.floor(Math.random() * str.length) vybere náhodné číslo od 0 do délky proměnné str
      // str.charAt(Math.floor(Math.random() * str.length)) vybere znak z proměnné str na pozici náhodného čísla
      // password += str.charAt(Math.floor(Math.random() * str.length)); přidá znak do hesla
      // password += str.charAt(Math.floor(Math.random() * str.length)); se opakuje tolikrát, kolik má heslo znaků
      password += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(password);
  }

  return (
    <div className="App">
      <div className="w-full px-10 h-screen bg-[#121117]">
        <div className="flex  flex-col gap-4 items-center justify-center h-screen">
          <h1 className="text-[#55545C]  text-2xl ">Password Generator</h1>
          <div className="bg-[#24232B] px-7 flex items-center justify-between max-w-sm w-full h-16 ">
            <h1 className="w-max text-3xl text-[#55545C] truncate">
              {password}
            </h1>
            <img src={copy} onClick={Copied} alt="copy" />
          </div>
          <div className=" max-w-sm w-full h-auto py-5 px-7  bg-[#24232B]">
            <div className="w-full items-center justify-between flex  ">
              <h1 className=" w-max text-xl  text-white">Character Lenght</h1>
              <p className=" text-3xl text-[#A4FFAF]">{criterias.length}</p>
            </div>
            <div className="w-full h-10 mt-5">
              <RangeSlider
                id="range-slider"
                onInput={(e) => {
                  setCriterias({ ...criterias, length: e[1] });
                }}
                rangeSlideDisabled={true}
                defaultValue={[0, criterias.length]}
                thumbsDisabled={[true, false]}
              />
            </div>
            <div className="w-full flex-col text-left  text-white flex mt-14 ">
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) => {
                    setCriterias({ ...criterias, uppercase: e.target.checked });
                  }}
                  type="checkbox"
                  id="scales"
                  name="scales"
                />
                <h1>Include Uppercase Letters</h1>
              </div>
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) => {
                    setCriterias({ ...criterias, lowercase: e.target.checked });
                  }}
                  type="checkbox"
                  id="scales"
                  name="scales"
                />
                <h1>Include lowercase Letters</h1>
              </div>
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) => {
                    setCriterias({ ...criterias, numbers: e.target.checked });
                  }}
                  type="checkbox"
                  id="scales"
                  name="scales"
                />
                <h1>Include Numbers</h1>
              </div>
              <div className="flex items-center gap-3">
                <input
                  onChange={(e) => {
                    setCriterias({ ...criterias, symbols: e.target.checked });
                  }}
                  type="checkbox"
                  id="scales"
                  name="scales"
                />
                <h1>Include Symbols</h1>
              </div>
            </div>
            <button
              onClick={Generate}
              className=" w-full h-16 bg-[#A4FFAF] mt-10"
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
