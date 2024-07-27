import authImage from '@/assets/authImage.png';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<section className="auth__container">
    <div className='auth'>
      <svg width="251" height="182" viewBox="0 0 251 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="19.1602" y="-166" width="279" height="271" rx="56" transform="rotate(26.3206 19.1602 -166)" fill="#EBC76B"/>
      </svg>

      <div className='auth__main'>{children}</div>
      <Image src={authImage} alt='Recipe Sharing Platform' width={655} />
    </div>
  </section>);
}