import React from 'react';
import {HashRouter,Router, Route } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/breadcrumb.index';
import Activities from '../components/activities/activities.index';
import Goods from '../components/goods/goods.index';
import Orders from '../components/orders/orders.index';

const Root = () => (
        <HashRouter>
            <div>
                <Breadcrumb/>
                <Route exact path="/" component={Activities} />
                <Route path="/goods" component={Goods} />
                <Route path="/orders" component={Orders} />
            </div>
        </HashRouter>
);
export default Root;
