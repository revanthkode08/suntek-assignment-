 //i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            return products.find(ele=>ele.id=id)
                            // Find and return product by ID
                          }
                          //console.log(getProductById(4))
                          export function getAllProducts() {
                            // Return all products
                            return products
                          }
                          //console.log(getAllProducts())
                          export function getProductsByCategory(category) {
                            // Filter products by category
                            return products.filter(ele=>ele.category===category)
                          }
                          //cleconsole.log(getProductsByCategory('electronics'))
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                            return products.filter(ele=>ele.name.toLowerCase().includes(query.toLowerCase()))
                          }
                          //console.log(searchProducts('on'))
                          export function checkStock(productId, quantity) {
                            const product=getProductById(productId)
                            if(product && product.stock>=quantity)
                                return true
                            else
                                return false
                            // Check if product has enough stock
                            // Return true/false
                          }
                       //  console.log(checkStock(1,30))
                          
                          export function reduceStock(productId, quantity) {
                            const product=getProductById(productId)
                            if(product&& product.stock>=quantity){
                                product.stock=product.stock-quantity
                                return true
                            }
                            else
                                return false
                          }
                         //   console.log(reduceStock(1,3))