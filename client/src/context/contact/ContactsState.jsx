import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        type: "Professional",
        name: "Sara Smith",
        email: "ssmith@gmail.com",
        phone: "444-444-4444",
      },
      {
        id: 2,
        type: "personal",
        name: "Ted Johnson",
        email: "ted@gmail.com",
        phone: "222-222-2222",
      },
      {
        id: 3,
        type: "personal",
        name: "Melissa Williams",
        email: "missy@gmail.com",
        phone: "333-333-3333",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};
export default ContactState;
