import React, { useState } from 'react'

const TodoList = () => {

  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>

      <h2>Input Profile Name</h2>
      <input name='name' value={profile.name} onChange={handleChange}/>
      <h2>Input Profile Age</h2>
      <input name='age' value={profile.age} onChange={handleChange}/>
    </div>
  )
}

export default TodoList
