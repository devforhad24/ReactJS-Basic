import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email)
        // console.log(password)
        if(email === 'jordan@test.com' && password === 'password'){

          const user = {
            name: 'Jordan Sharles',
            email: 'jordan@test.com',
            city: 'Miami',
            country: 'United States',
          }

          navigate('/profile', {state: user});
        }else{
          navigate('/signin');
        }
    }

  return (
    <div className='signin-container'>
      <h2>User Sign In</h2>
      <form onSubmit={handleSubmit} className='singin-form' >
        <input type="email" id='email' name='email' placeholder='Email' onChange={handleEmailChange} />
        <input type="password" id='password' name='password' placeholder='password' onChange={handlePasswordChange} />
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
