import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate, BrowserRouter as Router} from 'react-router-dom';
import { useLocation } from "react-router-dom";

const DropdownComponent = ({symptoms}) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/getMajorSymptoms/',{symptoms});
        const data = response.data;
        //console.log(data);
        // setOptions(data.map(item => ({ value: item.id, label: item.title })));
        // console.log(data.map(item => ({ value: item.id, label: item.title })))
        setOptions(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddOption = () => {
    if (selectedValue) {
      setSelectedOptions([...selectedOptions, selectedValue]);
      setSelectedValue('');
    }
  };
  const handleNext = async () => {
    try {
      const preSymps = selectedOptions;
      await axios.post('http://127.0.0.1:8000/getPreSymptoms/',{preSymps});
      
    } catch (error) { 
      console.error('Error fetching data:', error);
    }
    
  };
  
  return (
    
    <div className="absolute h-full top-[0px] bottom-[0px] left-[30%] w-[398.6px]">
        
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="w-full h-[50px]  absolute left-[6px] top-[50%] bg-white [transform:scale(1.322)] font-semibold inline-block rounded-xl outline-none border-gray-400 border px-4 py-2 text-black  shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border"
      >
        <option value="">Symptoms...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddOption}
        className="absolute top-[50%] text-black h-[50px] top-[0px] bottom-[0px] left-[500px] w-[65.9px] bg-darkgray"
      > ADD
      </button>
      {selectedOptions.length > 0 && (
        <div className="absolute w-full text-black bg-white border border-gray-400 rounded-xl p-2 [outline:none] top-[90px] shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border py-[26.30000000000001px] px-[26px] font-inter text-[16px] border-solid border-gray-400">
          {selectedOptions.map((option, index) => (
            <div key={index} className="border-b  border-gray-400 py-1">
              {option}      
            </div>
          ))}
        </div>
      )}
      <Link to="/reportpage"  state ={{preSymps: selectedOptions}}
        //  onClick={handleNext}
        className="absolute top-[60%] text-black h-[50px] top-[0px] bottom-[0px] left-[500px] w-[65.9px] bg-darkgray"
      > Next
      </Link>
      {console.log(selectedOptions)}
    </div>
  );
};

export default DropdownComponent;
