import React from 'react'
import { render } from 'react-dom'
import Root from './routers/routers';
import 'antd/dist/antd.css';
import './scss/common.scss';

render(
        <Root />,
        document.getElementById('root')
);


