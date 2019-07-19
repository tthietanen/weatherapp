import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
 
function weatherFormatter(cell, row) {
  return <img  src={`/img/${cell[0].icon.slice(0, -1)}.svg`} />
}

const columns = [{
	  dataField: 'dt_txt',
	  text: 'Time'
}, {
	  dataField: 'weather',
	  text: 'Weather',
	  formatter: weatherFormatter
}];

class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable
	  bootstrap4={ true }
	  striped={ true }
	  bordered={ true }
	  keyField='dt_txt'
	  data={ this.props.data }
	  columns={ columns }
	  />
      </div>
    );
  }
}
 
export default Table1;
