import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsText, Tel, ButtonDelete } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/operations';
// import { fetchDeleteContact } from 'redux/operations';

const ContactName = ({ name, tel, id }) => {
  // const dispatch = useDispatch();
  const [deleteContakt, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ContactsText>
      {name}: <Tel>{tel}</Tel>
      <ButtonDelete onClick={() => deleteContakt(id)} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </ButtonDelete>
    </ContactsText>
  );
};

ContactName.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  id: PropTypes.string,
};
export default ContactName;
