import { useState } from "react"

//use later on example
const data = [
  { name: "Andre", age: 31, country: "Portugal" },
  { name: "David", age: 34, country: "Israel" },
  { name: "Karla", age: 27, country: "Brazil" },
  { name: "Matias", age: 30, country: "Uruguay" },
  { name: "Swen", age: 29, country: "Netherlands" },
]

const Teachers = () => {

  const [ teachers, setTeachers ] = useState(data)
  const [ hide, setHide ] = useState(false)

  // console.log("teachers", teachers)
  console.log("hide", hide)

  const toggleTeachers = () => {
    setHide(!hide)
  }

  return (
    <div>
      <h2>Teachers Component</h2>
      <button onClick={toggleTeachers}>{hide ? "Display teachers" : "Hide teachers"}</button>
      {/* {hide === false && teachers.map(teacher => { */}
      {!hide && teachers.map(teacher => {
        return (
          <div>
            <h3>{teacher.name}</h3>
            <p>{teacher.age}, {teacher.country}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Teachers
