import axios from 'axios'
import Link from 'next/link'
import { Stack, Button, Container, Card } from 'react-bootstrap'

function View({ data }) {
  const emp = data
  return (
    <Container className='py-4'>
      <Card className='text-center'>
        <Card.Header>Details</Card.Header>
        <Card.Body>
          <Card.Title>{emp.name}</Card.Title>
          <Card.Text className='m-0 p-0 pb-1'>
            <strong>Email: </strong>
            {emp.email}
          </Card.Text>
          <Card.Text className='m-0 p-0 pb-1'>
            <strong>Gender: </strong>
            {emp.gender}
          </Card.Text>
          <Card.Text className='m-0 p-0 pb-1'>
            <strong>Age: </strong>
            {emp.age}
          </Card.Text>
          <Card.Text className='m-0 p-0 pb-1'>
            <strong>Birth: </strong>
            {emp.birth}
          </Card.Text>

          <Card.Text className='m-0 p-0 pb-1'>
            <strong>Skills: </strong>
            {emp.skills.join(', ')}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Stack
            className='justify-content-center'
            gap={2}
            direction='horizontal'>
            <Link href={`/create/${emp._id}`}>
              <Button variant='info'>Edit</Button>
            </Link>
            <Link href={`/delete/${emp._id}`}>
              <Button variant='danger'>Delete</Button>
            </Link>
            <Link href={`/`}>
              <Button variant='primary'>Back</Button>
            </Link>
          </Stack>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const empId = context.query.id
  const res = await axios.get(`http://localhost:3000/api/${empId}`)
  const data = res.data

  return {
    props: {
      data,
    },
  }
}
export default View
