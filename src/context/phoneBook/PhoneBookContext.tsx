import React, { createContext, useReducer, FC } from "react";

import {  PhoneBookContextValue } from "./types";
import { phoneBookReducer, initialPhoneBookState } from "./reducer";
import { removeContactAction, updateContactAction } from "./actions";
import { Contact } from "../../types/contact";

export const PhoneBookContext = createContext<PhoneBookContextValue>({
  ...initialPhoneBookState,
  updateContact: () => {},
  removeContact: () => {},
});

export const PhoneBookProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(phoneBookReducer, initialPhoneBookState);


  const updateContact = (contact: Contact) => {
    dispatch(updateContactAction(contact));
  };
  const removeContact = (contactId:string) => {
    dispatch(removeContactAction(contactId));
  };
  return (
    <PhoneBookContext.Provider value={{ ...state,  updateContact,removeContact }}>
      {children}
    </PhoneBookContext.Provider>
  );
};

export default PhoneBookContext;
