import React, { useState, useEffect } from 'react';

const Stats= () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [plantsDelivered, setPlantsDelivered] = useState(0);

  useEffect(() => {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    setYearsOfExperience(currentYear - startYear);
    setPlantsDelivered(0);
  }, []);

  return (
    <div className="p-4 flex items-center justify-center bg-[#1e1e1eec] text-white shadow-md rounded-md text-center w-[16vw]">
      <div>
        <h2 className="text-5xl font-normal ">
            {yearsOfExperience === 0 ? yearsOfExperience : `${yearsOfExperience}+`}
        </h2>
        <p className="text-xl">Years</p>
      </div>
      <div>
        <h2 className="text-5xl">{plantsDelivered}</h2>
        <p className="text-xl">Plants Delivered</p>
      </div>
    </div>
  );
};

export default Stats;
