import React, { Component, PropTypes } from 'react';
require('react-datagrid/index.css')

import $ from 'jquery';
import _ from 'lodash';
let ReactDataGrid = require('react-datagrid');
let columns = [];
let url1 = [];
export default class DataGrid extends Component {
constructor(props){

  super(props);
  url1="http://"+this.props.params.value+".lvh.me:3000/types";
console.log("url",url1);
  this.state={
    url: url1,

    columns: [],
    activePage: 1,
    pageSize: 20
  };
}

  componentDidMount() {
    console.log(this.state.url);
    $.ajax({
      url: this.state.url,
      type: 'GET',

      cache: false,
      success: function jsonCallback(dat) {


          _.forEach(dat[0],function( value,key){
            columns.push({name: key});
          });

          this.setState({columns});

      }.bind(this),


    });


  }




  render() {

    return (

        <ReactDataGrid
          columns={this.state.columns}
          dataSource={this.state.url}
          idProperty='id'
          pagination={false}
          style={{height: 500}}
          />


    );
  }
}
