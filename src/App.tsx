import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const getData = () => {
    return axios.get('https://randomuser.me/api/?results=20').then(res => {
      console.log('res', res.data.results);
    });
  };

  const [data, setData] = useState('0');
  const UpdateData = () => setData + 1;
  return (
    <div>
      <p>{data}</p>
      <h1 onClick={() => UpdateData}>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
