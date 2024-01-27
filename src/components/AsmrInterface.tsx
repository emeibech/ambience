import { nanoid } from 'nanoid';
import AudioController from './AudioController';
import sounds, { type Audio } from '../modules/audios';

export type Name = 'cafe' | 'beach' | 'forest' | 'garden';

export interface AsmrProps {
  name: Name;
}

export default function Asmr({ name }: AsmrProps) {
  return (
    <div
      className={`
        max-w-[960px] min-w-[min(90vw,_640px)] p-4 sm:p-8 rounded-b-2xl
        backdrop-blur-[1px] backdrop-brightness-[0.33]
      `}
      data-name={name}
    >
      <div
        className={`
        grid gap-4 sm:gap-8
        grid-cols-[repeat(2,_minmax(120px,_1fr))]
        md:grid-cols-[repeat(3,_minmax(150px,_1fr))]
      `}
      >
        {generateAudios(sounds[name])}
      </div>
    </div>
  );
}

function generateAudios(audios: Audio[]) {
  const keys = audios.map(() => nanoid());
  return audios.map((audio, index) => {
    return (
      <AudioController key={keys[index]} source={audio.src} name={audio.name} />
    );
  });
}
