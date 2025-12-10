import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders welcome message initially', () => {
    render(<App />);
    expect(screen.getByText(/Seja bem-vindo ao Sistema de Numerologia Cabalística!/i)).toBeInTheDocument();
  });
});
