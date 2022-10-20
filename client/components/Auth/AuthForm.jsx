import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../state/UserContext';
import { FormButton, InputControl } from '../Forms/FormControl';
import { useForm } from '../Forms/useForm';
import styles from './AuthForm.css';
import booty from '../../../public/bootyimage.png';

export default function AuthForm({ mode = 'signin' }) {
  const {
    signIn,
    signUp,
    error
  } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(credentials);
    if (mode === 'signup') navigate('/dog');
    if (mode === 'signin') navigate('/search');
  };
  const signin = {
    button: 'Sign In',
    switch: {
      prompt: 'Don\'t have an account? Create one.',
      link: 'signup', 
    }, action: signIn,
  };
  const signup = {
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account? Sign In.',
      link: '../', 
    }, action: signUp,
  };
  const modes = {
    signin,
    signup,
  };
  const type = modes[mode];

  return (
    <div className={styles.alignment}>
      <div className={styles.photo}>
        <img className={styles.booty} src={booty}/>
      </div>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <h2>{type.prompt}</h2>
        <InputControl
          className={styles.InputControl}
          placeholder = "email"
          name = "email"
          type = "email"
          required value = {credentials.email}
          onChange={handleChange}
        />
        <InputControl
          className={styles.InputControl}
          placeholder = "password"
          name = "password"
          type = "password"
          required value = {credentials.password}
          onChange={handleChange}
        />
        <div className={styles.Button}>
          <FormButton className={styles.ButtonFormat}>{type.button}</FormButton>
        </div>
        <p>{error}</p>
        <nav>
          <Link to={type.switch.link}>{type.switch.prompt}</Link>
        </nav>
      </form>
    </div>
  );
}
