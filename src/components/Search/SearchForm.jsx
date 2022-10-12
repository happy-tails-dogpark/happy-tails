import { InputControl, FormButton } from '../Forms/FormControl.jsx';
import useSearchForm from '../../hooks/use-search-form.js';
import styles from '../Forms/FormLayout.css';

export default function SearchForm({ onSubmit }) {
  const { pokemon, setPokemon, searchForm, setSearchForm } = useSearchForm();
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };
  return (<div className={styles.page}>
    <div className={styles.Forms}>
      <form onSubmit={formSubmit} >
        <InputControl
          type="text"
          name="pokemon"
          value={pokemon}
          onChange={e => setPokemon(e.target.value)}
        />
        <FormButton type="submit" > Search </FormButton>
      </form>
    </div>
  </div>);
}
