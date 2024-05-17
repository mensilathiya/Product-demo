import { useNavigate } from "react-router-dom"

function Dashboard() {
    let navigate = useNavigate()
    const handleClick = () => {
        
       let token = localStorage.getItem('token')
       if(token){
        localStorage.removeItem('token')
        navigate('/login')
       }
       else{
       navigate('/')
       }
    }
    return (

        <>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>
        </>
    )
}
export default Dashboard