import React, {createContext, useReducer} from 'react'
import auth from './reducers/auth';
import authState from './initialStates/authState'
import contacts from './reducers/contacts';


const GlobalContext = createContext({});


const GlobalProvider = ({children}) => {

    const [auth, authDispatch]=useReducer(auth, authState);
    const [contactsState, contactsDispatch]=useReducer(contacts, contactsState);




    return <GlobalContext.Provider>{children}</GlobalContext.Provider>
};