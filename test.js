
const adminPaths = [
    {
      name: "Dashboard",
      path: "dashboard",
      element:"Hello",
    },
    {
      name: "User Management",
      children: [
        {
          name: "Create Faculty",
          path: "create-faculty",
          element:"Hello",
        },
        {
          name: "Create Student",
          path: "create-student",
          element:"Hello",
        },
      ],
    },
  ];

  


const adminRoutes = adminPaths.reduce((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
  
    if (item?.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }

    return acc
  }, []);


  console.log(adminRoutes)