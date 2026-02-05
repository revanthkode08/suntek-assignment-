import exp from 'express';
import userroute from './apis/userroute.js';
import productroute from './apis/productroute.js';
const app=exp();
const PORT=3000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
app.use(exp.json());
app.use('/user',userroute);
app.use('/products',productroute);
