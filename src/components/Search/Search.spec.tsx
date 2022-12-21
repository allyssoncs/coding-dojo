/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import axios from 'axios';

import Search from './Search';

describe('App', () => {
  it('Deve poder inserir um cep e chamar a api do via cep', async () => {
    const { getByTestId } = render(<Search />);
    const input = getByTestId('input');
    const button = getByTestId('button');

    const axiosMock = jest.spyOn(axios, 'get');

    fireEvent.change(input, {target: { value: '01001000' } });
    fireEvent.click(button);


    expect(axiosMock).toHaveBeenCalled();
  });
});