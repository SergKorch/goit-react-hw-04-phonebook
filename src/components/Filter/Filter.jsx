import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ title, filter, onChange }) => {
  return (
    <div>
      <label>
        <p>{title}</p>
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
