export default function Contact({ contact, deleteItem }) {
  return (
    <li
      style={{ width: '275px', display: 'flex' }}
      id={contact.id}
      key={contact.id}
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
  );
}
