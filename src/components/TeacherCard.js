const TeacherCard = (props) => {

  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.age}, {props.country}</p>
    </div>
  )
}

export default TeacherCard