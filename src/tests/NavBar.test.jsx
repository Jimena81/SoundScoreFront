/* eslint-disable no-undef */

import { render, fireEvent } from '@testing-library/react';
import NavBar from '../components/atoms/NavBar/NavBar';

describe('NavBar Component', () => {
  it('renders correctly when not logged in', () => {
    const { getByText, getByAltText } = render(<NavBar/>);
    
    // Comprobar que se muestra el mensaje de "Good Bye!" cuando no está iniciada la sesión
    expect(getByText('Good Bye!')).toBeInTheDocument();
    
    // Comprobar que se muestra el logo
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders correctly when logged in', () => {
    // Simular que el usuario ha iniciado sesión
    localStorage.setItem('authToken', 'fakeAuthToken');

    const { getByText, getByAltText } = render(<NavBar/>);
    
    // Comprobar que se muestra el botón de logout cuando está iniciada la sesión
    expect(getByText('Logout')).toBeInTheDocument();
    
    // Comprobar que se muestra el logo
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('handles logout correctly', () => {
    // Simular que el usuario ha iniciado sesión
    localStorage.setItem('authToken', 'fakeAuthToken');
    
    // Crear una función mock para useNavigate
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

    const { getByText } = render(<NavBar/>);
    
    // Encontrar y hacer clic en el botón de logout
    const logoutButton = getByText('Logout');
    fireEvent.click(logoutButton);

    // Comprobar que se ha llamado a navigateTo('/')
    expect(mockNavigate).toHaveBeenCalledWith('/');
    
    // Comprobar que el authToken se ha eliminado del almacenamiento local
    expect(localStorage.getItem('authToken')).toBeNull();
  });
});
