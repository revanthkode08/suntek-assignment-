//ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            const product=getProductById(productId)
                            if(!product)
                            {console.log("product not found")

                            
                                return 
                            }
                            
                            // 2. Check stock availability
                            if(!checkStock(productId,quantity))
                           {
                                console.log("out of stock ")
                                return

                            }
                                
                           
                            // 3. Check if product already in cart
                            const existingItem=cartItems.find(item=>item.productId===productId)
                            if(existingItem)
                                existingItem.quantity+=existingItem.quantity+quantity
                            //    - If yes, update quantity
                            else{
                                cartItems.push({
                                    productId:product.id,
                                    name:product.name,
                                    price:product.price,
                                    quantity:quantity

    

                                })
                            }
                            //    - If no, add new item
                            // 4. Return success/error message
                            console.log("product added to cart successfully")
                          }
                         // addToCart(1,2)
                         // addToCart(2,5)
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                            const existingItem=cartItems.find(item=>item.productId===productId)
                            if(!existingItem)
                                return "not found in cart"
                          
                          cartItems=cartItems.filter(ele=>ele.productId!==productId)
                          return " product removed successfully"
                          }
                          
                         // console.log(removeFromCart(1))
                          export function updateQuantity(productId, newQuantity) {
                            const existingItem=cartItems.find(ele=>ele.productId===productId)
                            if(!existingItem){
                            
                                console.log("product not found in cart ")
                                 return 
                            }     
                           if(checkStock(productId,newQuantity))
                            {
                                console.log("not enough stock to update quantity ")
                                return 
                            }
                            existingItem.quantity=newQuantity
                            console.log(" quantity updated successfully")

                        // Update quantity of product in cart
                        //     // Check stock before updating
                          }
                        //  updateQuantity(2,3)
                            
                          
                          export function getCartItems() {
                            return cartItems
                        //     // Return all cart items with product details
                          }
                          console.log(getCartItems())
                          export function getCartTotal() {
                            
                             return cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0)
                            
                        //     // Calculate total price of all items in cart
                        //     // Return total
                         }
                       //   console.log(getCartTotal())
                          export function clearCart() {
                            cartItems=[]
                            console.log("cart cleared successfully")
                        //     // Empty the cart
                           }
                          clearCart()