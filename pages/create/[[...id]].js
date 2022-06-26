import { useId, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function Create() {
  const router = useRouter()
  const id = useId()
  const empId = router.query.id ? router.query.id[0] : null
  const { handleSubmit, reset, register } = useForm({
    defaultValues: {
      name: '',
      email: '',
      gender: 'Male',
      skills: [],
      age: 0,
      birth: '',
    },
  })

  const createOrUpdateEmployee = async (value) => {
    if (empId != null) {
      const res = await axios.put(`http://localhost:3000/api/${empId}`, value)
      const data = res.data
      if (data) {
        reset()
        router.push('/')
      }
    } else {
      const res = await axios.post('http://localhost:3000/api', value)
      const data = res.data
      if (data) {
        reset()
        router.push('/')
      }
    }
  }

  const editData = async () => {
    if (empId != null) {
      const res = await axios.get(`http://localhost:3000/api/${empId}`)
      const { name, email, age, gender, birth, skills } = res.data

      reset({ name, email, age, gender, birth, skills })
    }
  }

  useEffect(() => {
    editData()
  }, [])

  return (
    <Container className='py-4'>
      <Row>
        <Col lg={12}>
          <h1 className='display-5'> Create Employee </h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(createOrUpdateEmployee)}>
        <Row className='gap-3 pt-4'>
          <Col lg={12}>
            <Row>
              <Col lg={6}>
                <Form.Group controlId={id + 'formName'}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name='name'
                    {...register('name')}
                    placeholder='Enter name'
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row>
              <Col lg={6}>
                <Form.Group controlId={id + 'formEmail'}>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    name='email'
                    {...register('email')}
                    placeholder='Enter email'
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label className='pe-3'>Gender</Form.Label>
                  {['Male', 'Female'].map((gender) => (
                    <Form.Check
                      key={gender}
                      value={gender}
                      type='radio'
                      name='gender'
                      label={gender}
                      id={gender}
                      {...register('gender')}
                    />
                  ))}
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row>
              <Col lg={4}>
                <Form.Group controlId={id + 'formAge'}>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name='age'
                    {...register('age')}
                    placeholder='Enter age'
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row>
              <Col lg={4}>
                <Form.Group controlId={id + 'formBirth'}>
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                    name='birth'
                    {...register('birth')}
                    placeholder='Enter birth'
                    type='date'
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row>
              <Col lg={4}>
                <Form.Group controlId={id + 'formSkills'}>
                  <Form.Label>Skills</Form.Label>
                  <Form.Select name='skills' {...register('skills')} multiple>
                    {['HTML', 'CSS', 'JAVASCRIPT'].map((skill) => (
                      <option value={skill} key={skill}>
                        {skill}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button className='mt-4' type='submit'>
          {empId != null ? 'Update' : 'Create'}
        </Button>
      </Form>
    </Container>
  )
}

export default Create
