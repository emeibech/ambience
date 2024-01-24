import './App.css';
import Asmr from './components/Asmr';

function App() {
  return (
    <div className="svh bg-[#111] grid grid-cols-1 grid-rows-[9fr_1fr]">
      <main className="flex justify-center items-end">
        <Asmr />
      </main>
      <footer
        className={`
         text-white opacity-75 text-sm flex justify-center items-end py-4
      `}
      >
        Copyright © 2024 emeibech asmr. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
