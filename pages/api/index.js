// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { empList } from '../../data/employee'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(empList)
  } else if (req.method === 'POST') {
    const data = req.body
    const lastId = empList[empList.length - 1]._id
    const empData = {
      _id: parseInt(lastId) + 1,
      name: data.name,
      email: data.email,
      age: data.age,
      birth: data.birth,
      gender: data.gender,
      skills: data.skills,
    }
    empList.push(empData)
    res.status(201).json(empList)
  }
}
