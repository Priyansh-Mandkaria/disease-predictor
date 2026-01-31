
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const ReportPage = () => {
//   const location = useLocation();
//   const preSymps = location.state.preSymps;
//   const [selectedDiseases, setSelectedDiseases] = useState([]);
//   const [diseases, setDiseases] = useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response= await axios.post('http://127.0.0.1:8000/getDiseases/', { preSymps });
//         const data = response.data;
//         setDiseases(data);
//         console.log(data);
      
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }

//     };

//     fetchData();
//   }, [preSymps]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-azure">
//       <h1 className="text-15xl mb-8 font-semibold">Report</h1>

//       <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-lg bg-white mt-4">
//         <h2 className="text-lg font-semibold mb-4">Diseases:</h2>
//         <ul>
//           {diseases.map((disease, index) => (
//             <li key={index} className="mb-2">{disease}</li>
//           ))}
//         </ul>
//       </div>

//       <Link to="/symptomchecker" className="mt-8 py-2 px-4 text-5xl font-semibold font-nunito-sans text-white text-left cursor-pointer pt-[11px] pb-[9px] pr-[21px] pl-6 bg-lightseagreen rounded-3xs shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-turquoise hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
//         Check Another Symptom
//       </Link>
//     </div>
//   );
// };

// export default ReportPage;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import AddDiseaseForm from '../components/addDiseases'; // Import the AddDiseaseForm component

const ReportPage = () => {
  const location = useLocation();
  const preSymps = location.state.preSymps;
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [showAddDiseaseForm, setShowAddDiseaseForm] = useState(false); // State to control the visibility of the AddDiseaseForm

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/getDiseases/', { preSymps });
        const data = response.data;
        setDiseases(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [preSymps]);

  // Function to handle the submission of new disease data
  const handleAddDisease = (newData) => {
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-azure">
      <h1 className="text-15xl mb-8 font-semibold">Report</h1>

      <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-lg bg-white mt-4">
        <h2 className="text-lg font-semibold mb-4">Diseases:</h2>
        <ul>
          {diseases.map((disease, index) => (
            <li key={index} className="mb-2">{disease}</li>
          ))}
        </ul>
      </div>

      {/* Conditional rendering of AddDiseaseForm */}
      {showAddDiseaseForm && <AddDiseaseForm onSubmit={handleAddDisease} onClose={() => setShowAddDiseaseForm(false)} />}

      {/* Button to toggle AddDiseaseForm visibility */}
      <button onClick={() => setShowAddDiseaseForm(!showAddDiseaseForm)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        {showAddDiseaseForm ? 'Hide Add Disease Form' : 'Add New Disease'}
      </button>

      <Link to="/symptomchecker" className="mt-8 py-2 px-4 text-5xl font-semibold font-nunito-sans text-white text-left cursor-pointer pt-[11px] pb-[9px] pr-[21px] pl-6 bg-lightseagreen rounded-3xs shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-turquoise hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
        Check Another Symptom
      </Link>
    </div>
  );
};

export default ReportPage;
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import AddDiseaseForm from '../components/addDiseases'; // Import the AddDiseaseForm component

// const ReportPage = () => {
//   const location = useLocation();
//   const preSymps = "";
//   const [selectedDiseases, setSelectedDiseases] = useState([]);
//   const [diseases, setDiseases] = useState([]);
//   const [showAddDiseaseForm, setShowAddDiseaseForm] = useState(true); // State to control the visibility of the AddDiseaseForm
//   const [diseaseNotFound, setDiseaseNotFound] = useState(true); // State to track if diseases were not found

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/getDiseases/', { preSymps });
//         const data = response.data;
//         if (data.length === 0) {
//           setDiseaseNotFound(true);
//         } else {
//           setDiseases(data);
//         }
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [preSymps]);

//   const handleAddDisease = (newData) => {
//     // Handle the submission of new disease data
//     // You can send the newData to your backend API or update the UI accordingly
//     console.log('New Disease Data:', newData);
//     // Close the AddDiseaseForm after submission
//     setShowAddDiseaseForm(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-azure">
//       <h1 className="text-15xl mb-8 font-semibold">Report</h1>

//       {diseaseNotFound ? (
//         <p className="text-lg text-red-600 mb-4">No diseases found.</p>
//       ) : (
//         <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-lg bg-white mt-4">
//           <h2 className="text-lg font-semibold mb-4">Diseases:</h2>
//           <ul>
//             {diseases.map((disease, index) => (
//               <li key={index} className="mb-2">{disease}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Conditional rendering of AddDiseaseForm */}
//       {showAddDiseaseForm && <AddDiseaseForm onSubmit={handleAddDisease} onClose={() => setShowAddDiseaseForm(false)} />}

//       {/* Button to show AddDiseaseForm if diseases were not found */}
//       {!diseaseNotFound && (
//         <button onClick={() => setShowAddDiseaseForm(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add New Disease</button>
//       )}

//       <Link to="/symptomchecker" className="mt-8 py-2 px-4 text-5xl font-semibold font-nunito-sans text-white text-left cursor-pointer pt-[11px] pb-[9px] pr-[21px] pl-6 bg-lightseagreen rounded-3xs shadow-[6px_4px_10px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-turquoise hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
//         Check Another Symptom
//       </Link>
//     </div>
//   );
// };

// export default ReportPage;