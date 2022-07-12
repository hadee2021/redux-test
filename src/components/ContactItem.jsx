import React from 'react'

const ContactItem = ({item}) => {
  console.log(item)
  return (
    <div className='contact-item'>
      <div>
        <img style={{width: '80px'}} src='/PIC/01.png' />
      </div>
      <div>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </div>
    </div>
  )
}

export default ContactItem