import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppEn from './en/App.tsx';
import AppRu from './ru/App.tsx';
import './index.css';

// Get language from localStorage, default to 'en'
const language = localStorage.getItem('language') || 'en';
const App = language === 'ru' ? AppRu : AppEn;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
