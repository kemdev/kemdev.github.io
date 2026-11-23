import './portfolio.css';

export const metadata = {
  title: 'Abdulkarim Alarmanazi — Full-stack & Creative Developer',
  description: 'Abdulkarim Alarmanazi is a developer based near Stuttgart, Germany, building web applications and interactive 3D experiences with React, Next.js, and Three.js.',
  openGraph: {
    type: 'website',
    title: 'Abdulkarim Alarmanazi — Full-stack & Creative Developer',
    description: 'Web applications, creative coding, and experiments in real-time 3D.',
  },
  icons: { icon: '/work/mark.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
