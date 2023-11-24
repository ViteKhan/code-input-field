import { ChangeEvent } from 'react';
import { CodeInput } from '../types/CodeInput.types.ts';

export const useCodeInputOnChange = (inputs: CodeInput[], codeLength: number, inputClass: string) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const entry = e.target.value;

    if (entry.length <= 1) {
      inputs[index].setValue(entry);

      if (entry.length === 1 && index < codeLength - 1) {
        const nextInput = document.querySelectorAll<HTMLInputElement>(`.${inputClass}`)[index + 1];

        if (nextInput && nextInput.value === '') {
          nextInput.focus();
        }
      } else if (entry.length === 0 && index > 0) {
        const prevInput = document.querySelectorAll<HTMLInputElement>(`.${inputClass}`)[index - 1];

        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  return onChange;
};