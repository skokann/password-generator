import "./App.css";
import copy from "./img/copy.svg";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

function App() {
  // základní nastavení aplikace při spuštění = výchozí hodnoty pro všechny proměnné v aplikaci.
  const [password, setPassword] = useState("");
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
      <div className="w-full h-screen bg-[#121117]">
        <div className="container">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-[#55545C]  text-2xl mb-4">
              Password Generator
            </h1>
            <div className="bg-[#24232B] w-96 h-16 mb-4 flex ">
              <h1 className="w-full mt-5">henlo</h1>
              <img className="mr-5" src={copy} alt="copy" />
            </div>
            <div className=" w-96 h-96  bg-[#24232B]">
              <div className="w-full  flex mt-5 ">
                <h1 className="w-5/6 text-xl pr-28 text-white">
                  Character Lenght
                </h1>
                <p className="w-1/6 text-3xl text-[#A4FFAF]">0</p>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default App;
