import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({name, setOptionValue, currentValue}) => (
  <div 
    className={styles.component}
    value={currentValue}
  >
    <input 
      className={styles.input} 
      type='text' 
      placeholder={name}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);
OrderOptionText.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;