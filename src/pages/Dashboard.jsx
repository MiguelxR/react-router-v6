
import {useNavigate, Link, Outlet} from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/');
    }

  return (
    <div>
    <h1>Dashboard</h1>

    <button onClick={handleClick}>
        Logout
    </button>

    <br/>

    <Link to="welcome">
    Say welcome
    </Link>

    <br/>

    <Link to="goodbye">
    Say goodbye
    </Link>
    
    <Outlet/>

    </div>
  )
}

export default Dashboard