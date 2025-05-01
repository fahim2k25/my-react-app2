import './App.css'
import Title from './Title'
import Users from './Users'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json());


function App() {

  return (
    <div>
      <Title></Title>
      <Users></Users>
    </div>
  )
}

export default App
