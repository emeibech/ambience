import { type AriaButtonProps, useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

/* why this? because css pseudoclasses doesn't have consistent behavior
across different browsers. react-aria interaction hooks solves it. */
interface ButtonProps extends AriaButtonProps {
  className?: string | undefined;
  hoverStyle?: string | undefined;
  pressedStyle?: string | undefined;
}

export function Button(props: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { hoverProps, isHovered } = useHover({});
  const { isFocusVisible, focusProps } = useFocusRing();
  const { children, hoverStyle, pressedStyle, className } = props;
  const mergedProps = mergeProps(buttonProps, hoverProps, focusProps);

  return (
    <button
      {...mergedProps}
      ref={ref}
      className={`
      ${!isFocusVisible ? 'outline-none' : ''}
      ${isHovered ? hoverStyle : ''}
      ${isPressed ? pressedStyle : ''}
      ${className ? className : 'px-4 py-2'}
    `}
    >
      {children}
    </button>
  );
}
