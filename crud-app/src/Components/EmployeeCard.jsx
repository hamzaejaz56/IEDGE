import React from 'react'
import { Card, Button } from 'react-bootstrap';
import AddDetails from './AddDetails';
import axios from 'axios';
import { Axios } from 'axios/lib/axios';
const Employee = [{
    name:'',
    email:'',
    dob:'',
    postImage:'',
  }]

const EmployeeCard = ({emp,arr}) => {
  
  return (
    <div><Card style={{ width: '18rem' }}>

    <Card.Body>
      <Card.Title >Employee Identity Card</Card.Title>
      <Card.Text>
      {arr.map((i,index)=>(
       <>
    <tr>
        <th scope="row">{index}</th>
        <td>    <Card.Img variant="top" src={i.postImage}  /></td>
      <td>{i.name}</td>
      <td>{i.email}</td>
      <td>{i.dob}</td>
      
      
    </tr>
      </>
      ))}
        
      </Card.Text>
      
    </Card.Body>
  </Card>
  </div>
  )
}

export default EmployeeCard