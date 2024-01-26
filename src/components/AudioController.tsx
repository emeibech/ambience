import { useRef, useState } from 'react';
import { Button } from './Button';
import VolumeSlider from './VolumeSlider';
import type { AudioName } from '../modules/audios';

export interface AudioControllerProps {
  source: string;
  name: AudioName;
}

export default function AudioController({
  source,
  name,
}: AudioControllerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [value, setValue] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);

  if (audioRef.current) audioRef.current.volume = value / 100;

  return (
    <div className="grid gap-2">
      <audio src={source} data-name={name} loop ref={audioRef} />

      <Button
        type="button"
        hoverStyle="scale-[103%]"
        className={`
        ${isPlaying ? 'text-black bg-zinc-200' : 'text-white'}
        rounded-xl py-2 border-zinc-200 border-2
        text-xs xs:text-sm sm:text-lg transition-colors duration-200 ease-out
      `}
        onPress={() => {
          if (!audioRef.current) return;

          if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
          } else {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }}
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
