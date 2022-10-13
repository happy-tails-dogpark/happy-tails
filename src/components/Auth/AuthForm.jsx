import { Link } from "react-router-dom";

export default function AuthForm({ mode='signin' }) {
  const {
    signIn,
    signUp,
    error
  } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(credentials);
  };
  const signin = {
    prompt: 'Sign the FUCK in',
    button: 'Sign In',
    switch: {
      prompt: 'Don\'t have an account? Create an account',
      link: 'signup', 
    }, action: signIn,
  };
  const signup = {
    prompt: 'Sign the FUCK up',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account? Sign In',
      link: '../', 
    }, action: signUp,
  };
  const modes = {
    signin,
    signup,
  };
  const type = modes[mode];

  return (
    <form onSubmit={handleSubmit}>
      <h2>{type.prompt}</h2>
      <InputControl
        label = "email"
        name = "email"
        type = "email"
        required value = {credentials.email}
        onChange={handleChange}
      />
      <InputControl
        label = "password"
        name = "password"
        type = "password"
        required value = {credentials.password}
        onChange={handleChange}
      />
      <FormButton>{type.button}</FormButton>
      <p>{error}</p>
      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
