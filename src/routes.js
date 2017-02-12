import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import ItemList from './components/ItemList';

import DataGrid from './components/DataGrid';
export default (
  <Route path="/" component={ItemList}>

    <Route path="/datagrid" component={DataGrid}></Route>


  </Route>
);
