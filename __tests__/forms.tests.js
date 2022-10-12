import { render, screen } from '@testing-library/react';

test.skip('input control should work', async () => {
  render(
    <InputControl
      label="color"
      name="color"
      required
      placeholder="your favorite color"
    />
  );

  const inputControl = screen.getByLabelText('color');
  expect(inputControl.name).toEqual('color');
  expect(inputControl.placeholder).toEqual('your favorite color');
  expect(inputControl.required).toEqual(true);
});