import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  }

  return (
    <div>
      <h2>Welcome to Contact</h2>
      <button onClick={handleGoToHome}>Go to Home</button>
    </div>
  )
}

export default Contact