import type { Key } from 'react-aria-components';
import './App.css';
import Asmr from './components/Asmr';
import { useState } from 'react';
import selectBg from './modules/selectBg';

function App() {
  const [activeTab, setActiveTab] = useState<Key>('cafe');

  return (
    <div
      className={`
      svh grid grid-cols-1 grid-rows-[12fr_1fr] bg-image
      ${selectBg(activeTab)} backdrop-blur-3xl
    `}
    >
      <main className="flex justify-center items-end">
        <Asmr activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  );
}

export default App;
