import PropTypes from 'prop-types';

import css from './filter-phonebook.module.css';

const FilterPhonebook = ({ onChange, value }) => {
  return (
    <form className={css.wrapperFilter}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
	  value={value}
        className={css.inputFilter}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </form>
  );
};

FilterPhonebook.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterPhonebook;
