import jazz from '../assets/sounds/cafe-jazz.mp3';
import lofi from '../assets/sounds/cafe-lofi.mp3';
import softChatter from '../assets/sounds/soft-chatter.mp3';
import bustle from '../assets/sounds/bustle.mp3';
import coffeeMachine from '../assets/sounds/coffee-machine.mp3';
import clinking from '../assets/sounds/clinking.mp3';
import gentleWaves from '../assets/sounds/gentle-waves.mp3';
import strongWaves from '../assets/sounds/strong-waves.mp3';
import splashes from '../assets/sounds/splashing-water.mp3';
import wind from '../assets/sounds/wind.mp3';
import campfire from '../assets/sounds/crackling-campfire.mp3';
import wading from '../assets/sounds/wading-in-the-water.mp3';
import rustling from '../assets/sounds/rustle.mp3';
import footfalls from '../assets/sounds/walking.mp3';
import drizzle from '../assets/sounds/drizzle.mp3';
import cricket from '../assets/sounds/cricket.mp3';
import forestBirds from '../assets/sounds/forest-birds.mp3';
import crow from '../assets/sounds/crow.mp3';
import shishiOdoshi from '../assets/sounds/shishiodoshi.mp3';
import chimes from '../assets/sounds/wooden-chimes.mp3';
import gardenBirds from '../assets/sounds/garden-birds.mp3';
import fish from '../assets/sounds/fish.mp3';
import bees from '../assets/sounds/bees.mp3';
import dragonfly from '../assets/sounds/dragonfly.mp3';

export type AudioName =
  | 'Coffee machine'
  | 'Clinking'
  | 'Soft chatter'
  | 'Bustle'
  | 'Jazz BGM'
  | 'Lofi BGM'
  | 'Gentle waves'
  | 'Strong waves'
  | 'Splashes'
  | 'Wind'
  | 'Campfire'
  | 'Wading'
  | 'Shishi-odoshi'
  | 'Chimes'
  | 'Garden birds'
  | 'Fish'
  | 'Bees'
  | 'Dragonfly'
  | 'Rustling'
  | 'Footfalls'
  | 'Drizzle'
  | 'Cricket'
  | 'Forest birds'
  | 'Crow';

export interface Audio {
  src: string;
  name: AudioName;
}

export const defaultVolumes = {
  'Coffee machine': 50,
  Clinking: 50,
  'Soft chatter': 50,
  Bustle: 50,
  'Jazz BGM': 50,
  'Lofi BGM': 50,
  'Gentle waves': 50,
  'Strong waves': 50,
  Splashes: 50,
  Wind: 50,
  Campfire: 50,
  Wading: 50,
  'Shishi-odoshi': 50,
  Chimes: 50,
  'Garden birds': 50,
  Fish: 50,
  Bees: 50,
  Dragonfly: 50,
  Rustling: 50,
  Footfalls: 50,
  Drizzle: 50,
  Cricket: 50,
  'Forest birds': 50,
  Crow: 50,
};

const sounds: {
  cafe: Audio[];
  beach: Audio[];
  forest: Audio[];
  garden: Audio[];
} = {
  cafe: [
    { src: coffeeMachine, name: 'Coffee machine' },
    { src: clinking, name: 'Clinking' },
    { src: softChatter, name: 'Soft chatter' },
    { src: bustle, name: 'Bustle' },
    { src: jazz, name: 'Jazz BGM' },
    { src: lofi, name: 'Lofi BGM' },
  ],
  beach: [
    { src: gentleWaves, name: 'Gentle waves' },
    { src: strongWaves, name: 'Strong waves' },
    { src: splashes, name: 'Splashes' },
    { src: wind, name: 'Wind' },
    { src: campfire, name: 'Campfire' },
    { src: wading, name: 'Wading' },
  ],
  garden: [
    { src: shishiOdoshi, name: 'Shishi-odoshi' },
    { src: chimes, name: 'Chimes' },
    { src: gardenBirds, name: 'Garden birds' },
    { src: fish, name: 'Fish' },
    { src: bees, name: 'Bees' },
    { src: dragonfly, name: 'Dragonfly' },
  ],
  forest: [
    { src: rustling, name: 'Rustling' },
    { src: footfalls, name: 'Footfalls' },
    { src: drizzle, name: 'Drizzle' },
    { src: cricket, name: 'Cricket' },
    { src: forestBirds, name: 'Forest birds' },
    { src: crow, name: 'Crow' },
  ],
};

export default sounds;
