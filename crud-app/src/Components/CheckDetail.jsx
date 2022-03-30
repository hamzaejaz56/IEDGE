import { Button  } from 'bootstrap';
import React from 'react'
import { Route, Router, useNavigate , Link} from 'react-router-dom';
import AddDetails from './AddDetails';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';
const Employee = [{
  name:'',
  email:'',
  dob:'',
  postImage:'',
}]
const bb = axios.get('http://localhost:7000/user').then((response) => {
  console.log(response.data)});
  const bc = axios.get('http://localhost:7000/user').then((response) => {
  console.log(response.data)});
console.log(bc)
const aa = axios.put('http://localhost:7000/user/:id').then((response) => {
  console.log(response.data)});
  console.log(aa.data);
  const ab = axios.delete('http://localhost:7000/user/:id').then((response) => {
    console.log(response.data)});
  console.log(ab.data);
const CheckDetail = ({emp,arr}) => {

  
const navigate =useNavigate();
  
    return (
        <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Image</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {arr.map((i,index)=>(
       <>
    <tr>
        <th scope="row">{index}</th>
      <td>{i.name}</td>
      <td>{i.email}</td>
      <td>{i.dob}</td>
      <td>{i.postImage}</td>
      <td><button onClick={axios.put('http://localhost:7000/user/:id', {})}>Update</button></td>
      <td><button onClick={console.log(bb)}>Delete</button></td>
      <td> <li><Link to="/EmployeeCard">View Card</Link></li></td>
    </tr>
      </>
      ))}
    
  </tbody>
</table>
        </>
    );
};

export default CheckDetail;
