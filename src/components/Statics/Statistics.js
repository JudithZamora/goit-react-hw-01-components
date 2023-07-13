import React from 'react';
import PropTypes from 'prop-types';
import 'index.css';

const Statistics = ({ title, stats }) => {
  
  const colors = ['#51a8d1', '#b56fee', '#d34ca6', '#51a8d1'];

  return (
    <section className="statistics">
      {title && (
        <h2 className="title">{title}</h2>
      )}
      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li className="item" key={stat.id}>
            <span className="label" style={{ backgroundColor: colors[index % colors.length] }}>
              {stat.label}
            </span>
            <span className="percentage" style={{ backgroundColor: colors[index % colors.length] }}>
              {stat.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
