import { render, screen } from '@testing-library/react';
import App from './App';

import AuthService from './AuthService';

test('AuthService should handle authentication and have a login method', () => {
  const authService = new AuthService();
  expect(typeof authService).toBe('object');
  expect(typeof authService.login).toBe('function');
});


test("Användarobjekt med samma användarnamn ska vara lika", () => {
  const App1 = new App("Mohammed", "password1");
  const App2 = new App("Mohammed", "password2");
  expect(App1.equals(App2)).toBe(true);

  expect(App1.Appname).toBe("Mohammed");
  expect(App1.password).toBe("password1");
});



