import React from 'react'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const contactList = useSelector(state => state.contactList)
  return (
    <div>
      {contactList.map((item, index) => (
        <ContactItem item={item} key={index} />
      ))}
    </div>
  )
}

export default ContactList
