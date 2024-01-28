import type { Key } from 'react-aria-components';
import './App.css';
import Asmr from './components/Asmr';
import { useMemo, useState } from 'react';
import selectBg from './modules/selectBg';
import ls from 'localstorage-slim';

function App() {
  const defaultTab = useMemo(() => {
    const def = ls.get('activeTab');
    if (!def) ls.set('activeTab', 'cafe');
    return typeOfActiveTab(def) ? def : 'cafe';
  }, []);

  const [activeTab, setActiveTab] = useState<Key>(defaultTab);

  return (
    <div
      aria-label="Background image container"
      aria-description="This element is simply a container for background images"
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

function typeOfActiveTab(lsActiveTab: unknown): lsActiveTab is Key {
  return (
    (typeof lsActiveTab === 'string' && lsActiveTab === 'cafe') ||
    lsActiveTab === 'beach' ||
    lsActiveTab === 'garden' ||
    lsActiveTab === 'forest'
  );
}

export default App;
