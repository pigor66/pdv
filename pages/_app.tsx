import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import '@/styles/card.css'
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps, session }: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
