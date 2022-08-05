import { nanoid } from 'nanoid';
export const ContactList = ({ contacts, filter, deleteItem }) => (
  <ul>
    {contacts
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
      .map(contact => (
        <li
          style={{ width: '275px', display: 'flex' }}
          id={contact.id}
          key={nanoid()}
        >
          {contact.name}: {contact.number}
          <input
            onClick={() => {
              deleteItem(contact.id);
            }}
            style={{ marginLeft: 'auto' }}
            type="button"
            value="Delete"
          />
        </li>
      ))}
  </ul>
);
