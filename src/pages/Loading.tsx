import { Skeleton } from "antd";

const Loading = () => {
  return (
    <>
      <Skeleton avatar paragraph={{ rows: 4 }} />
      <Skeleton avatar paragraph={{ rows: 4 }} />
    </>
  );
};

export default Loading;
