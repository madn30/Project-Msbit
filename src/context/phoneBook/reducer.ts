import { utilService } from "../../services/utils.service";
import { PhoneBookState, Action } from "./types";

export const initialPhoneBookState: PhoneBookState = {
  contacts: [], 
};

export const phoneBookReducer = (
  state: PhoneBookState,
  action: Action
): PhoneBookState => {
  switch (action.type) {

      case "UPDATE_CONTACT":
        if (action.payload._id) {
          return {
            ...state,
            contacts: state.contacts.map(contact =>
              contact._id === action.payload._id ? action.payload : contact
            )
          };
        } else {
          const newContact = {
            ...action.payload,
            _id: utilService.makeId()
          };
          return {
            ...state,
            contacts: [...state.contacts, newContact]
          };
        }
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action.payload)
      };
    default:
      return state;
  }
};
