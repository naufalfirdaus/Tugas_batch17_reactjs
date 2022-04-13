import React, { useState, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { doGetCart, doAddCart, doMinCart } from '../redux/actions/cartAction'

export default function ChartItem() {

    const dispatch = useDispatch()
    const cart = useSelector(state=>state.carts)

    const [productCheck, setProductCheck] = useState([])
    const [total,setTotal] = useState(0)
    const [totalQty,setTotalQty] = useState(0)
    const [display, setDisplay] = useState(false)
    const [values, SetValues] = useState({
        prod_name : undefined,
        prod_price : 0,
        prod_qty : 0,
        category : undefined,
        subcategory : undefined
    })
    const onCheckItem = (item) =>{
        console.log(item);
    }
    const handleOnChange=name=>event=>{
        SetValues({...values,[name]:event.target.value})
    }
    const onSelectChange = e => {
        
    }
    const onSubmit = (event)=>{
        
    }
   
    const readerForm = ()=>{
       
    }
    const increment = (id) =>{
        const payload = {id}
        dispatch(doAddCart(payload))
    }
    const decrement = (id) =>{
        const payload = {id}
        dispatch(doMinCart(payload))
    }
   
  return (
    <div>
        <h2>List of Carts</h2>
        {
            display === true ? readerForm() :
            <>
            <button onClick={()=>setDisplay(true)}>Add Product</button>
        <table>
            <th>Select</th>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Salary</th>
            <th>Sub Total</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Action</th>
            <tbody>
                {
                    (cart || []).map(carts =>(
                        <tr key={carts.prodId}>
                            <td>
                                <input type="checkbox" onChange={onCheckItem(carts)} checked={productCheck[carts.prodId]}/>
                            </td>
                            <td>{carts.prodId}</td>
                            <td>{carts.prodName}</td>
                            <td>{carts.qty}</td>
                            <td>{carts.salary}</td>
                            <td>{carts.qty * carts.salary}</td>
                            <td>{carts.category}</td>
                            <td>{carts.subcategory}</td>
                            <button onClick={()=>increment(carts.prodId)}>+</button>
                            <button onClick={()=>decrement(carts.prodId)}>-</button>
                            <button>Delete</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h3>Total Harga : Rp. {total}</h3>
        <h3>Total Quantity : {totalQty}</h3>
        <button>Checkout</button>
            </>
        }
    </div>
  )
}
