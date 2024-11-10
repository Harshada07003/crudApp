import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
    const {id}=useParams()
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [age,setAge]= useState("")
    const navigate=useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
            .then(result => {console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    }, [])

    const update=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
        .then(result=>{
          console.log(result)
          navigate('/')
      })
        .catch(err =>console.log(err))

    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={update}>
                <h2>update User</h2>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Age</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Enter Age" value={age} onChange={(e)=> setAge(e.target.value)}/>
            </div>
            <button className='btn btn-success'>update</button>
            </form>
            </div>
        </div>
  )
}

export default UpdateUser
