//region Extra Libraries
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'bootstrap-sass';
import '../css/styles.scss';

const $ = require('jquery');
// make sure the polyfill library is loaded in this main entry
//require('babel-polyfill');
//endregion

import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";

import App  from './components/App';

const app = document.getElementById('product-app');
if(app) {

    const render = Component => {
        ReactDOM.render(
            <AppContainer>
                <Component {...(app.dataset)}/>
            </AppContainer>,
            app,
        )
    };

    render(App);

    // Webpack Hot Module Replacement API
    if (module.hot) {
        module.hot.accept('./components/App', () => {
            const NextRootContainer = require('./components/App').default;
            render(NextRootContainer);
        })
    }

}

//region First version with Jquery
// $(document).ready(function() {
//     ReactDOM.render(
//         <ProductApp message="Great Products!" initialProducts={startingProducts} />,
//         document.getElementById('product-app')
//     );
// });
//endregion