import { useRef, useState } from 'react';
import { Button } from './Button';
import VolumeSlider from './VolumeSlider';

export interface AudioControllerProps {
  source: string;
  name: string;
}

export default function AudioController({
  source,
  name,
}: AudioControllerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [value, setValue] = useState(50);

  if (audioRef.current) audioRef.current.volume = value / 100;

  return (
    <div className="grid gap-2">
      <audio src={source} data-name={name} loop ref={audioRef} />
      <Button
        className={`
        text-white border-2 rounded-full py-2
        text-xs sm:text-sm
      `}
      >
        {name}
      </Button>
      <VolumeSlider
        minValue={0}
        maxValue={100}
        defaultValue={50}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
