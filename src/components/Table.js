import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = ({ props }) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props

  console.log('hello')
  console.log(props)
  console.log(props.linkData)


  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = ({ props }) => {

  console.log('HIYAAA')
  console.log(props)
  
  {
   
    return (
      <table>
        <thead>
          <TableHeader/>
        </thead>

        <tbody>
          <TableBody props={props}/>
        </tbody>
      </table>
    )
  }
}

export default Table
