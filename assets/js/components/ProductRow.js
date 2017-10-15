// Dependencies
import React, { Component } from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.product}</td>
                <td className="product-price">{Math.round(Math.random()*50)}</td>
            </tr>
        )
    }
}

export default ProductRow;