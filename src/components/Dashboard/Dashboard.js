import React from 'react';
import Card from '../../pages/home/Card'; 

export default function Dashboard() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return(
    <>
    <h2>Dashboard</h2>
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