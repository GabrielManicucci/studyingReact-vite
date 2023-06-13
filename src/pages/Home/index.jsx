import { useState } from "react"
import Card from "../../components/Card"
import "./styles.css"

  // Conceito de imutabilidade
  // Para mostrar dados capturados de um evento na tela é preciso adicionar ao estado('useState") do react


export default function Home() {
  const [studentName, setStudentName] = useState('')

  const [students, setStudents] = useState([])

  function addStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
    }

    console.log(newStudent)

    // "useState" possui o recurso de recuperar dados que já estão no estado, através de uma callback, para poder add novos elementos 
    // Spread operator
    setStudents( (prevState) => [...prevState, newStudent] )
  }

  // let inputValue = 'Gabriel'
  // function showInput(data) {
  //   console.log(data)
  //   inputValue = data
    
  // }

  return (
    <div className="home" >
      <h1>Lista de Presença: {studentName} </h1>
      <input 
      type="text" 
      name="text" 
      id="text" 
      placeholder="type your name..." 
      onChange={ e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={addStudent} >Adicionar</button>

      {/* {console.log(students)} */}

      {
        students.map( (student) => {
          if (student.name !== '') {
            return (
              <Card 
                key={student.time}
                name={student.name} 
                time={student.time} 
              />
            ) 
          }
        })
      }

    </div>
  )
}