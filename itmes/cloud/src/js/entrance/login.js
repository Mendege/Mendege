require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
require('babel-polyfill');
require('core-js/fn/object/assign');
const React = require('react');
const ReactDOM = require('react-dom');
const M_index = require('./login-son');
const M_indexB = M_index.default;
ReactDOM.render(
    <div>
        <M_indexB></M_indexB>
    </div>
    ,
    document.getElementById('root')
);