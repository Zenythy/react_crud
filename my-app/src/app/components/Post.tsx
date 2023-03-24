import axios from "axios"
import "./Post.css"
import {useEffect} from "react"

function Post () {

    useEffect(() => createUser(),[])

    return(

        <div>
            <h1>Post</h1>
        </div>


    )

}

export default Post


function createUser() {

    const baseURL = "https://fakestoreapi.com/users";

    
    const user = {

        
            email:'John@gmail.com',
            username:'johnd',
            password:'m38rmF$',
            name:{
                firstname:'John',
                lastname:'Doe'
            },
            address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        

    }
        axios.post(baseURL, JSON.stringify(user)).then(response => {
            
            console.log(response.data)
        
            
        })
        
        

}