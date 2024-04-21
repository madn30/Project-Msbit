import { useContext, useState } from "react";
import { PhoneBookContext } from "../context/phoneBook";
import { Contact } from "../types/contact";
import DropdownMenu from "../components/MenuList";

export default function ContactIndex() {
  const { contacts, removeContact, updateContact } =
    useContext(PhoneBookContext);
  const [openMenuContactId, setOpenMenuContactId] = useState<string | null>(
    null
  );
  const handleDelete = (contactId: string) => {
    setOpenMenuContactId(contactId);
  };

  const handleEdit = (contact: Contact) => {
    const newName = prompt("Edit name", contact.name);
    const newEmail = prompt("Edit email address", contact.email);
    const newOrganisation = prompt("Edit organisation", contact.organisation);
    const newMobile = prompt("Edit mobile", contact.mobile);

    const updatedContact = {
      ...contact,
      name: newName || "",
      email: newEmail || "",
      organisation: newOrganisation || "",
      mobile: newMobile || "",
    };
    updateContact(updatedContact);
    alert(`${updateContact.name} updated successfully`);
  };

  const handleRemoveSelection = (selection: string, contact: Contact) => {
    if (selection === "Yes") {
      removeContact(contact._id as string);
      alert(`${contact.name} updated successfully`);
    }
    setOpenMenuContactId(null);
  };
  if (!contacts.length) return <div>No contacts to display</div>;
  return (
    <section className="contact-list">
      <h1>Contact List</h1>
      <div className="contact-list-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Organisation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact._id || index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.organisation}</td>
              <td>
                <button onClick={() => handleDelete(contact._id as string)}>
                  Remove
                </button>
                {openMenuContactId === contact._id && (
                  <DropdownMenu
                    onSelection={(selection) =>
                      handleRemoveSelection(selection, contact)
                    }
                  />
                )}
                <button onClick={() => handleEdit(contact)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
}
