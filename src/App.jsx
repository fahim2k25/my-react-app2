import { Suspense } from 'react';
import Title from './Title'
import Users from './Users'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json());
function App() {
  return (
    <div className='flex flex-col items-center'>
      <Title></Title>
      <Suspense fallback={<h3>ITS LOADING..........</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
    </div>
  )
}
export default App
