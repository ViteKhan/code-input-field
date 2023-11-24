import { useState } from 'react';
import { CodeInput } from '../types/CodeInput.types.ts';

export const useGenerateCodeInputs = (codeLength: number) => {
  const inputs: CodeInput[] = [];

  for (let i = 0; i < codeLength; i++) {
    const [value, setValue] = useState<string>('');
    inputs.push({ value, setValue });
  }

  return inputs;
};