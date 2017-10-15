// Dependencies
import React, { Component } from 'react';

// Components
import ProductApp from './ProductApp';
import Timer from './Timer';

// Assets
import '../../css/App.scss';

// Data
import productsCollection from '../../data/ProductCollection';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.dir(this.props);
        return (
            <div className="App">
                <Timer/>
                <ProductApp message="Great Products" initialProducts={productsCollection} />
            </div>
        );
    }
}

export default App;