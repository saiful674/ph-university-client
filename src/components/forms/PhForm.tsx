import { Col, Flex, Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TPhFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
} & TFormConfig;

const PhForm = ({
  onSubmit,
  children,
  resolver,
  defaultValues,
}: TPhFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  console.log(defaultValues);
  const methods = useForm(formConfig);
  const submit: SubmitHandler<FieldValues> = (data) => {
    methods.reset();
    onSubmit(data);
  };
  return (
    <Flex align="center" justify="center">
      <Col span={24}>
        <FormProvider {...methods}>
          <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
            {children}
          </Form>
        </FormProvider>
      </Col>
    </Flex>
  );
};

export default PhForm;
