import Header from './components/static/header';
import Nav from './components/static/nav';
import SpriteSVG from './components/static/sprite-svg';
import './globals.css';

export const metadata = {
  title: 'LeParisien Front-end Test',
  description: 'Technical test for Front-end Interview',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <SpriteSVG />
        <Header />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
