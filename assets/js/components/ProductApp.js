// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Components
import ProductRow from './ProductRow';

// Assets
import logo from '../../images/logo.png';
import '../../css/productApp.scss';

class ProductApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: this.props.initialProducts
        };

        this.handleProductReload = this.handleProductReload.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount executed! :)');
    }

    handleProductReload(e) {
        e.preventDefault();

        // in real life, your user might click a button
        // and then you make an AJAX request and use the
        // response from that request to update some data
        // in your state
        let shuffledProducts = _.shuffle(this.state.products);

        this.setState({
            products: shuffledProducts
        });
    }

    render() {
        const { message = 'Default message! :)' } = this.props;
        const { products } = this.state;
        let productRows = [];

        { products && products.map( (product, key) => {
            productRows.push(
                <ProductRow product={product} key={key} />
            );
        }); }

        return (
            <div>
                <button onClick={this.handleProductReload} className="btn btn-warning pull-right">
                    Shuffle Products
                </button>

                <h1>
                    {message}
                    <span><img id="logo-products" className="logo-title" src={logo} alt="logo app"/></span>
                </h1>

                <table className="table table-responsive">
                    <tbody>{productRows}</tbody>
                </table>
            </div>
        )
    }
}

ProductApp.propTypes = {
    message: PropTypes.string,
    initialProducts: PropTypes.array.isRequired
};

export default ProductApp;
