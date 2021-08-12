import Contact from "../Contact/Contact";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} />
            <button type="button" onClick={() => onDeleteContact(item.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
