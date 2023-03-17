import React, {useState} from 'react';
import axios from 'axios';
import Card from '../../pages/home/Card'; 

import CreatableSelect from 'react-select/creatable';
import { stateOptions } from './data.ts';


export default function Dashboard() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit1(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data.file);
    });

  }

  return(
    <>
    <h2>Dashboard</h2>

    <CreatableSelect isMulti options={stateOptions} />
    
    <form onSubmit={handleSubmit1}>
      <h1>React File Upload</h1>
      <input type="file" onChange={handleChange}/>
      <button type="submit">Upload</button>
    </form>

    <br></br>
    <br></br>
    <br></br>
    <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <Card link="www.google.com" title="Title" imgsrc="https://images.unsplash.com/photo-1658191700559-a38059e1da9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
    </>
  );
}