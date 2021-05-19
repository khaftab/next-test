// import haka from '../firebase'
import {useEffect} from 'react'
import axios from 'axios'
export default () => {

    

    useEffect(() => {
        // haka()
        const fetch = () => {
            axios.post('http://localhost:3000/api/firebase', {email: 'ssg@ssg.com'}).then((res) => console.log(res)).catch(err => console.log(err))
        }
        fetch()
    }, [])
    return (
        <div>
           <h1>Cloud function testing</h1> 
        </div>
    )
}