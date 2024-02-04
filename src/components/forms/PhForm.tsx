import { Col, Flex, Form } from "antd";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TPhFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
};

const PhForm = ({ onSubmit, children }: TPhFormProps) => {
  const methods = useForm();

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
