import { MouseEventHandler } from 'react';

export interface IButton {
  text: string;
  id: string;
  conditionalStyles?: React.CSSProperties;
  eventHandler?: MouseEventHandler<HTMLButtonElement>;
}
