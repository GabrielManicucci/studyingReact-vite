import { useEffect, useState } from "react"
import Card from "../../components/Card"
import "./styles.css"

  // Conceito de imutabilidade
  // Para mostrar dados capturados de um evento na tela é preciso adicionar ao estado('useState") do react


export default function Home() {
  const [user, setUSer] = useState( {user: '', img: ''} )

  const [studentName, setStudentName] = useState('')

  const [students, setStudents] = useState([])


  useEffect( () => {
    console.log('useEffect acionado')

    async function fecthData() {
      const response = await fetch('https://api.github.com/users/GabrielManicucci')
      const data = await response.json()
      setUSer({name: data.name, avatar: data.avatar_url})
    }

    fecthData()

    // fetch('https://api.github.com/users/GabrielManicucci')
    // .then( response => response.json() )
    // .then( data => setUSer({name: data.name, avatar: data.avatar_url}) )
  }, []);

  
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

  // let title = 'aluno'

  // function handleStudentName(name) {
  //   title = name
  //   console.log(title)
  // }
 
  return (
    <div className="home" >
      <header>
        <h1>Lista de Presença: {studentName} </h1>

        <div>
          <strong> {user.name} </strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>
      
      <input 
      type="text" 
      name="text" 
      id="text" 
      placeholder="type your name..." 
      onChange={ e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={addStudent} >Adicionar</button>

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