import { Dispatch } from 'react';
import AudioController from './AudioController';

export type Name = 'cafe' | 'beach' | 'forest' | 'garden';

export interface AsmrProps {
  name: Name;
  setActiveTab: Dispatch<React.SetStateAction<Name>>;
}

// const audio = {
//   cafe: {
//     src: 'src',
//     name: 'name'
//   }
// }

export default function Asmr({ name }: AsmrProps) {
  return (
    <div className="border max-w-[960px] h-[200px]" data-name={name}>
      <div>
        <AudioController source="src" name="name" />
      </div>
      <div></div>
    </div>
  );
}
