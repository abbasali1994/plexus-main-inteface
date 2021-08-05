import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "./index.scss";
import { PieChart } from 'react-minimal-pie-chart';

import { currentTheme } from '../../redux/themeSlice';

const Pie = ({ percentage, size }) => {
  
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--pie-height", size + "px");
  }, [size]);

  const theme = useSelector(currentTheme);
  
  const data = [
    { title: 'First', value: percentage, color: (theme === "light" ? '#4ea4d3' : '#236EDC') },
    { title: 'Second', value: 100.0 - percentage, color: (theme === "light" ? '#C4C4C4' : '#4F4F4F') },
  ];

  return (
    <div>
      <PieChart data={data} className="pie-chart"/>
    </div>
  )
};

export default Pie;