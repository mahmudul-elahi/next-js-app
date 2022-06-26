// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { empList } from '../../data/employee'

export default function findEmployee(req, res) {
  const empId = req.query.id

  if (req.method === 'GET') {
    const findEmployee = empList.filter((p) => p._id === empId)

    if (findEmployee.length > 0) {
      res.status(200).json(findEmployee[0])
    } else {
      res.status(404).json({ message: `Employee with id ${empId} not found` })
    }
  } else if (req.method === 'PUT') {
    const data = req.body
    const index = empList.findIndex((e) => e._id == empId)

    empList[index]._id = empId
    empList[index].name = data.name
    empList[index].email = data.email
    empList[index].age = data.age
    empList[index].birth = data.birth
    empList[index].gender = data.gender
    empList[index].skills = data.skills

    res.status(200).json(empList[index])
  }
}
