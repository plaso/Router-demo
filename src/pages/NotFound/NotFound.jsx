import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate('/about')
  }

  return (
    <div>
      <h1>Not found</h1>
      <p>Go to <Link to="/">home page</Link></p>
      <p>Go to <button onClick={navigateToAbout}>about</button></p>
    </div>
  )
} 

export default NotFound