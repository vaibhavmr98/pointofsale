import React,{ useState,useEffect } from 'react'
import './Main.css';
import logo from '../headerLogo-bgnone.png';
import ProductsTable from './ProductsTable/ProductsTable';
import Product from './Product/Product';
import {PRODUCTJSON} from '../constants/productsJson';
import {CATEGORYJSON} from '../constants/categoryJson';


const Main = () => {
    
    const [filteredProducts, setfilteredProducts] = useState(PRODUCTJSON);
    const [loading, setloading] = useState(true);


    const Loading =()=>
        <div className="loading">
            <div></div>
            <div></div>
        </div>  

    
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);
    });
    

    const onDropdownSelected = (e) => {
     
       if (e.target.value == 'all' ) {
        setfilteredProducts(PRODUCTJSON)  ; 
       } else {
        setfilteredProducts(PRODUCTJSON.filter(product => product.categoryId ==  e.target.value));
       }
       

       //here you will see the current selected value of the select input
    }

    //console.log(PRODUCTJSON);

    return (
        loading ? (<Loading/>) :
        <div className="container-fluid pt-2 pb-2">
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
                                    <select className="form-select salesman" title="Salesman" tabIndex="-1" aria-hidden="true" id="salesManId" >
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
                                <select className="form-select select2" aria-label="Default select example" disabled="disabled">
                                    <option selected>Walk In Customer</option>
                                   
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>

                    <ProductsTable/>
                </div>
                <div className="col-4">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-dark ms-1" type="button" ><i className="fa fa-trash" aria-hidden="true"></i></button>
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
                                <select className="form-select" aria-label="Default select example" onChange={onDropdownSelected} >
                                    <option selected value='all'>All Categories</option>
                                    {CATEGORYJSON.map(o => <option key={o.categoryId} value={o.categoryId}>{o.categoryName}</option>)}
                                
                                </select>
                            </div>
                                
                        </div>
                    </div>
                    <div className="row product-div-scroll mb-2">
                        <div className="col-12" >
                            <div className="card" >
                                <div className="row text-center" >
                                    
                                {filteredProducts.map((props) => (
                                    <Product productVariantId={props.productVarientId} {...props} />
                                ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    {/* <div className="row mb-2">
                        <div className="col-12">
                            <div className="card customer-highlights">
                                <div className="card-body text-start">
                                    <p className="d-block mb-0">
                                        <p className="fw-bold mb-0"> Last Visited :</p>
                                        <p className="mb-0">-</p>
                                    </p>
                                    <p className="d-block mb-0">
                                        <p className="fw-bold mb-0"> Last Bill Amount :</p> 
                                        <p className="mb-0">-</p>
                                    </p>
                                   
                                    <div className="d-grid gap-2">
                                        <button type="button" className="btn btn-dark" onclick="printlastBill()">
	                                      	<i className="fa fa-print" aria-hidden="true"></i> Last Bill Print</button>
                                       
                                    </div>
                                  
                                    
                                </div>


                            </div>
                        </div>
                    </div>
                  
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="card customer-highlights" style={{"height" : "100%"}}>
                                <div className="card-title">
                                    <h6 className="mt-2">Other Details</h6>
                                </div>
                                <div className="card-body text-start">
                                   
                                    <p className="d-block mb-0">
                                        <p className="fw-bold mb-0"> Most Purchased Item :</p> 
                                        <p className="mb-0">-</p>
                                    </p>
                                    <p className="d-block mb-0">
                                        <p className="fw-bold mb-0"> Closing :</p> 
                                        <p className="mb-0">-</p>
                                    </p>
                                    <p className="d-block mb-0">
                                        <p className="fw-bold mb-0">Total Purchase :</p> 
                                        <p className="mb-0">-</p>
                                    </p>
                                    
                                </div>


                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Main
