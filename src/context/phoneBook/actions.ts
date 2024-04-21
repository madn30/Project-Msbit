import {  REMOVE_CONTACT, UPDATE_CONTACT } from ".";
import { Contact } from "../../types/contact";

export const updateContactAction = (contact: Contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const removeContactAction = (contactId: string) => ({
  type: REMOVE_CONTACT,
  payload: contactId,
});