/* eslint-disable no-unused-vars */
import { FormButton, InputControl } from '../Forms/FormControl';
import { useForm } from '../Forms/useForm';
import styles from '../Auth/AuthForm.css';
import booty from '../../../public/bootyimage.png';
import { Navigate } from 'react-router-dom';
import { onAdd } from '../../services/dogs';

const initalData = {
  name: '',
  age: '',
  breed: '',
};

export default function DogForm({ ...rest }) {
  const [data, handleChange, reset] = useForm(initalData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { qty, ...obj } = data;
    if (qty) obj.qty = qty;
    await onAdd(obj);
    reset();
    // <Navigate to="profile"/>;
  };

  return (
    <div className={styles.alignment}>

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
        <div className={styles.Button}>
          <FormButton className={styles.ButtonFormat}>Add Doggo</FormButton>
        </div>
      </form>
      <div className={styles.photo}>
        <img className={styles.booty} src={booty}/>
      </div>
      <div>
        {/* {data.breed} */}
        

      </div>
    </div>
  );


}
