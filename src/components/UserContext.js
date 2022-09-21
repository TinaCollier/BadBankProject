import { createContext, useState } from 'react';

const user = {
  id: 0,
  name: 'Tinabear',
  email: '',
  password: '',
  balance: 0,
  transactionHistory: [],
  loggedin: false
};

const UserContext = createContext(user);

export default UserContext;