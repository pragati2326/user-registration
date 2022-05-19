import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import Typography from"@mui/material/Typography"
import Button from "@mui/material/Button";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const Userregistration = () => {
    // const[isLoading ,setIsLoading] = useState(true)
    // const[data,setData] = useState()



    // useEffect(()=>
    // {
    //     axios.get( `http://localhost:5000/users1`)
    // })
    const fetchApi = async () => {
        const response = await axios.get(`http://localhost:5000/users1`)
        return response;
    }

    const { data, isLoading } = useQuery("fetchApi",fetchApi)
    if(isLoading){
        console.log("data is loading..");
    }
    console.log(data?.data);

  return (
    <div>
   
    <Typography variant="h5">User Registration</Typography>
    <form>
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text" label="First Name" variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text" label="Last Name" variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text" label="Address" variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text" label="Email" variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text" label="Password" variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="Number" label="Contact No" variant="outlined"
      />
      <br />
      
     
      <Button variant="contained" color="primary"> Save </Button>
      <Link to="/text" >to text</Link>
    </form>
  </div>
   

  )
}

export default Userregistration
