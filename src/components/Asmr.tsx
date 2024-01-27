import { Tab, TabList, TabPanel, Tabs, type Key } from 'react-aria-components';
import AsmrInterface from './AsmrInterface';
import { type Dispatch } from 'react';
import ls from 'localstorage-slim';

interface AsmrProps {
  activeTab: Key;
  setActiveTab: Dispatch<React.SetStateAction<Key>>;
}

export default function Asmr({ activeTab, setActiveTab }: AsmrProps) {
  return (
    <Tabs
      selectedKey={activeTab}
      onSelectionChange={(val) => {
        setActiveTab(val);
        ls.set('activeTab', val);
      }}
    >
      <TabList
        aria-label="Asmr Tabs"
        className={`
        grid grid-cols-4 cursor-pointer rounded-t-2xl text-white
        mb-1 bg-black/75 text-xs sm:text-base
        `}
      >
        <Tab
          id="cafe"
          className={({ isFocusVisible }) => `
          ${activeTab === 'cafe' ? 'bg-zinc-50/90 text-black' : ''}
          ${!isFocusVisible ? 'outline-none' : ''}
          rounded-tl-2xl border-r border-b py-1
          `}
        >
          Cafe
        </Tab>

        <Tab
          id="beach"
          className={({ isFocusVisible }) => `
          border-r border-b py-1
          ${activeTab === 'beach' ? 'bg-zinc-50/90 text-black' : ''}
          ${!isFocusVisible ? 'outline-none' : ''}
          `}
        >
          Beach
        </Tab>

        <Tab
          id="garden"
          className={({ isFocusVisible }) => `
          border-r border-b py-1
          ${activeTab === 'garden' ? 'bg-zinc-50/90 text-black' : ''}
          ${!isFocusVisible ? 'outline-none' : ''}
          `}
        >
          Garden
        </Tab>

        <Tab
          id="forest"
          className={({ isFocusVisible }) => `
          ${activeTab === 'forest' ? 'bg-zinc-50/90 text-black' : ''}
          ${!isFocusVisible ? 'outline-none' : ''}
          rounded-tr-2xl border-b py-1
        `}
        >
          Forest
        </Tab>
      </TabList>
      <TabPanel id="cafe">
        <AsmrInterface name="cafe" />
      </TabPanel>
      <TabPanel id="beach">
        <AsmrInterface name="beach" />
      </TabPanel>
      <TabPanel id="garden">
        <AsmrInterface name="garden" />
      </TabPanel>
      <TabPanel id="forest">
        <AsmrInterface name="forest" />
      </TabPanel>
    </Tabs>
  );
}
