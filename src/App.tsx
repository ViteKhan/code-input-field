import { Button, Form } from 'antd';
import { CodeInputField } from './components/CodeInputField';

interface IFormValues {
  codes: string[];
}

function App() {
  const [form] = Form.useForm();

  const onFinish = (values: IFormValues) => {
    alert(values.codes);
  };

  return (
    <div className="App">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ codes: [] }}
        className="Form"
      >
        <h3>Enter the code that was sent to your phone</h3>
        <CodeInputField
          name="codes"
          codeLength={6}
          setFieldValue={form.setFieldValue}
        />
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App
