/* eslint-disable no-unused-vars */
import { FormButton, InputControl } from '../Forms/FormControl';
import { useForm } from '../Forms/useForm';

import booty from '../../../public/bootyimage.png';

const initalData = {
  name: '',
  age: '',
  breed: '',
};

export default function DogForm({ onAdd, ...rest }) {
  const [data, handleChange, reset] = useForm(initalData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { qty, ...obj } = data;
    if (qty) obj.qty = qty;
    await onAdd(obj);
    reset();
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <InputControl
          label="name"
          name="name"
          required
          value={data.name}
          onChange={handleChange}    
        />

        <InputControl
          label="age"
          name="age"
          required
          value={data.age}
          onChange={handleChange}    
        />

        <InputControl
          label="breed"
          name="breed"
          required
          value={data.breed}
          onChange={handleChange}    
        />
        <FormButton>Add Doggo</FormButton>
      </form>
      <div>
        <img src={booty}/>
      </div>
    </div>
  );


}
