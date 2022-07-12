import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useDispatch()
  const addContact = (event) => {
    event.preventDefault()
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}})
    setName('')
    setPhoneNumber('')
    }
  return (
    <div>
      <form onSubmit={addContact}>
        <div id='formName'>
          <label>이름</label>
          <input type='text' placeholder='이름입력' className='input-area' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div id='formContact'>
          <label>전화번호</label>
          <input type='number' placeholder='전화번호입력( - 제외)' className='input-area' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}

export default ContactForm