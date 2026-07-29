import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Category Select dropdown.
 * @param {string} value - Currently selected value (controlled)
 * @param {function} onChange - Change handler (receives event)
 * @param {Array} categories - Array of category objects { value, label } or strings
 * @param {string} placeholder - Default placeholder text
 * @param {string} name - Input name attribute
 * @param {string} className - Additional CSS classes
 * @param {boolean} required - Whether the field is required
 */
const CategorySelect = ({
  value = '',
  onChange,
  categories = [
    'Smartphone',
    'Laptop',
    'Vehicle',
    'Furniture',
    'Electronics',
    'Clothing',
    'Books',
    'Toys',
  ],
  placeholder = 'Select Category',
  name = 'category',
  className = '',
  required = false,
  disabled = false,
}) => {
  // Convert categories to uniform { value, label } format
  const categoryOptions = categories.map((cat) => {
    if (typeof cat === 'string') {
      return { value: cat.toLowerCase().replace(/\s+/g, '_'), label: cat };
    }
    // If already an object with value/label
    return { value: cat.value || cat.label, label: cat.label || cat.value };
  });

  return (
    <div className="w-full">
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-3 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition duration-150 ease-in-out
          bg-white text-gray-700
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-400'}
          ${className}
        `}
      >
        <option value="">{placeholder}</option>
        {categoryOptions.map(({ value: catValue, label }) => (
          <option key={catValue} value={catValue}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

CategorySelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }),
    ])
  ),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default CategorySelect;