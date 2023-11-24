import { FC } from 'react';
import { Form, Input } from 'antd';
import { useCodeInputOnChange } from '../hooks/useCodeInputOnChange';
import { useGenerateCodeInputs } from '../hooks/useGenerateCodeInputs';
import './CodeInputField.css';

interface CodeInputFieldProps {
  name: string;
  codeLength: number;
  setFieldValue: (name: (string | number)[], value: string) => void;
}

export const CodeInputField: FC<CodeInputFieldProps> = ({ codeLength, name, setFieldValue }) => {
  const inputs = useGenerateCodeInputs(codeLength);
  const onChange = useCodeInputOnChange(inputs, codeLength, 'codeInputField');

  return (
    <div className="codeInputFieldContainer">
      {inputs.map((input, i) => (
        <Form.Item key={i} name={[name, i]} initialValue="">
          <Input
            value={input.value}
            onChange={(e) => {
              onChange(e, i);
              setFieldValue([name, i], e.target.value);
            }}
            className="codeInputField"
            maxLength={1}
          />
        </Form.Item>
      ))}
    </div>
  );
};