import React from 'react'

const Test2 = () => {
    const orders = [
  { id: 1, user: "Amit", amount: 1200, status: "completed", items: 3 },
  { id: 2, user: "Neha", amount: 800, status: "pending", items: 1 },
  { id: 3, user: "Amit", amount: 500, status: "completed", items: 2 },
  { id: 4, user: "Riya", amount: 1500, status: "cancelled", items: 4 },
  { id: 5, user: "Neha", amount: 700, status: "completed", items: 2 }
];

const comOrder=orders.filter((order)=>order.status=="completed")
const isBig=orders.map((order)=>({...order,isBigOrder:order.amount>=1000}))
const totalRev=orders.reduce((total,order)=>{
  if(order.status=="completed"){
  total+=order.amount
  }
  return total
}
,0)
const isCancel=orders.some((order)=>order.status=="cancelled")
const firstOrd=orders.find((order)=>order.user=="Neha")

const groupUser=orders.reduce((acc,curr)=>{
  acc[curr.user]=acc[curr.user]||[]
  acc[curr.user].push(curr)
  return acc
},{})

const result=orders.reduce((acc,order)=>{
  acc[order.status]=(acc[order.status]||0)+1
  acc["totalAmount"]+=order.amount
  return acc

},{totalAmount:0})
// console.log(result)

const cart = [
  { id: 1, name: "Milk", price: 50, qty: 2, category: "grocery" },
  { id: 2, name: "Bread", price: 40, qty: 1, category: "grocery" },
  { id: 3, name: "Shampoo", price: 120, qty: 1, category: "personal" },
  { id: 4, name: "Soap", price: 30, qty: 3, category: "personal" },
  { id: 5, name: "abc", price: 30, qty: 3, category: "grocery" },
  { id: 6, name: "Soap", price: 30, qty: 3, category: "personal" }
];

// const output=cart.reduce((acc,item)=>{
//   const key=`${item.category}Total`;
//   acc[key]=(acc[key]||0)+1
//   return acc
// },{})

// const output=cart.reduce((acc,item)=>{
//   if(item.category=="grocery")acc.groceryTotal++
//   if(item.category=="personal")acc.personalTotal++
//   return acc;
// },{groceryTotal:0,personalTotal:0})

const output=cart.reduce((acc,curr)=>{
if(!acc[curr.category]){
  acc[curr.category]= []
}
  acc[curr.category].push(curr)

return acc
},{})
console.log(output)
  return (
    <div>
      
    </div>
  )
}

export default Test2
