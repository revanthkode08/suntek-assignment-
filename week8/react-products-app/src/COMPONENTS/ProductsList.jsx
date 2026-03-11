
import {useState,useEffect, use} from 'react'
import {useNavigate } from 'react-router'
import {useForm} from 'react-hook-form'
function ProductsList() {
  let [products,setProducts]=useState([])
  let [allProducts,setAllProducts]=useState([])
  let [error,setError]=useState(null)
  let [loading,setLoading]=useState(false)
  let {register,reset,handleSubmit,formState:{errors}}=useForm()

  const navigate=useNavigate()

  const gotoProduct=(productObj)=>{
    //navigate logic
    //while naviagteing take data
    navigate('/product',{state:{product:productObj}})
  }

  const handleForm=(obj)=>{
    console.log(obj)
    let newProducts=allProducts.filter(prodObj=>prodObj[obj.filter]==obj.category)
    setProducts(newProducts)
    reset()
  }

  useEffect(()=>{
    async function getProducts() {
      setLoading(true)
      try{
        let res=await fetch('https://fakestoreapi.com/products')
        if(res.status===200){
          let productsData=await res.json()
          setProducts(productsData)
          setAllProducts(productsData)
        }else{
          throw new Error("Failed to fetch");
        }
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
    getProducts();
  },[])

  if(loading) return <p className='text-center text-2xl text-blue-300'>Loading.........</p>
  if(error!==null) return <p className='text-center text-2xl text-red-500'>{error.message}</p>

  return (
    <div>
      <div className="flex justify-center mt-8 px-4">
        <form onSubmit={handleSubmit(handleForm)} className="flex gap-3 items-start">
          <div className="flex flex-col">
          <input type="text" {...register('category',{required:true,minLength:3})} placeholder='Search for any...' className="px-3 py-2 border rounded-md"/>
          {errors.category?.type==='required'&&<p className='text-red-500'>search required</p>}
          {errors.category?.type==='minLength'&&<p className='text-red-500'>Min length required</p>}
          </div>
          <div className="flex flex-col">
          <select id="" {...register('filter',{required:true})} className='p-2 border rounded-md'>
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="price">Price</option>
          </select>
          </div>
          {errors.filter?.type==='required'&&<p className='text-red-500'>Please select the filter</p>}
          <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
        </form>
      </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center '>
      
      {
        products.length===0?(
            <p>Sorry No Products Found..... Try seacrching for another product</p>
        ):(
        products.map(productObj=>(
        <div  onClick={()=>gotoProduct(productObj)}  key={productObj.id} className='shadow-lg p-6 rounded-lg cursor-pointer'>

            <img src={productObj.image} alt="" className='h-44 object-contain mx-auto'/>
            <p>{productObj.title}</p>
        </div>
        ))
      )
      }
    </div>
        </div>
  )
}

export default ProductsList