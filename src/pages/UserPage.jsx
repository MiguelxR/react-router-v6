import {useParams} from "react-router-dom"

const UserPage = () => {

    const {id} = useParams();

    console.log(id)

  return (
    <div>
         <h1>Hola {id}</h1>
    </div>
  )
}

export default UserPage