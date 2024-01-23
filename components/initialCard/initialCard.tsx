
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";

interface IInitialCard {
  image: string,
  title: string,
  description: string
  route: string
}

const InitialCard = (props: IInitialCard) => {

  return (
    <Link href={props.route} style={{ textDecoration: 'none' }}>
      <Card className='p-4 card-hover' style={{ width: '25rem', cursor: 'pointer' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default InitialCard;