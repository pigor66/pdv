import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import Header from '@/components/header/header';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();

  const { data: session, } = useSession()

  useEffect(() => {
    if (session) {
      router.push('/menu');
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Gestão de negócio</title>
        <meta name="description" content="Gestão de negócio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col xs={12} className='text-center'>
            <h3>
              Para continuar e necessario fazer o login
            </h3>
          </Col>
          <Col xs={12} className='text-center mt-3'>
            <Button onClick={() => signIn()}>
              Entrar com o Google
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
