import React from 'react'
import "../ProductsTable.css";

const ProductItems = ({cartItems,handleAddProductToCart,handleRemoveProductToCart,handleRemoveWholeProduct}) => {

    return (

        <>

        {cartItems.length === 0 && (
            <tr>
                <th scope="row" colSpan="7">No Products Added Yet</th>
            </tr>
        )}

        {cartItems.map((items,index) => (

            <tr key={items.productVarientId}>
                <th scope="row">{index + 1}</th>
                <td>{items.itemCode}</td>
                <td>{items.productName}</td>
                <td className="qty">
                    <div className="input-group input-group-sm ">
                        <button className="btn btn-dark" type="button" 
                            id="button-addon1"
                            onClick={() => handleRemoveProductToCart(items)}><i className="fa fa-minus" aria-hidden="true"></i></button>

                        <input type="text" className="form-control text-center" 
                            placeholder="" name={`salesItem[${index}].quantity`} readOnly aria-label="Example text with button addon" 
                            aria-describedby="button-addon1" value={items.quantity} minLength="1" />
                        
                        
                        <button className="btn btn-dark" type="button" id="button-addon1"
                            onClick={() => handleAddProductToCart(items)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </td>
                <td>
                    {items.mrp}
                </td>
                <td>
                    {(items.mrp) * (items.quantity)}
                </td>
                <td>
                    <button className="btn btn-sm btn-outline-danger" 
                        type="button" id="button-addon1"
                        onClick={()=>handleRemoveWholeProduct(items)}><i className="fa fa-times"></i></button>

                    <input type="hidden" name={`salesItem[${index}].mrp`} id={`mrp${index}`} value={items.mrp} />
                    <input type="hidden" name={`salesItem[${index}].productVarientId`} id={`productVarientId${index}`} value={items.productVarientId} />
                    <input type="hidden" name={`salesItem[${index}].itemCode`} id={`itemCode${index}`} value={items.itemCode} />
                    <input type="hidden" name={`salesItem[${index}].sellingPrice`} id={`sellingPrice${index}`} value={items.sellingPrice} />
                    <input type="hidden" name={`salesItem[${index}].productId`} id={`productId${index}`} value={items.productId} />
                    <input type="hidden" name={`salesItem[${index}].productName`} id={`productName${index}`} value={items.productName} />
                    <input type="hidden" name={`salesItem[${index}].imagepath`} id={`imagepath${index}`} value={items.imagepath} />
                    <input type="hidden" name={`salesItem[${index}].netAmount`} id={`netAmount${index}`} value= {(items.mrp) * (items.quantity)} />

                </td>
            </tr>
        )
            //<ProductItems key={cartItems.productVariantId} dataIndex={index} cartItems={items}/>
        )}      
        

       
        </>


       
    )
}

export default ProductItems
