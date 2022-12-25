import { useState } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import { Form, Input, Button } from './SearchBar.styled.jsx';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const changeHandler = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (query === '') {
      Notify.failure(`Please enter the film name`, {
        position: 'center-top',
        width: '300px',
        fontSize: '14px',
        failure: {
          background: '#a55555',
        },
      });
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Input
          onChange={changeHandler}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
        />
        <Button type="submit">
          <span>
            <FiSearch size={25} />
          </span>
        </Button>
      </Form>
    </>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
