import { Col, Flex, Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
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
  const methods = useForm(formConfig);

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <FormProvider {...methods}>
          <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
            {children}
          </Form>
        </FormProvider>
      </Col>
    </Flex>
  );
};

export default PhForm;
