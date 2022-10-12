/* eslint-disable react/prop-types */

import classnames from 'classnames';
import style from './FormControl.css';

function FormControl({ label, children }) {
  const className = classnames(style.FormControl, style.LabelText);
  return (<label className={className}>
    {label}
    {children}
  </label>);
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}

export function SelectControl({ label, children, placeholder, ...rest }) {
  return (
    <FormControl label={label}>
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}/>
    </FormControl>
  );
}

export function CheckBox({ legend, label, ...rest }) {
  return (
    <fieldset className={style.CheckboxControl}>
      <legend className={style.LabelText}>{legend}</legend>
      <label>
        <input type="checkbox" {...rest} />
        {label}
      </label>
    </fieldset>
  );
}

export function FormButton({ children, ...rest }) {
  return <button className={style.FormButton} {...rest}>{children}</button>;
}

