import exp from 'express';

const productapp = exp();
const PORT=3000;
productapp.use(exp.json()); //  parses JSON body

productapp.use(exp.json());
productapp.get('/products',(req,res)=>{
    res.status(200).json({message:"all products",payload:products});
});
productapp.get('/products-id/:id',(req,res)=>{
     
})
productapp.get('/products-name/:name',(req,res)=>{})
    
productapp.post('/products',(req,res)=>{
});
productapp.put('/products/:id',(req,res)=>{});
productapp.delete('/products/:id',(req,res)=>{});

  export default productapp;