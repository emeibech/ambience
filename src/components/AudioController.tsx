import { useMemo, useRef, useState } from 'react';
import ls from 'localstorage-slim';
import { Button } from './Button';
import VolumeSlider from './VolumeSlider';
import { defaultVolumes } from '../modules/audios';
import type { AudioName } from '../modules/audios';

ls.config.encrypt = true;

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

  const defaultValues = useMemo(() => {
    const def = ls.get('defaultVolumes');

    if (!def) ls.set('defaultVolumes', defaultVolumes);

    if (instanceOfDefaultValues(def)) setValue(def[name]);

    return instanceOfDefaultValues(def) ? def : defaultVolumes;
  }, [name]);

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
        defaultValue={defaultValues[name] ?? 50}
        value={value}
        onChange={(val) => {
          setValue(val);
          const defaultValues = ls.get('defaultVolumes');
          if (instanceOfDefaultValues(defaultValues)) {
            ls.set('defaultVolumes', { ...defaultValues, [name]: val });
          }
        }}
      />
    </div>
  );
}

function instanceOfDefaultValues(
  object: unknown,
): object is typeof defaultVolumes {
  return (
    typeof object === 'object' &&
    object !== null &&
    'Coffee machine' in object &&
    'Gentle waves' in object &&
    'Shishi-odoshi' in object &&
    'Rustling' in object
  );
}
