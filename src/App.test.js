import { render, screen } from '@testing-library/react';
import App from './App';

test("Användarobjekt med samma användarnamn ska vara lika", () => {
  const user1 = new App("Alice", "password1");
  const user2 = new App("Alice", "password2");
  expect(user1.equals(user2)).toBe(true);
});

