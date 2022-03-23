import '../App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
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
    <div className="searchbox">
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          <div className="searchimage">
            <img src="/Images/search.png" />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
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
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
