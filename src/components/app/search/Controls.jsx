import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  onSubmit,
  onInput,
  searchTerm,
  onPageClick,
  page,
  count,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input aria-label="input-search" value={searchTerm} onInput={onInput} />
        <button aria-label="control-button">Search</button>
      </form>
      <button onClick={() => onPageClick(-1)} disabled={page === 1}>
        Previous
      </button>
      <span>{page}</span>
      <button onClick={() => onPageClick(1)} disabled={page > count / 25}>
        Next
      </button>
    </div>
  );
};

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onPageClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Controls;
