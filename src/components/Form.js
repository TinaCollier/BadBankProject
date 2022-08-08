import React from 'react';
import { useEffect, useState, useContext } from 'react';
import useForm from "./UseForm";
import validate from './LoginValidation';
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';
import UserContext from './UserContext';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
    navigate('/newaccount');
  }

  function handleCreate() {
    console.log( values.name, values.email, values.password);
    setName(values.name);
    setEmail(values.email);
    setPassword(values.password);
  }

  useEffect(() => {
    console.log('this is ', name, email, password);
    context.name = name;
    context.email = email;
    context.password = password;
    context.balance = 100;
    context.loggedin = true;

  }, [name]
  )


  return (
    <div className="section is-fullheight" >
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input 
                  
                  autoComplete="off" 
                  className={`input ${errors.name && 'is-danger'}`} 
                  type="name" 
                  name="name" 
                  onChange={handleChange} 
                  value={values.name || ''} 
                  required />
                  {errors.name && (
                    <p className="help is-danger">
                      {errors.name}
                    </p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input 
                  autoComplete="off" 
                  className={`input ${errors.email && 'is-danger'}`} 
                  type="email" 
                  name="email" 
                  onChange={handleChange} 
                  value={values.email || ''} 
                  required />
                  {errors.email && (
                    <p className="help is-danger">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input 
                  className={`input ${errors.password && 'is-danger'}`} 
                  type="password" 
                  name="password" 
                  onChange={handleChange} 
                  value={values.password || ''} 
                  required />
                </div>
                {errors.password && (
                  <p className="help is-danger">
                    {errors.password}
                  </p>
                )}
              </div>
              <Button onClick={ handleCreate }
              type="submit" 
              className="button is-block is-info is-fullwidth">
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;