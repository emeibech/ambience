import type { Key } from 'react-aria-components';

export default function selectBg(activeTab: Key) {
  switch (activeTab) {
    case 'cafe':
      return 'bg-cafe';
    case 'beach':
      return 'bg-beach';
    case 'garden':
      return 'bg-garden';
    case 'forest':
      return 'bg-forest';
  }
}
