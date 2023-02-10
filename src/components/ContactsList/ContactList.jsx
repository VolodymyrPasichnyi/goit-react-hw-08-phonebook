import { useSelector } from 'react-redux';
import { selectFilter, selectItems } from 'redux/selectors';
import { Contacts } from './Contacts'

export const ContactList = () => {
    const contacts = useSelector(selectItems)
    const filters = useSelector(selectFilter)

    const filterUser = () => {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()))
    }

    const users = filters === '' ? contacts : filterUser()

    return (
      <div>         
      {users.map(({ id, name, number }) => {
        return (
          <Contacts
                key={id}
                name={name}
                number={number}
                id={id}
          />
        )
      })}   
      </div>
    )
}
