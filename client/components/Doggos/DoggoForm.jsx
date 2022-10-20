/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { FormButton, InputControl } from '../Forms/FormControl';
import { useForm } from '../Forms/useForm';
import styles from '../Auth/AuthForm.css';
import format from './DoggoForm.css';
import booty from '../../../public/bootyimage.png';
import { useNavigate } from 'react-router-dom';
import { onAdd } from '../../services/dogs';

const initialData = {
  name: '',
  age: '',
  breed: '',
  birthday: '',
  image: ''
};

export default function DogForm({ ...rest }) {
  const [data, handleChange, reset] = useForm(initialData);
  console.log('data', data);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { qty, ...obj } = data;
    if (qty) obj.qty = qty;
    const dogId = await onAdd(obj);
    reset();
    navigate('/dog/profile');
  };

  return (
    <div className={format.spacing}>
      <div className={styles.alignment}>
        <h1>Create your doggo's profile!</h1>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <InputControl
            className={styles.InputControl}
            placeholder="name"
            name="name"
            required
            value={data.name}
            onChange={handleChange}    
          />

          <InputControl
            className={styles.InputControl}
            placeholder="age"
            name="age"
            required
            value={data.age}
            onChange={handleChange}    
          />

          <InputControl
            className={styles.InputControl}
            placeholder="breed"
            name="breed"
            required
            value={data.breed}
            onChange={handleChange}    
          />

          <InputControl
            className={styles.InputControl}
            placeholder="birthday"
            name="birthday"
            required
            value={data.birthday}
            onChange={handleChange}
          />

          <div className={styles.Button}>
            <FormButton className={styles.ButtonFormat}>Add Doggo</FormButton>
          </div>
        </form>
        <div className={styles.photo}>
          <img className={styles.booty} src={booty}/>
        </div>
      </div>
    </div>
  );


}
