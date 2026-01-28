// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

// 🎯 Task:
//       1. Create a deep copy of order
let Copyuser=structuredClone(order)
//       2. Modify in copied object:
//             i. customer.address.city
Copyuser.customer.address.city="Pulivendula"
//             ii. items[0].price
Copyuser.items[0].price=10000

//             iii. Verify original object remains unchanged
console.log(order)
console.log(Copyuser)