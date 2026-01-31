// import React, { useState } from 'react';

// const AgeGenderForm = () => {
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');

//   const handleAgeChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="age">Age:</label>
//       <input
//         type="number"
//         id="age"
//         value={age}
//         onChange={handleAgeChange}
//         placeholder="Enter your age"
//       />

//       <label htmlFor="gender">Gender:</label>
//       <select id="gender" value={gender} onChange={handleGenderChange}>
//         <option value="">Select Gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>

//       <div>
//         <p>Entered Age: {age}</p>
//         <p>Selected Gender: {gender || 'Not selected'}</p>
//       </div>
//     </div>
//   );
// };

// // export default AgeGenderForm;
// import React, { useState } from 'react';
// import axios from "axios"; 
// const AgeGenderForm = () => {
//   // State variables to store age and gender
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   state = { 
//     details: [], 
//     age: "", 
//     gender: "", 
// }; 

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any desired actions with the submitted data here
//     console.log('Submitted Age:', age);
//     console.log('Submitted Gender:', gender);
//     // Reset the form after submission if needed
//     setAge('');
//     setGender('');

//     e.preventDefault(); 
  
//         axios 
//             .post("http://localhost:8000/info/", { 
//                 age: this.state.age, 
//                 gender: this.state.gender, 
//             }) 
//             .then((res) => { 
//                 this.setState({ 
//                     age: "", 
//                     gender: "", 
//                 }); 
//             }) 
//             .catch((err) => {}); 
//   };
//   componentDidMount();{ 
//     let data; 

//     axios 
//         .get("http://localhost:8000/info/") 
//         .then((res) => { 
//             data = res.data; 
//             this.setState({ 
//                 details: data, 
//             }); 
//         }) 
//         .catch((err) => {}); 
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Age:
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Gender:
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AgeGenderForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AgeGenderForm = () => {
  // State variables to store age and gender
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [details, setDetails] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/info/', {
        age: age,
        gender: gender,
      })
      .then((res) => {
        // Handle success if needed
        console.log('Submission successful:', res.data);

        // Clear form after submission
        setAge('');
        setGender('');
      })
      .catch((err) => {
        // Handle error if needed
        console.error('Submission failed:', err);
      });
  };

  useEffect(() => { 
    // Fetch data on component mount
    axios
      .get('http://localhost:8000/info/')
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        // Handle error if needed
        console.error('Error fetching data:', err);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display details if available */}
      {details.length > 0 && (
        <div>
          <h2>Details:</h2>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                Age: {detail.age}, Gender: {detail.gender}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgeGenderForm;
