import { darkTheme } from '../js/dark-theme.js';
import { buttonScroll } from '../js/btn-scroll.js';
import { openNav } from '../js/open_nav.js';
import { hamburgerAnimation } from '../js/hamburger-animate.js';
import { languages } from '../js/languages.js';
import { sliderfn } from '../js/slider.js';

//pages
import Character from '../pages/Character.js';
import Error404 from '../pages/Error404.js';
import Home from '../pages/Home.js';
import { ScreenFindPoke } from '../pages/ScreenFindPoke.js';

// templates
import Header from '../templates/Header.js';
import Footer from '../templates/Footer.js';

//utils
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';

// un objeto para mis rutas
const routes = {
  '/': Home,
  '/:id': Character,
  '/find': ScreenFindPoke,
};
openNav('#menu-toggle', '.nav', '.navbar__list__link');

const router = () => {
  const header = document.getElementById('header');
  const content = document.getElementById('content');
  const footer = document.getElementById('footer');

  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  header.innerHTML = Header();
  content.innerHTML = render();
  footer.innerHTML = Footer();
  hamburgerAnimation('#menu-toggle', 'open');
  darkTheme('.dark-theme-btn', 'dark-mode');
  languages('click', '.flags__img');
  sliderfn();
  buttonScroll('.button-scroll');
};

export default router;
