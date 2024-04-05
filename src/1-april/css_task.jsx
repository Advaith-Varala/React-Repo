
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const NavBar = () => {

    return (
        <div className='navbar'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='container'>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <>

                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>


                    </>
                </Container>
            </Navbar>
        </div>
    )
}

const Cards = () => {
    let stc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ferrari.com%2Fen-EN%2Fmagazine%2Farticles%2Fthe-ferrari-sp-8-one-off&psig=AOvVaw34lp0frW4jruhW9UIYkUW6&ust=1712298470347000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPj7j4L3p4UDFQAAAAAdAAAAABAE"
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={stc} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>

    )
}
const Forms = () => {
    return (

        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export { NavBar, Cards,Forms }