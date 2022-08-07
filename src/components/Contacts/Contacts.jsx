import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactsList, ContactsItem } from './Contacts.styled';
import ContactName from 'components/ContactItem/ContaciItem';
import { fetchGetContact } from 'redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetContact());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const getVisibleName = () => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalazedFilter)
    );
  };
  return (
    <ContactsList>
      {getVisibleName().map(item => (
        <ContactsItem key={item.id}>
          <ContactName name={item.name} tel={item.phone} id={item.id} />
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
