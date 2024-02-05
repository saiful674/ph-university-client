export type TError = {
  data: { message: string; success: boolean };
  status: number;
  stack: string;
};

export type TResponse = {
  data?: any;
  error?: TError;
};
