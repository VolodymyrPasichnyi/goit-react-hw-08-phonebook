import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactsList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchContacts } from "redux/contacts/operations"


const Contacts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts)
    }, [dispatch])

    return (
        <div>
            <ContactForm/>
            <Filter/>
            <ContactList/>
        </div>
    )
}

export default Contacts