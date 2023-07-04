import "./App.css";
import copy from "./img/copy.svg";

function App() {
  return (
    <div className="App">
      <div className="w-full h-screen bg-[#121117]">
        <div className="container">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-[#55545C]  text-2xl mb-4">
              Password Generatorr
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
