import React from 'react'

const Test3 = () => {
      const orders = [
    {
      id: 1,
      user: "Amit",
      amount: 1200,
      status: "completed",
      items: 3,
      city: "Delhi",
    },
    {
      id: 2,
      user: "Neha",
      amount: 800,
      status: "pending",
      items: 1,
      city: "Noida",
    },
    {
      id: 3,
      user: "Amit",
      amount: 500,
      status: "completed",
      items: 2,
      city: "Delhi",
    },
    {
      id: 4,
      user: "Riya",
      amount: 1500,
      status: "cancelled",
      items: 4,
      city: "Mumbai",
    },
    {
      id: 5,
      user: "Neha",
      amount: 700,
      status: "completed",
      items: 2,
      city: "Noida",
    },
    {
      id: 6,
      user: "Amit",
      amount: 900,
      status: "completed",
      items: 1,
      city: "Delhi",
    },
  ];

  //   const res=orders.reduce((acc, curr) => {
  //     const key=`${curr.status}Orders`
  //     acc[key]=(acc[key]||0)+1
  //     acc.totalOrders+=1
  //     if(curr.status=="completed"){
  //     acc.totalRevenue+=curr.amount
  //     }
  //     return acc
  //   }, {
  //     totalOrders: 0,
  //     completedOrders: 0,
  //     cancelledOrders: 0,
  //     pendingOrders: 0,
  //     totalRevenue: 0,
  //   });
  // console.log(res)

  // const result = orders.reduce(
  //   (acc, curr) => {
  //     acc["totalOrders"]++;

  //     if (curr.status == "completed") {
  //       acc.totalRevenue += curr.amount;
  //       acc.cityRevenue[curr.city]=(acc.cityRevenue[curr.city]||0)+curr.amount
  //     }
  //     acc.statusCount[curr.status] = (acc.statusCount[curr.status] || 0) + 1;

  //     acc.userOrders[curr.user] = (acc.userOrders[curr.user] || 0) + 1;

  //     return acc;
  //   },
  //   {
  //     totalOrders: 0,
  //     totalRevenue: 0,
  //     statusCount: {},
  //     cityRevenue: {},
  //     userOrders: {},
  //   }
  // );

 const result = orders.reduce((acc, curr) => {

  acc.totalOrders++;

  acc.totalAmount += curr.amount;

  if (curr.status === "completed") {
    acc.completedOrders++;

    if (curr.amount >= 1000 && !acc.highValueUsers.includes(curr.user)) {
      acc.highValueUsers.push(curr.user);
    }
  }

  return acc;
}, {
  totalOrders: 0,
  totalAmount: 0,
  completedOrders: 0,
  highValueUsers: []
});

const finalResult = {
  highValueUsers: result.highValueUsers,
  averageOrderValue: result.totalAmount / result.totalOrders,
  completedPercentage:
    (result.completedOrders / result.totalOrders) * 100
};

console.log(finalResult);
  return (
    <div>
      
    </div>
  )
}

export default Test3
