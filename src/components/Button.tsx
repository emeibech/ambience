import { type AriaButtonProps, useButton } from '@react-aria/button';
import { useHover, useFocusVisible } from '@react-aria/interactions';
import { useRef } from 'react';

/* why this? because css pseudoclasses doesn't have consistent behavior
across different browsers. react-aria interaction hooks solves it. */
interface ButtonProps extends AriaButtonProps {
  hoverStyle?: string | undefined;
  pressedStyle?: string | undefined;
}

export function Button(props: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { hoverProps, isHovered } = useHover({});
  const { isFocusVisible } = useFocusVisible();
  const { children, hoverStyle, pressedStyle } = props;

  return (
    <button
      {...buttonProps}
      {...hoverProps}
      ref={ref}
      className={`
      ${!isFocusVisible ? 'outline-none' : ''}
      ${isHovered ? hoverStyle : ''}
      ${isPressed ? pressedStyle : ''}
      px-4 py-2
    `}
    >
      {children}
    </button>
  );
}
