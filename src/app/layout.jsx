import Image from 'next/image';
import Header from './components/static/header';
import Nav from './components/static/nav';
import SpriteSVG from './components/static/sprite-svg';
import './globals.css';
import './styles/styles.scss';

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
        <Image
          src="/images/ad.jpg"
          alt="Publicité"
          width={243}
          height={150}
          quality={80}
          priority="false"
          className="lp-image-responsive__img"
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
