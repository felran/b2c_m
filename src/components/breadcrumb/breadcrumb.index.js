import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Breadcrumb extends Component {
    render(){
        return (
                <ul>
                    <li><Link to="/">活动产品</Link></li>
                    <li><Link to="/goods">商品列表</Link></li>
                    <li><Link to="/orders">订单列表</Link></li>
                </ul>
        );
    }
};
export default Breadcrumb;