import axios from "axios"
import "./Post.css"
import {useEffect} from "react"

function Post () {

    useEffect(() => createUser(),[])

    return(

        <div className="novo-usuario">
            <div>
            <h1>Criar um novo usuario</h1>
            <p>Séra criado um usuario com os seguintes dados</p>
            </div>

                <div className="dados-usuario">
                    <div>
                        <p>email:laura@gmail.com,</p>
                        <p>username:laurinha,</p>
                    </div>

                    <div>
                        <p>password:z45rmF$</p>
                        <p>firstname:laura</p>
                        <p>lastname:blue</p>
                    </div>

                    <div>
                        <p>city:São Paulo,</p>
                        <p>street:591 new road, 7</p>
                        <p>zipcode:92926-3874</p>
                    </div>

                    <div>    
                        <p>geolocation: lat: -37.3149, long: 86.1496</p>    
                        <p>phone: 1-777-236-7033</p>
                    </div>
                </div>   
            
            <button onClick={() => createUser()}>Criar Usuario</button>

        </div>


    )

}

export default Post


function createUser() {

    const baseURL = "https://fakestoreapi.com/users";

    
    const user = {

        
            email:'laura@gmail.com',
            username:'laurinha',
            password:'z45rmF$',
            name:{
                firstname:'Laura',
                lastname:'Blue'
            },
            address:{
                city:'São Paulo',
                street:'591 new road',
                number:7,
                zipcode:'92926-3874',
                geolocation:{
                    lat:'-37.3149',
                    long:'86.1496'
                }
            },
            phone:'1-777-236-7033'
        

    }
        axios.post(baseURL, JSON.stringify(user)).then(response => {
            
            console.log(response.data)
        
            
        })
        
        

}