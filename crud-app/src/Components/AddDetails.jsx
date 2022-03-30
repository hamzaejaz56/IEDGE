import React ,{ useState, useEffect} from 'react'
import axios from "axios";
import cors from 'cors';
import CheckDetail from './CheckDetail';
import {io} from 'socket.io-client';
import { Socket } from 'socket.io-client';
import EmployeeCard from './EmployeeCard';

const Employee = [{
  name:'',
  email:'',
  dob:'',
  postImage:'',
}]



function AddDetails  ()  {
  const [postImage, setPostImage] = useState({
    myFile: "",
});
const[employee,Setemployee]=useState('');
const [name,Setname] = useState('');
const [arr,SetArr] = useState([]);

const [email,Setemail] = useState('');
const [dob,Setdob] = useState('');
const [emp,SetEmp] = useState({});

useEffect(() => {
  const socket = io('ws://localhost:7000')

  socket.on('connnection', () => {
    console.log('connected to server');
  })

  socket.on('employee-added', (newemployee) => {
    Setemployee(newemployee)
  })

  socket.on('message', (message) => {
    console.log(message);
  })

  socket.on('disconnect', () => {
    console.log('Socket disconnecting');
  })

}, [])

useEffect(() => {
  const getemployee = async () => {
    const response = await axios.get('http://localhost:7000/users')
    const employeeData = response.data;
    console.log(response.data)
    Setemployee(employeeData)
  } 

  getemployee()
}, [])

const inputHandler=(e)=>{
  SetEmp({
    ...emp,
    [e.target.name]:e.target.value,
   
  })

}
console.log('emp',emp)


const url = "http://localhost:7000/user";
    const createImage = (newImage) => axios.post(url, newImage);

    const createPost = async (post) => {
      try {
          await createImage(post);
      } catch (error) {
          console.log(error.message);
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
    SetArr([...arr,emp])
  };
  console.log('arr',arr); 

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
          resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
          reject(error);
      };
  });
};

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  setPostImage({ ...postImage, myFile: base64 });
};

  

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input type="Name" class="form-control" id="exampleInputName" placeholder="Enter name" onChange={inputHandler} name='name'/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputHandler} name='email'/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputBirthDate">Date Of Birth</label>
    <input type="BirthDate" class="form-control" id="exampleInputBirthDate" placeholder="Date of Birth" onChange={inputHandler} name='dob'/>
  </div>

  <div class="form-group">
    <label for="exampleImageUpload">Upload Image</label>
    <input type="File" class="form-control" id="exampleImageUpload" placeholder="Upload an Image" onChange={inputHandler} name='postImage'/>
    
  </div>
  
  <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
</form>
<CheckDetail emp={emp} arr={arr}/>
<EmployeeCard emp={emp} arr={arr}/>
        </div>
    )
}

export default AddDetails
