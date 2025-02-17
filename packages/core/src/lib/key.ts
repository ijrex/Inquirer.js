type KeypressEvent = {
  name: string;
  ctrl: boolean;
};

export const isUpKey = (key: KeypressEvent): boolean =>
  key.name === 'up' || key.name === 'k' || (key.name === 'p' && key.ctrl);

export const isDownKey = (key: KeypressEvent): boolean =>
  key.name === 'down' || key.name === 'j' || (key.name === 'n' && key.ctrl);

export const isSpaceKey = (key: KeypressEvent): boolean => key.name === 'space';

export const isBackspaceKey = (key: KeypressEvent): boolean => key.name === 'backspace';

export const isNumberKey = (key: KeypressEvent): boolean =>
  '123456789'.includes(key.name);

export const isEnterKey = (key: KeypressEvent): boolean =>
  key.name === 'enter' || key.name === 'return';
