import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CepSearch from '../components/CepSearch';

test('Busca de endereço por CEP', async () => {
  render(<CepSearch />);

  const input = screen.getByPlaceholderText('Digite o CEP');
  fireEvent.change(input, { target: { value: '01001000' } });

  const button = screen.getByText('Buscar');
  fireEvent.click(button);

  const Estado = await screen.findByText(/Estado/i);
  expect(Estado).toBeInTheDocument();
});
