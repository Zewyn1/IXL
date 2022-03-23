import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : '/search');
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src="/Image/search.png" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form className="d-flex me-auto" onSubmit={submitHandler}>
          <InputGroup>
            <FormControl
              type="text"
              name="q"
              id="q"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search"
              aria-label="Search Products"
              aria-describedby="button-search"
            ></FormControl>
            <Button variant="outline-primary" type="submit" id="button-search">
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup>
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}
