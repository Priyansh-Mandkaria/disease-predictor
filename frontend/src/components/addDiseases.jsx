import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const AddDiseaseForm = ({ onSubmit, onClose, postion = "fixed" }) => {
  const [diseaseName, setDiseaseName] = useState('');
  const [majorSymptom, setMajorSymptom] = useState('');
  const [minorSymptoms, setMinorSymptoms] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/addDisease/', {
        majorSymp :majorSymptom
        
    }).then(() => {
      console.log('Data sent successfully');
    }).catch((error) => {
      console.error('Error:', error);
    });
    // Prepare the data for submission
    const newData = {
      diseaseName,
      majorSymptom,
      minorSymptoms,
    };
    onSubmit(newData);
    // Clear the form fields after submission
    setDiseaseName('');
    setMajorSymptom('');
    setMinorSymptoms(['']);
    // Show alert after submission
    alert('Disease added successfully!');
  };

  const handleAddSymptom = () => {
    setMinorSymptoms([...minorSymptoms, '']);
  };

  const handleRemoveSymptom = (index) => {
    const updatedSymptoms = [...minorSymptoms];
    updatedSymptoms.splice(index, 1);
    setMinorSymptoms(updatedSymptoms);
  };

  const handleChangeSymptom = (value, index) => {
    const updatedSymptoms = [...minorSymptoms];
    updatedSymptoms[index] = value;
    setMinorSymptoms(updatedSymptoms);
  };

  return (
    <div className={`${postion} top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50`}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-5xl font-semibold mb-4">Add New Disease</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="diseaseName" className="block mb-2 font-semibold">Disease Name:</label>
          <input
            type="text"
            id="diseaseName"
            value={diseaseName}
            onChange={(e) => setDiseaseName(e.target.value)}
            className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <label htmlFor="majorSymptom" className="block mb-2 font-semibold">Major Symptom:</label>
          <input
            type="text"
            id="majorSymptom"
            value={majorSymptom}
            onChange={(e) => setMajorSymptom(e.target.value)}
            className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <label htmlFor="minorSymptoms" className="block mb-2 font-semibold">Minor Symptoms:</label>
          {minorSymptoms.map((symptom, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={symptom}
                onChange={(e) => handleChangeSymptom(e.target.value, index)}
                className="flex-1 border rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button type="button" onClick={() => handleRemoveSymptom(index)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddSymptom} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Symptom</button>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 bg-darkslategray-100 text-white px-4 py-2 rounded-md hover:bg-darkslategray-200 focus:outline-none focus:bg-gray">Close</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Add Disease</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDiseaseForm;