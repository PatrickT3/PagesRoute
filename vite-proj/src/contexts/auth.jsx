/* eslint-disable react/prop-types */
import { createContext } from 'react';

const Context = createContext();

const Auth = ({ children }) => {
  const vari = "Aqui o contexto";
  return (
    <Context.Provider value={vari}>
      {children}
    </Context.Provider>
  );
};

export { Auth, Context };
/* eslint-enable react/prop-types */
