import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const PatientVitals = () => {
//     // const [temp, setTemp] = useState('');
//     // const [bp, setBp] = useState('');
//     // const [diabetes, setDiabetes] = useState('');
//     // const [weight, setWeight] = useState('');
//     // const [height, setHeight] = useState('');
//     const [vitals, setVitals] = useState({
//         temp: '',
//         bp: '',
//         diabetes: '',
//         height: '',
//         weight: '',
//       });
//     const [patientHistory, setPatientHistory] = useState(null);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVitals((prevVitals) => ({
//       ...prevVitals,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Make a POST request to the backend
//     axios.post('http://127.0.0.1:8000/patVitals/', {
//         temp :vitals.temp,
//         bp:vitals.bp,
//         diabetes :vitals.diabetes,
//         height : vitals.height,
//         weight :vitals.weight
//     }).then(() => {
//       console.log('Data sent successfully');
//     }).catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   const handleHistoryClick = () => {
//     axios.post('http://127.0.0.1:8000/patHistory/')
//     .then((response) => {
//       console.log('Data received successfully',response.data);
//       const patientHistory = response.data.histories[0]; // Assuming there's only one history for simplicity
//       setPatientHistory(response.data.histories[0]);
      
//       // console.log(history);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };


//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-azure">
//       <h1 className="text-15xl font-semibold mb-8">Enter Patient Vitals</h1>
      // <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
      //   <div className="grid grid-cols-2 gap-4">
      //     <div>
      //       <label htmlFor="temperature" className="block text-gray-700">Temperature (°C)</label>
      //       <input
      //         type="text"
      //         id="temp"
      //         name="temp"
      //         value={vitals.temp}
      //         onChange={handleChange}
      //         className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      //         required
      //       />
      //     </div>
      //     <div>
      //       <label htmlFor="bloodPressure" className="block text-gray-700">Blood Pressure (mmHg)</label>
      //       <input
      //         type="text"
      //         id="bp"
      //         name="bp"
      //         value={vitals.bp}
      //         onChange={handleChange}
      //         className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      //         required
      //       />
      //     </div>
      //     <div>
      //       <label htmlFor="diabetes" className="block text-gray-700">Diabetes</label>
      //       <input
      //         type="text"
      //         id="diabetes"
      //         name="diabetes"
      //         value={vitals.diabetes}
      //         onChange={handleChange}
      //         className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      //         required
      //       />
      //     </div>
      //     <div>
      //       <label htmlFor="height" className="block text-gray-700">Height (cm)</label>
      //       <input
      //         type="text"
      //         id="height"
      //         name="height"
      //         value={vitals.height}
      //         onChange={handleChange}
      //         className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      //         required
      //       />
      //     </div>
      //     <div>
      //       <label htmlFor="weight" className="block text-gray-700">Weight (kg)</label>
      //       <input
      //         type="text"
      //         id="weight"
      //         name="weight"
      //         value={vitals.weight}
      //         onChange={handleChange}
      //         className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      //         required
      //       />
      //     </div>
      //   </div>
      //   <div className="mt-4">
      //     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            
      //       Submit
      //     </button>
      //   </div>
      // </form>
//       <div className='mt-4'>
//           <button type="button" onClick={handleHistoryClick} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//             Patient's History
//           </button>
//           </div>
//           {patientHistory && (
//         <div className="mt-8 w-full max-w-md bg-white rounded-lg shadow-lg p-4">
//           <h2 className="text-xl font-semibold mb-2">Patient's History</h2>
//           <p>Temperature: {patientHistory.vi_temp} °C</p>
//           <p>Blood Pressure: {patientHistory.vi_bp} mmHg</p>
//           <p>Diabetes: {patientHistory.vi_bsl}</p>
//           <p>Height: {patientHistory.vi_height} cm</p>
//           <p>Weight: {patientHistory.vi_weight} kg</p>
//         </div>
//       )}
//           <div className='mt-4'>
//           <Link to='/inputpage'><button type="button" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//             Next
//           </button></Link>
//           </div>
//     </div>
//   );    
// };

// export default PatientVitals;

const PatientVitals = () => {
  const [vitals, setVitals] = useState({
    temp: '',
    bp: '',
    diabetes: '',
    height: '',
    weight: '',
  });
  const [patientHistories, setPatientHistories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVitals((prevVitals) => ({
      ...prevVitals,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Make a POST request to the backend
    axios.post('http://127.0.0.1:8000/patVitals/', vitals)
      .then(() => {
        console.log('Data sent successfully');
        alert('Patient vitals saved')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleHistoryClick = () => {
    axios.post('http://127.0.0.1:8000/patHistory/')
      .then((response) => {
        console.log('Data received successfully', response.data);
        setPatientHistories(response.data.histories);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-azure">
      <h1 className="text-15xl font-semibold mb-8">Enter Patient Vitals</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="temperature" className="block text-gray-700">Temperature (°C)</label>
            <input
              type="text"
              id="temp"
              name="temp"
              value={vitals.temp}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="bloodPressure" className="block text-gray-700">Blood Pressure (mmHg)</label>
            <input
              type="text"
              id="bp"
              name="bp"
              value={vitals.bp}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="diabetes" className="block text-gray-700">Diabetes</label>
            <input
              type="text"
              id="diabetes"
              name="diabetes"
              value={vitals.diabetes}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-gray-700">Height (cm)</label>
            <input
              type="text"
              id="height"
              name="height"
              value={vitals.height}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-gray-700">Weight (kg)</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={vitals.weight}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            
            Submit
          </button>
        </div>
      </form>
      
      <div className='mt-4'>
        <button type="button" onClick={handleHistoryClick} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Patient's History
        </button>
      </div>
      
      {/* Display patient histories */}
      {patientHistories.map((history, index) => (
        <div key={index} className="mt-8 w-full max-w-md bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Patient's History #{index + 1}</h2>
          <p>Temperature: {history.vi_temp} °C</p>
          <p>Blood Pressure: {history.vi_bp} mmHg</p>
          <p>Diabetes: {history.vi_bsl}</p>
          <p>Height: {history.vi_height} cm</p>
          <p>Weight: {history.vi_weight} kg</p>
        </div>
      ))}
      
      {/* Next button */}
      <div className='mt-4'>
        <Link to='/inputpage'>
          <button type="button" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Next
          </button>
        </Link>
      </div>
    </div>
  );    
};

export default PatientVitals;



// import React, { useState } from "react";

// const PatientVitals = () => {
// const [vitals, setVitals] = useState({
//     temperature: "",
//     bloodPressure: "",
//     diabetes: "",
//     height: "",
//     weight: "",
// });

// const [patientHistory, setPatientHistory] = useState([]);
// const [showHistoryButton, setShowHistoryButton] = useState(true);

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVitals((prevVitals) => ({
//     ...prevVitals,
//     [name]: value,
//     }));
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle submitting vitals to the database
//     // For demonstration purposes, let's just navigate to the next ptemp
//     // history.push('/next-ptemp');
// };

// const handleHistoryClick = () => {
//     // Simulating fetching patient history from the database
//     const sampleHistory = [
//     {
//         date: "2024-03-15",
//         vitals: {
//         temperature: "37.2",
//         bloodPressure: "120/80",
//         diabetes: "Normal",
//         height: "170",
//         weight: "65",
//         },
//         diseases: ["Fever", "Cold"],
//     },
//     {
//         date: "2024-03-10",
//         vitals: {
//         temperature: "36.8",
//         bloodPressure: "110/75",
//         diabetes: "Normal",
//         height: "170",
//         weight: "64",
//         },
//         diseases: ["Headache"],
//     },
//     {
//         date: "2024-03-05",
//         vitals: {
//         temperature: "38.0",
//         bloodPressure: "130/85",
//         diabetes: "High",
//         height: "170",
//         weight: "66",
//         },
//         diseases: ["Diabetes", "Hypertension"],
//     },
//     ];

//     setPatientHistory(sampleHistory);
//     setShowHistoryButton(false);
// };

// return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-azure">
//     <h1 className="text-15xl text-gray font-semibold mb-8">Enter Patient Vitals</h1>
//     <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl p-10  bg-white rounded-lg shadow-lg"
//     >
//         <div className="grid grid-cols-2 gap-4">
//         {Object.keys(vitals).map((key) => (
//             <div key={key}>
//             <label htmlFor={key} className="block text-gray-700">
//                 {key.charAt(0).toUpperCase() + key.slice(1)}
//             </label>
//             <input
//                 type="text"
//                 id={key}
//                 name={key}
//                 value={vitals[key]}
//                 onChange={handleChange}
//                 className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//             />
//             </div>
//         ))}
//         </div>
//         <div className="mt-4">
//         <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//             Next
//         </button>
//         </div>
//     </form>
//     <div className="mt-4">
//         {" "}
//         {showHistoryButton && (
//         <button
//             type="button"
//             onClick={handleHistoryClick}
//             className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//             Patient's History
//         </button>
//         )}
//     </div>

//     {patientHistory.length > 0 && (
//         <div className="mt-4 bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-2">Patient's History</h2>
//         {patientHistory.map((entry, index) => (
//             <div key={index} className="mb-4">
//             <p className="text-lg font-semibold">Date: {entry.date}</p>
//             <p className="mt-2 font-semibold">Vitals:</p>
//             <ul className="list-disc pl-8">
//                 {Object.entries(entry.vitals).map(([key, value]) => (
//                 <li key={key}>{${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}}</li>
//                 ))}
//             </ul>
//             <p className="mt-2 font-semibold">Diseases:</p>
//             <ul className="list-disc pl-8">
//                 {entry.diseases.map((disease, idx) => (
//                 <li key={idx}>{disease}</li>
//                 ))}
//             </ul>
//             </div>
//         ))}
//         </div>
//     )}
//     </div>
// );
// };

// export default PatientVitals;