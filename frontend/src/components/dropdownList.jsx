import React, { useState, useEffect } from 'react';

const DropdownComponent = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setOptions(data.map(item => ({ value: item.id, label: item.title })));
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

  return (
    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[398.6px]">
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="  w-[500.9px] h-[62.2px]  absolute left-[6px] top-[4px] bg-white [transform:scale(1.322)] font-semibold inline-block rounded-xl outline-none border-gray-400 border px-4 py-2 text-black  shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] box-border"
      >
        <option value="">Symptoms...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddOption}
        className="absolute text-black h-full top-[0px] bottom-[0px] left-[500px] w-[65.9px] bg-darkgray"
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
    </div>
  );
};

export default DropdownComponent;
