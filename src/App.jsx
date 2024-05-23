import "./App.css";
import Countdown from "react-countdown";
function App() {
  return (
    <div>
      <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-yellow-100 md:text-4xl lg:text-5xl">
            ILY CYNTHIA ❤️
          </div>
        </div>
        <div className="text-red-100">
          <h1 className="text-2xl text-center mb-4 font-extralight sm:text-3xl md:text-4xl">
            When will we meet again?
          </h1>
          <div className="flex w-full items-center justify-center">
            <div className="text-xl mr-2 font-extralight sm:text-2xl md:text-3xl">
              in
            </div>
            <div className="w-auto mx-1 p-2 bg-white text-red-500 rounded-lg sm:p-3 md:p-4">
              <div className="font-mono leading-none">
                <Countdown date={"2024-09-06T00:00:00"}></Countdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
