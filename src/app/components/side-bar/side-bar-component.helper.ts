export const Pages = {
  '/': { up: '', down: 'about' },
  '/about': { up: '', down: 'whatido' },
  '/whatido': { up: 'about', down: 'skills' },
  '/skills': { up: 'whatido', down: 'experience' },
  '/experience': { up: 'skills', down: 'projects' },
  '/projects': { up: 'experience', down: 'contact' },
  '/contact': { up: 'projects', down: 'contact' },
};
