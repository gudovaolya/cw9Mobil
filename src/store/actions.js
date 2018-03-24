import * as actionTypes from './actionTypes';
import axios from 'axios';

export const requestStart = () => {
    return {type: actionTypes.REQUEST_START}
};

export const requestError = () => {
    return {type: actionTypes.REQUEST_ERROR}
};

export const contactRrequestSucces = (contactsData) => {
    return {type: actionTypes.CONTACTS_REQUEST_SUCCES, contacts: contactsData}
};

export const getContacts = () => {
    return dispatch => {
        dispatch(requestStart());
        axios.get('contacts.json').then(response => {
            const result = response.data;
            let contacts = Object.keys(result).map(contactId => {
                return ({
                    key: contactId,
                    photo: result[contactId].photo,
                    username: result[contactId].username,
                    phone: result[contactId].phone,
                    email: result[contactId].email
                })
            });
            dispatch(contactRrequestSucces(contacts));
        }, error => {
            dispatch(requestError());
        })

    }
};

export const showContactInfo = (contact) => {
    return {type: actionTypes.SHOW_CONTACT_INFO, clickedContact: contact}
};

