import React from 'react';
import { useHistory } from 'react-router-dom';

import './Select.scss';

const Select = ({ list }) => {
  const history = useHistory();
  const handleChange = (id) => {
    history.push(`/users/photos/${id}`);
  };

  return (
    <select onChange={(event) => handleChange(event.target.value)}>
      {list.map((item) => (
        <option value={item.id}>
          { `${item.name} -
            ${item.email} -
            ${item.company.name}`
          }
        </option>
      ))}
    </select>
  );
};

export default Select;
