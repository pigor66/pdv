import Head from 'next/head'
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Header from '@/components/header/header';
import InitialCard from '@/components/initialCard/initialCard';

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      router.push('/entrar');
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
              Escolha uma opção:
            </h3>
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center pt-5'>
            <InitialCard
              route='/ponto-de-venda/inicio'
              image='https://cdn-icons-png.flaticon.com/512/2727/2727313.png'
              title='Ponto de Venda'
              description='Aqui você vai administrar suas vendas e ter o controle do seu estoque.'
            />
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center pt-5'>
            <InitialCard
              route='/painel-de-controle'
              image='https://cdn-icons-png.flaticon.com/512/1875/1875501.png'
              title='Painel de controle'
              description='Aqui você vai ver os relatórios de suas vendas e o balanço de caixa.'
            />
          </Col>
        </Row>
      </Container>

    </>
  )
}
