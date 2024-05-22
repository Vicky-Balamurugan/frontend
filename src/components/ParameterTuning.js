import React from 'react';

const ParameterTuning = ({ parameters, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Tune Parameters</h2>
      <div className="flex flex-col gap-4">
        {Object.keys(parameters).map((param) => (
          <div key={param}>
            <label className="block text-sm font-medium text-gray-700">
              {param.charAt(0).toUpperCase() + param.slice(1)}
            </label>
            <input
              type="number"
              name={param}
              value={parameters[param]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParameterTuning;
