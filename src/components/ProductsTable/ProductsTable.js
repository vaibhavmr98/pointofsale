import React from 'react'
import './ProductsTable.css';
import ProductItems from "./ProductItems/ProductItems";

const ProductsTable = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card mt-2">
                    <div className="card-body p-0 table-responsive fixTableHead">
                        <table className="table table-striped align-middle mb-0">
                            <thead className="table-dark"> 
                                <tr>
                                    <th className="wsrno text-center" scope="col">Sr. No.</th>
                                    <th className="witemcode text-center " scope="col">Itemcode</th>
                                    <th className="wproductname text-left " scope="col">Product</th>
                                    <th className="wqty text-center" scope="col">Qty</th>
                                    <th className="wnetamt text-right" scope="col">Price</th>
                                    <th className="wnetamt text-right" scope="col">Net Amount</th>
                                    <th className="wdel" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                <ProductItems />
                                <ProductItems />
                                <ProductItems />
                                <ProductItems />
                                <ProductItems />

                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card mt-2"  style={{"border": "none"}}>
                    <div className="card-body p-0" >
                    <input class="form-control form-control-sm mb-2 border-blue" type="text" placeholder="Remarks" aria-label="Remarks"/>
                    <div className="row mt-2">
                        <div className="col border-right">
                            <h6 id="total_quantity">1.000</h6>
                            <small className='fw-bolder'>QUANTITY</small>
                        </div>
                        <div className="col border-right">
                            <h6 id="total_quantity">1.000</h6>
                            <small className='fw-bolder'>MRP</small>
                        </div>
                       
                        <div className="col border-right">
                            <h6 id="total_quantity">1.000</h6>
                            <small className='fw-bolder'>ROUND OFF</small>
                        </div>
                        <div className="col border-right">
                            <h6 id="total_quantity" className='total-amount '>1.000</h6>
                            <small className='fw-bolder'>AMOUNT</small>
                        </div>
                        
                    </div>

                
                    <div className="row mt-2">
                       
                        <div className="col-md-3 ">
                            <button type="button" class="btn btn-dark w-100"><i class="fa fa-pause" aria-hidden="true"></i> HOLD</button>
                        </div>
                        <div className="col-md-3 ">
                            <button type="button" class="btn btn-dark w-100"><i class="fa fa-credit-card" aria-hidden="true"></i> Card</button>
                        </div>
                        <div className="col-md-3 ">
                            <button type="button" class="btn btn-dark w-100"><i class="fa fa-forward"  aria-hidden="true"></i> UPI</button>
                        </div>
                        <div className="col-md-3 ">
                            <button type="button" class="btn btn-dark w-100"><i class="fas fa-rupee-sign" aria-hidden="true"></i> Cash</button>
                        </div>
                        

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTable
