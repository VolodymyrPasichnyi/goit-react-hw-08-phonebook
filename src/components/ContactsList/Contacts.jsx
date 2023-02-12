import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import css from '../ContactsList/Contacts.module.css'


export const Contacts = ({ name, number, id }) => {
    const dispatch = useDispatch()

    return (
        <div className={css.contactList}>
            <p className={css.name}>{name}: {number}</p>
            <button 
                className={css.Btn} onClick={() => dispatch(deleteContacts(id))}>Delete</button>
        </div>    
    )
}

Contacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}