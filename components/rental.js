import * as React from 'react';
import rental_data from './rentals_array.json';
import {useTable} from 'react-table';
import './rental.css';

function Rentals() {

  // console.log(data)
  const data= React.useMemo(()=>rental_data,[]);
  //react-table documentation recommends using useMemo
  //memo turns the result of a function into something to be remembered
  //memoization
  //useMemo returns a memoized value
  //runs only when dependencies have changed
  //here no dependencies
  const columns = React.useMemo(()=> [

  {
    Header: "Sl.",
    //text that appears on page
    accessor: "id",
    //the exact key from json object array file
  
  },
  {
    Header: "Vehicle Type",
    accessor: "Vehicle",
  
  },
  {
    Header: "Model",
    accessor: "Name",
  
  },
  {
    Header: "Rate Per Hour*",
    accessor: "PH",
  
  },
  {
    Header: "Rate Per Day*",
    accessor: "PD",
  
  },
  {
    Header: "Rate Per Week*",
    accessor: "PW",
  
  },
  {
    Header: "Description",
    accessor: "desc",
  
  },
  {
    Header: "Max. number of passengers",
    accessor: "limit",
  
  },],[]);
  // var c=0;
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow } = useTable({ columns, data});
  //useTable return a bunch of fxns to {} which can also be a variable
  //const table=useTable({...});


  return (
    <div className='rental-div'>
      <div className='rental-container'>
        <hr></hr>
        <p>Travelling now done with ease. Book your desired vehicle to travel in, without travelling anywhere.</p>
        <hr></hr>
        {/* destructuring table */}
        <table {...getTableProps()}>
          {/* getTableProps returns object of all elements of the table */}
          {/* like all accessors */}
          <thead>
            {/* group of all headers */}
            {headerGroups.map((headerGroup)=>(
              // for each header group we return <tr></tr>
              <tr {...headerGroup.getHeaderGroupProps()}>
                {/* returns object of all header properties (header name accessor etc) */}
                {headerGroup.headers.map((columns)=>(
                  <th {...columns.getHeaderProps()}>
                    {/* returns  */}
                    {columns.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {
                        
                        cell.render("Cell")
                      } 
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr></hr>
        <h3><u>Please note:</u></h3>
        <p>Please contact reception for booking and further information upon transportation.</p>
        <p>Booking can be done only upon arrival and not beforehand.</p>
        <p>All passengers are expected to carry necessary documents while in rented vehicle or public transportation.</p>
        <p>* costs subject to change</p>
        <br></br>
        <hr></hr>
      </div>
    </div>
  )
}

export default Rentals