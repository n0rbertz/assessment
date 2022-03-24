import Header from './components/Header'
import Users from './components/Users'
import './App.css';

function App() {
  const users = [
    {
     first_name : "János",
     last_name : "Kovács",
     created_at : "22daysago"
    },
    {
      first_name : "Pista",
      last_name : "Horváth",
      created_at : "14daysago"
     }
  ]

  return (
    <div>
      <Header title={"Users"}></Header>
      <Users></Users>
    </div>
  );
}

export default App;
