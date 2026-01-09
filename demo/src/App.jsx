export default function App() {
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
  console.log(InStock);

  const MarkItems=inventory.map((inv)=>inv.stock==0?{...inv,outOfStock: true}:inv)
  console.log(MarkItems)
  return (
    <div>
      <h1>Welcome to my app</h1>
    </div>
  );
}
