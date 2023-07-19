import axios from 'axios';
import React, { useState } from 'react';
import './donar.css'

const Donar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [age,setAge]=useState('');
  const [gender,setGender]=useState('');
  const [bloodgroup,setBloodGroup]=useState('');
  const [units,setUnits]=useState('');
  const [city,setCity]=useState('');
  const [state,setSt]=useState('');
  const [dist,setDist]=useState('');
  const [pincode,setPinCode]=useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email,phone,age,gender,bloodgroup,units,city,state,dist,pincode };

    try {
      const response = await axios.post('http://localhost:4000/donar', formData);

      if (response.status === 201) {
        console.log('Form data submitted successfully!');
        setName(" ");
        setEmail('');
        setPhone('');
        setAge('');
        setBloodGroup('');
        setCity('');
        setDist('');
        setGender('');
        setPinCode('');
        setSt('');
        setUnits('');
        
      } else {
        console.error('Failed to submit form data.');
      }
      
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className='bgcon' >
                  <h1>Blood Donation Form</h1>
                  <form className='formbg' onSubmit={handleSubmit} >
    <label forName="name">Name:</label>
    <input type="text" id="name" name="name" 
    onChange={(e) => setName(e.target.value)}
 required
    ></input>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" 
    onChange={(e) => setEmail(e.target.value)}
    required></input>
    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone"
    onChange={(e) => setPhone(e.target.value)}
    required />
    <label for="age">Age:</label>
    <input type="text" id="age" name="age"
    onChange={(e) => setAge(e.target.value)}
    required />

    <label for="gender">Gender:</label>
    <div class="radio-group">
     <label >
      <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
      Male
      <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
      Female
      <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
      Other
    </label>
    </div>
    
    <label for="blood_group">Blood Group:</label>
    <select id="blood_group" name="blood_group" onChange={(e) => setBloodGroup(e.target.value)} required>
      <option value="">Select</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
  
    <label for="units">No of Units:</label>
    <input type="text" id="units" name="units" onChange={(e) => setBloodGroup(e.target.value)} required></input>

    <label for="city">City</label>
    <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} required></input>
    <label for="district">District</label>
    <input type="text" id="district" name="district" onChange={(e) => setDist(e.target.value)} required></input>
    <label for="state">State</label>
    <input type="text" id="state" name="state" onChange={(e) => setSt(e.target.value)} required></input>
    <label for="country">Country</label>
    <input type="text" id="country" name="country" required></input>
    <label for="pincode">Pincode</label>
    <input type="text" id="pincode" name="pincode" onChange={(e) => setPinCode(e.target.value)} required></input>

    
    <input type="submit"  Submit/>
    </form>
    </div>
  );
};

export default Donar;