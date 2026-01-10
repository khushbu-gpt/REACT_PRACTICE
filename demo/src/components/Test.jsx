import React from 'react'

const Test = () => {
      const products = [
    { id: 1, name: "Milk", price: 40 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Eggs", price: 60 },
  ];
  const cart = [
    { id: 2, name: "Bread", price: 30, qty: 1 },
    { id: 3, name: "Eggs", price: 60, qty: 1 },
  ];

  // const res=products.map((product)=>product.name=="Eggs"
  // ?{...product,price:product.price+10}:product)
  // console.log(res)

  // const res2=cart.map((c)=>c.name=="Eggs"?{...c,qty:c.qty+1}:c)
  // console.log(res2)
  // const res3=cart.filter((c)=>c.id!==2)
  // console.log(res3)
  // const total=cart.reduce((total,item)=>total+item.price*item.qty,0)
  // console.log(total)

  const user = {
    id: 1,
    name: "Khushbu",
    address: {
      city: "Delhi",
      pincode: 110001,
    },
  };
  const updateUser = {
    ...user,
    address: {
      ...user.address,
      city: "Noida",
    },
  };
  // console.log(updateUser);
  const orders = [
    { id: 1, status: "pending", amount: 200 },
    { id: 2, status: "completed", amount: 500 },
    { id: 3, status: "completed", amount: 300 },
  ];
  const result = orders.reduce(
    (acc, order) => {
      if (order.status === "completed") {
        acc.completedCount++;
        acc.totalRevenue += order.amount;
      }
      return acc;
    },
    { completedCount: 0, totalRevenue: 0 }
  );
  // console.log(result);

  const newProduct = { id: 1, name: "Milk", qty: 1 };

  const existProd = cart.find((prod) => prod.name == "Milk");

  const totalCart = existProd
    ? cart.map((item) =>
        item.id == existProd.id
          ? { ...item, qty: item.qty + newProduct.qty }
          : item
      )
    : [...cart, newProduct];
  // console.log(totalCart);

  const inventory = [
    { id: 1, name: "Rice", stock: 10 },
    { id: 2, name: "Wheat", stock: 5 },
    { id: 3, name: "Sugar", stock: 0 },
  ];

  const InStock = inventory
    .filter((inv) => inv.name == "Wheat")
    .map((inv) => (inv ? { ...inv, stock: inv.stock + 5 } : inv));
  // console.log(InStock);

  const MarkItems = inventory.map((inv) =>
    inv.stock == 0 ? { ...inv, outOfStock: true } : inv
  );
  // console.log(MarkItems)

  const newInvArr = inventory.map((inv) => ({ ...inv }));
  // console.log(newInvArr)

  const carts = [
    { id: 1, name: "Milk", selected: false },
    { id: 2, name: "Bread", selected: true },
    { id: 3, name: "Eggs", selected: false },
  ];

  const toggle = carts.map((c) => (c.id == 3 ? { ...c, selected: true } : c));
  // console.log(toggle)

  const products2 = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Bread" },
    { id: 1, name: "Milk" },
    { id: 3, name: "Eggs" },
    { id: 2, name: "Bread" },
  ];

  const order = [
    { id: 1, status: "pending", amount: 200 },
    { id: 2, status: "completed", amount: 500 },
    { id: 3, status: "pending", amount: 300 },
    { id: 4, status: "completed", amount: 100 },
  ];

  const ord = order.reduce((acc, order) => {
    acc[order.status] = acc[order.status] || [];
    acc[order.status].push(order);
    return acc;
  }, {});
  console.log(ord);

  const users = [{ active: true }, { active: false }, { active: true }];
  const count = users.reduce(
    (acc, u) => {
      acc.total++;
      if (u.active) acc.active++;
      return acc;
    },
    { total: 0, active: 0 }
  );

  const filters= [{
    category: "grocery",
    priceRange: [0, 1000],
    rating: 4,
  }];
 const res=filters.map((filter)=>({...filter,rating:5}))
 console.log(res)



  return (
    <div>
      
    </div>
  )
}

export default Test
