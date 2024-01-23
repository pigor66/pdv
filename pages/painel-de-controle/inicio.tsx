import Head from 'next/head'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Header from '@/components/header/header';
import { useEffect } from 'react';

export default function Dashboard() {
  const router = useRouter();

  const { data: session, } = useSession()
  useEffect(() => {
    if (!session) {
      router.push('/');
    }

  }, [session]);

  if (!session) {
    return (
      <div className='d-flex align-items-center justify-content-center' style={{ width: '100vw', height: '100vh' }}>
        <Spinner variant='primary' animation="grow" size="sm" className='mx-1' />
        <Spinner variant='primary' animation="grow" size="sm" className='mx-1' />
        <Spinner variant='primary' animation="grow" size="sm" className='mx-1' />
      </div>
    )
  }
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
              Painel de controle
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}
