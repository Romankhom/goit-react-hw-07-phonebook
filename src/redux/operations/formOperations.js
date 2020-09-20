import axios from "axios";
import formAction from "../actions/formAction";

axios.defaults.baseURL = "http://localhost:5000"

const addContact = (name, number) => (dispatch) => {
  dispatch(formAction.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then((response) => {
      dispatch(formAction.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(formAction.addContactError));
};

const fetchContacts = () => (dispatch) => {
  dispatch(formAction.fetchContactsRequest());
   
  axios.get("/contacts") 
  .then(({data}) => dispatch(formAction.fetchContactsSuccess(data)))
  .catch((error) => dispatch(formAction.fetchContactsError(error)))
}

const removeContact = (id) => dispatch => {
  dispatch(formAction.removeContactRequest());

  axios.delete(`/contacts/${id}`)
  .then(() => dispatch(formAction.removeContactSuccess(id)))
  .catch((error) => dispatch(formAction.removeContactError(error)))
}

export default {
  addContact,
  fetchContacts,
  removeContact
};
