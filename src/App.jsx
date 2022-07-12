import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <div className='main-container'>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  )
}

export default App
