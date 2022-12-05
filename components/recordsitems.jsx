import styles from "./recordsitem.module.css";
import Link from "next/link"
import React from 'react'
import { useTable } from 'react-table'

function Table() {

  const columns = React.useMemo( () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
   
  ],
  []
  )

  const data = React.useMemo( () => [
     {
          id: '1',
          date: 'November 10, 2022',
          time: '12:00PM',
          action: <Link href='/Details' className={styles.detailbtn}>Details</Link>,
     },
     {
          id: '2',
          date: 'November 12, 2022',
          time: '11:00PM',
          action: <Link href='/Details' className={styles.detailbtn}>Details</Link>,
    },
    {
          id: '3',
          date: 'November 18, 2022',
          time: '10:00PM',
          action: <Link href='/Details' className={styles.detailbtn}>Details</Link>,
    },
        
  ],
  []
  )

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = useTable ({ columns, data })
  
  return (

  <div className={styles.container}>
      <div className={styles.records}>
        <p> Please Select to view a Records</p> 
      </div>
      <table className={styles.table} {...getTableProps()}>
          <thead>
              { headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (

                  <th
                      {...column.getHeaderProps()} className={styles.th}>
                      {column.render('Header')}
                  </th>
                  ))}
                  </tr>
              ))}
          </thead>
          <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                  prepareRow(row)
                  return (
                      <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                              return (
                                  <td
                                      {...cell.getCellProps()} className={styles.td}>
                                      {cell.render('Cell')}
                                  </td>
                              )
                          })}
                      </tr>
                  )
              })}
          </tbody>
     </table>
  </div>
  )
}

export default Table
