import React, { useState } from 'react';
import './App.css';
import BasicButtonGroup from './Components/demo.jsx'; 
import DividerVariants from './Components/list.jsx';
import Button from '@mui/material/Button';
import Axios from 'axios';


function App() {


  const [hotel, setHotel] = useState([]);

  const fetchUserData = () => {
    Axios
      .get("http://localhost:8080/api/v1/getuser/1").then((response) => {setUsers(response.data);
      })
  };

  const fetchSouthernData = () => {
    Axios
      .get("http://localhost:8080/api/v2/gethotel/100").then((response) => {setHotel(response.data);
      })
  };

  const fetchWesternData = () => {
    Axios
      .get("http://localhost:8080/api/v2/gethotel/200").then((response) => {setHotel(response.data);
      })
  };

  const fetchEasternData = () => {
    Axios
      .get("http://localhost:8080/api/v2/gethotel/300").then((response) => {setHotel(response.data);
      })
  };

  
  

  return (
    <>
    <BasicButtonGroup btnSouthern={fetchSouthernData} btnEastern={fetchEasternData} btnWestern={fetchWesternData}/>


    <div className='btnFetch'>
      <Button  variant="outlined" onClick={fetchUserData}>Fetch Data</Button>
    </div>
    
    <DividerVariants/>
    </>
  );
}

export default App;
