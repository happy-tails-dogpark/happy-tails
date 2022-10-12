import styles from './FormLayout.css';
import { InputControl, SelectControl,
  TextAreaControl, CheckBox, FormButton } from './FormControl.jsx';

export default function Form() {
  return (
    <div className={styles.page}>
      <div className={styles.Forms}>
        <form>

          <InputControl label="color" name="color" 
            placeholder="your favorite color"/>

          <InputControl label="other color" name="color" 
            placeholder="your second favorite color"/>  

          <SelectControl label="shade" name="shade"
            placeholder="fav color shade" required>
            <option value="1">Light</option>
            <option value="2">Dark</option>
            <option value="3">Pastel</option>
          </SelectControl>

          <TextAreaControl  label="color bio" name="bio"
            placeholder="why do you love the color(s) (optional)"/>

          <CheckBox legend="is this correct?" label="Yes!"/>

          <FormButton text="Submit">Submit</FormButton>

        </form>
      </div>
    </div>
  );

}
