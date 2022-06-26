import axios from 'axios'
import { Button, Container, Stack, Table } from 'react-bootstrap'
import Link from 'next/link'

function Home({ data: empList }) {
  return (
    <Container className='py-4'>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp) => (
            <tr key={emp._id}>
              <td>{emp._id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.skills.join(', ')}</td>
              <td>
                <Stack gap={2} direction='horizontal'>
                  <Link href={`/${emp._id}`}>
                    <Button size='sm' variant='primary'>
                      View
                    </Button>
                  </Link>
                  <Link href={`/create/${emp._id}`}>
                    <Button size='sm' variant='info'>
                      Edit
                    </Button>
                  </Link>

                  <Link href={`/delete/${emp._id}`}>
                    <Button size='sm' variant='danger'>
                      Delete
                    </Button>
                  </Link>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Home

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api')
  const data = res.data

  return {
    props: {
      data,
    },
  }
}
