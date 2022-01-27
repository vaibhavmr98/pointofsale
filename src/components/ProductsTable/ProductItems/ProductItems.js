import React from 'react'
import "../ProductsTable.css";

const ProductItems = () => {
    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>VASY0001</td>
                <td>KELLOGGS CHOCOS FILLS 250 G</td>
                <td className="qty">
                    <div class="input-group input-group-sm ">
                        <button class="btn btn-dark" type="button" id="button-addon1"><i class="fa fa-minus" aria-hidden="true"></i></button>
                        <input type="text" class="form-control text-center" placeholder="" readOnly aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" minLength="1" />
                        <button class="btn btn-dark" type="button" id="button-addon1"><i class="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </td>
                <td>
                    125.00
                </td>
                <td>
                    125.00
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" type="button" id="button-addon1"><i class="fa fa-times"></i></button>
                </td>
            </tr>
        </>
    )
}

export default ProductItems
