import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
//import '../css/Table.css';
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 
 
class Table1 extends Component {
  weatherFormatter(cell, row) {
    return cell[0].icon
  }

  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
         <TableHeaderColumn isKey dataField='dt_txt'>Time</TableHeaderColumn>
         <TableHeaderColumn dataField='weather' dataFormat={this.weatherFormatter}>Weather</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;
