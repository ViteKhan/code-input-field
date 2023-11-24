import { Dispatch, SetStateAction } from 'react';

export interface CodeInput {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
