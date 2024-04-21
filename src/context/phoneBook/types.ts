import { Contact } from "../../types/contact";

export interface PhoneBookState {
  contacts: Contact[];
}

export interface PhoneBookContextValue extends PhoneBookState {
  updateContact: (contact: Contact) => void;
  removeContact: (contactId: string) => void;
}

export type Action =
| { type: typeof UPDATE_CONTACT; payload: Contact }
| { type: typeof REMOVE_CONTACT; payload: string };

export const UPDATE_CONTACT = "UPDATE_CONTACT" as const;
export const REMOVE_CONTACT = "REMOVE_CONTACT" as const;
