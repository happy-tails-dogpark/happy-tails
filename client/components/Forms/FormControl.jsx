/* eslint-disable react/prop-types */
import classnames from 'classnames';

function FormControl({ label, required, children }) {
  const className = classnames();
  return (
    <label className={className}>
      <LabelText text={label} required={required} />
      {children}
    </label>
  );
}

export function LabelText({ text }) {
  const className = classnames();
  return <span className={className}>{text}</span>;
}

export function InputControl({ label, required, ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <input {...rest} required={required} />
    </FormControl>
  );
}

export function CheckBox({ legend, label, ...rest }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <label>
        <input type="checkbox" {...rest} />
        {label}
      </label>
    </fieldset>
  );
}



export function FormButton({ children, ...rest }) {
  return (
    <button {...rest}>{children}</button>
  );
}
