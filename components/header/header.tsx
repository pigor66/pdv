import { useRouter } from "next/router";
import { Navbar, Container, Button, Nav, NavDropdown, Row, Col, Image, Accordion, Dropdown } from "react-bootstrap";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from "react";


export const Header = () => {

  const router = useRouter();

  const { data: session } = useSession()

  useEffect(() => {
    if (!session?.user) {
      router.push('/entrar');
    }
  }, [session]);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Gestão de negócio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          {
            session?.user &&
            <Nav >
              <Dropdown drop="down-centered" >
                <Dropdown.Toggle variant="link" id="dropdown-basic" className='text-decoration-none text-dark d-flex align-items-center px-0'>
                  {
                    session?.user?.image &&
                    <Image src={session?.user?.image} width={30} height={30} style={{ borderRadius: '50%', marginRight: '0.25rem' }} />
                  }
                  <div>
                    {session?.user?.name}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => signOut()}>Sair</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;