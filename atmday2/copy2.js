/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
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

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
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
                try{
                    //now we gone modify the nested properties
                    //structure cloning
                    let deepcopiedobj=JSON.parse(JSON.stringify(order))
                    deepcopiedobj.customer.address.city="chennai"
                    deepcopiedobj.items[0].price=7590
                    console.log("original order:",order)
                    console.log("deep copied order:",deepcopiedobj)
                    

    

   
                }
 catch(err){
    console.log(err.name)
    console.log(err.message)
 }
    