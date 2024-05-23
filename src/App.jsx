import "./App.css";
import Countdown from "react-countdown";

const Completionist = () => <span>Time Finish!! You are good to go!</span>;
console.log(new Date("09-07-2024"));
function App() {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-red-500 flex flex-col items-center justify-center px-5 py-5">
        <div className="item-start mb-10 font-extralight text-yellow-100">
          ILY CYNTHIA ❤️
        </div>

        <div className="text-red-100">
          <h1 className="text-3xl text-center mb-3 font-extralight">
            When will we meet again?
          </h1>
          <div className="text-6xl text-center flex w-full items-center justify-center">
            <div className="text-2xl mr-1 font-extralight">in</div>
            <div className="w-600 mx-1 p-2 bg-white text-red-500 rounded-lg">
              <div className="font-mono leading-none">
                <Countdown date={new Date("09-07-2024")}>
                  <Completionist />
                </Countdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
