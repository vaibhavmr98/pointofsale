import React,{ useState,useEffect } from 'react'
import './Main.css';
import logo from '../headerLogo-bgnone.png';
import Product from './Product/Product';
import {PRODUCTJSON} from '../constants/productsJson';
import {CATEGORYJSON} from '../constants/categoryJson';
import ProductItems from './ProductsTable/ProductItems/ProductItems';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    
    const [filteredProducts, setfilteredProducts] = useState(PRODUCTJSON);
    const [loading, setloading] = useState(true);
    const toastOptions =  {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:'colored'
    }
    const notifyInfo = (text) => toast.info(text,toastOptions);


    function Loading() {
        return <div className="loading">
            <div></div>
            <div></div>
        </div>;
    }  

    
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);
    });
    

    const [cartItems, setCartItems] = useState([]);

    const handleAddProductToCart = (product) => {


        const ProductExists = cartItems.find((item) => item.productVarientId === product.productVarientId);
        if(ProductExists){
            setCartItems( cartItems.map( (item) => item.productVarientId === product.productVarientId ?
             {...ProductExists, quantity : ProductExists.quantity + 1} : item ))
        }else{
            setCartItems([...cartItems,{...product,quantity : 1}])
        }

    }

    const handleRemoveProductToCart = (product) => {

        const ProductExists = cartItems.find((item) => item.productVarientId === product.productVarientId);
        if(ProductExists.quantity === 1){
            //setCartItems(cartItems.filter((item) => item.productVarientId !== product.productVarientId));
            toast.error("Quantity can't be Zero...!!!",toastOptions)
            
        }else{
            setCartItems( cartItems.map( (item) => item.productVarientId === product.productVarientId ?
              {...ProductExists, quantity : ProductExists.quantity - 1} : item ))
        }
    }

    const handleRemoveWholeProduct = (product) => {

        const ProductExists = cartItems.find((item) => item.productVarientId === product.productVarientId);
        if(ProductExists){
            setCartItems(cartItems.filter((item) => item.productVarientId !== product.productVarientId));
        }
    }

    const handleDiscartSale = () => {

        const willDelete =  swal({
            title: "Are you sure?",
            text: "Are you sure that you want to Discard this sale?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((value) => {
            if (willDelete) {
                setCartItems([]);
              }
          });
        
    }

    const handleHoldBill = () =>{
        notifyInfo("This Service is not Available...!!!")
    }

    const handleCashPayment =() =>{

        if (cartItems.length > 0) {
            setCartItems([]);
            toast.success("Sales Added Successfully...!!!",toastOptions)   
        }else{
            toast.error("Add minimum one Product...!!!",toastOptions)
        }
    }

    

    const onDropdownSelected = (e) => {
       if (e.target.value == '0' ) {
        setfilteredProducts(PRODUCTJSON)  ; 
       } else {
        let FILTEREDPRODUCTSBYCATEGORY = PRODUCTJSON.filter(product => product.categoryId ==  e.target.value);
        //console.log(FILTEREDPRODUCTSBYCATEGORY);
        setfilteredProducts(FILTEREDPRODUCTSBYCATEGORY);
       }
       

       //here you will see the current selected value of the select input
    }

    const totalPrice = cartItems.reduce((mrp,item) => mrp + item.quantity * item.mrp , 0);

    const totalQuantity = cartItems.reduce((quantity,item) => quantity + item.quantity , 0);


    // TYPEHEADE START

    // TYPEHEAD END

    return (
        loading ? (<Loading/>) :
        <div className="container-fluid pt-2 pb-2">
            <ToastContainer/>
            <div className="row">
                <div className="col-8">
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <img className="" src={logo}  alt="LOGO" style={{height: "38px"}}/>
                                </div>
                                <div className="mt-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" defaultChecked/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">WALK IN</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">DELIVERY</label>
                                    </div>
                                </div>
                                <div>
                                    <select className="form-select salesman" title="Salesman"  defaultValue="0" tabIndex="-1" aria-hidden="true" id="salesManId" >
                                        <option value="0"> MunnemG</option>
                                        <option value="1"> MunnemG 1</option>
                                        <option value="2"> MunnemG 2</option>
                                        <option value="3"> MunnemG 3</option>
                                        <option value="4"> MunnemG 4</option>
                                        <option value="5"> MunnemG 5</option>
                            
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">
                                    <i className="fas fa-scanner"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="Scan Barcode/Enter Product Name" />
                            </div>
                        </div>
                        <div className="col-6">

                        <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">
                                    <i className="fa fa-user"></i>
                                </span>
                                <select className="form-select select2" aria-label="Default select example" defaultValue="0" disabled="disabled">
                                    <option value="0">Walk In Customer</option>
                                   
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-2">
                                <div className="card-body p-0 table-responsive fixTableHead">
                                    <table className="table table-striped align-middle mb-0">
                                        <thead className="table-dark"> 
                                            <tr>
                                                <th className="wsrno text-center" scope="col" >#</th>
                                                <th className="witemcode text-center " scope="col">Itemcode</th>
                                                <th className="wproductname text-left " scope="col">Product</th>
                                                <th className="wqty text-center" scope="col">Qty</th>
                                                <th className="wprice text-right" scope="col">Price</th>
                                                <th className="wnetamt text-right" scope="col">Net Amount</th>
                                                <th className="wdel" scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <ProductItems cartItems={cartItems} 
                                                handleAddProductToCart={handleAddProductToCart}
                                                handleRemoveProductToCart={handleRemoveProductToCart}
                                                handleRemoveWholeProduct={handleRemoveWholeProduct}/>
                                        
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card mt-2"  style={{"border": "none"}}>
                                <div className="card-body p-0" >
                                <input className="form-control form-control-sm mb-2 border-blue" type="text" placeholder="Remarks" aria-label="Remarks"/>
                                <div className="row mt-2">
                                    <div className="col border-right">
                                        <h6 id="total_quantity">{totalQuantity.toFixed(2)}</h6>
                                        <small className='fw-bolder'>QUANTITY</small>
                                    </div>
                                    <div className="col border-right">
                                        <h6 id="total_quantity">
                                            {totalPrice.toFixed(2)}
                                        </h6>
                                        <small className='fw-bolder'>MRP</small>
                                    </div>
                                
                                    <div className="col border-right">
                                        <h6 id="total_quantity">0.00</h6>
                                        <small className='fw-bolder'>ROUND OFF</small>
                                    </div>
                                    <div className="col border-right">
                                        <h6 id="total_quantity" className='total-amount '>
                                        <i className="fas fa-rupee-sign" aria-hidden="true"></i> {totalPrice.toFixed(2)}</h6>
                                        <small className='fw-bolder'>AMOUNT</small>
                                    </div>
                                    
                                </div>

                            
                                <div className="row mt-2">
                                
                                    <div className="col-md-3 ">
                                        <button type="button" className="btn btn-dark w-100"
                                            onClick={handleHoldBill}><i className="fa fa-pause" aria-hidden="true"></i> HOLD</button>
                                    </div>
                                    <div className="col-md-3 ">
                                        <button type="button" className="btn btn-dark w-100"
                                             onClick={handleHoldBill}><i className="fa fa-credit-card" aria-hidden="true"></i> Card</button>
                                    </div>
                                    <div className="col-md-3 ">
                                        <button type="button" className="btn btn-dark w-100"
                                         onClick={handleHoldBill}><i className="fa fa-forward"  aria-hidden="true"></i> UPI</button>
                                    </div>
                                    <div className="col-md-3 ">
                                        <button type="button" className="btn btn-dark w-100"
                                             onClick={handleCashPayment}><i className="fas fa-rupee-sign" aria-hidden="true"></i> Cash</button>
                                    </div>
                                    

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-dark ms-1" type="button" onClick={handleDiscartSale}>
                                        <i className="fa fa-trash" aria-hidden="true"></i></button>
                                <button className="btn btn-sm btn-dark ms-1" type="button"><i className="fa fa-arrows-alt" aria-hidden="true"></i></button>
                                <button className="btn btn-sm btn-dark ms-1" type="button"><i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mb-2">
                        <div className="col-12">

                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">
                                    <i className="fa fa-cubes"></i>
                                </span>
                                <select className="form-select" aria-label="Default select example" defaultValue={0} onChange={onDropdownSelected} >
                                    <option  value='0'>All Categories</option>
                                    {CATEGORYJSON.map(o => <option key={o.categoryId} value={o.categoryId}>{o.categoryName}</option>)}
                                
                                </select>
                            </div>
                                
                        </div>
                    </div>
                    <div className="row product-div-scroll mb-2">
                        <div className="col-12" >
                            <div className="card" >
                                <div className="row text-center" >
                                    <Product productItems={filteredProducts} 
                                                handleAddProductToCart={handleAddProductToCart}  />
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    
                </div>
            </div>
        </div>
    )
}

export default Main
