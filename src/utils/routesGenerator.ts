import { ReactNode } from "react";

// type TItem = {
//   name: string;
//   path?: string;
//   element?: ReactNode;
//   children?: TItem[];
// };

type TRoute = {
  path: string;
  element: ReactNode;
};

export const routesGenerator = (items: any[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item?.children) {
      item.children.forEach((child: any) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
