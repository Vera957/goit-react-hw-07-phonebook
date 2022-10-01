import React from "react";
import { Button, ListItem } from "style/style";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "redux/operations";
import { selectContactsArr } from "redux/selectors";


export const ContactList = ({ children }) => {

    const deleteName = (id) => {
        dispatch(deleteContact(id));
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const selectFilter = state => state.filter;
    const contactsList = useSelector(selectContactsArr);
    const que = useSelector(selectFilter);
    
    if (contactsList.lendth === 0) return;

    let filteredList = que === '' ?
        contactsList :
        contactsList.filter(item => item.name.toLowerCase().includes(que));

    return (<>
        <h2>Contacts</h2>
        {children}
        <ul>
            {filteredList.map((item) =>
                <ListItem key={item.id}> {item.name}: {item.phone}
                    <Button type="button" id={item.phone} onClick={() => deleteName(item.id)}>
                        Delete
                    </Button>
                </ListItem>)}
        </ul>
    </>)
}


