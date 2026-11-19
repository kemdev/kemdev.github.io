import './portfolio.css';

export const metadata = {
  title: 'Abdulkarim Alarmanazi — Creative Developer',
  description: 'Abdulkarim Alarmanazi is a developer based near Stuttgart, Germany, building web applications and interactive 3D experiences with React, Next.js, and Three.js.',
  openGraph: {
    type: 'website',
    url: 'https://kemdev.github.io/',
    title: 'Abdulkarim Alarmanazi — Creative Developer',
    description: 'Web applications, creative coding, and experiments in real-time 3D.',
    images: ['https://kemdev.github.io/work/share.webp'],
  },
  icons: { icon: '/work/mark.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
