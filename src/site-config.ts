export const siteConfig = {
  name: 'Your Name',
  role: 'Your professional title',
  location: 'Your location',
  email: '',
  availability: 'Open to thoughtful opportunities',
  description:
    'A concise statement about the work you do, the people you help, and the value you create.',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/Erfansalehii' },
  ],
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Certificates', href: '/certificates/' },
  { label: 'Contact', href: '/contact/' },
];

export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
