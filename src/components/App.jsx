import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Filter/Filter";


export const App = () => {
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {isLoading && !error && <p>Loading...</p>}
      </div>
  )
}



