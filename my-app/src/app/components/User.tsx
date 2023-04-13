import React from 'react';
import "./User.css";
import axios from 'axios';


type Repositorio = {

  id: number
  email: string;
  username: string;
  password: string;
  name:{
    firstname: string, 
    lastname: string};
  address: {
    city: string,
    street: string,
    number: number,
    zipcode: string
    geolocation: {
      lat: string,
      long: string
    }
  }
  phone: string;

}


const baseURL = "https://fakestoreapi.com/users";


function User() {

const [post, setPost] = React.useState<Repositorio[]>([]);

React.useEffect(() => {

  axios.get(baseURL).then((response) => {
    setPost(response.data);
    console.log(response.data);

  });

}, []);

if (!post) return null;

return (

  <div className="user">

    <header className="user-header">

      <div>

        {post.map((post) => (

          <table className='tabela'>

            <tr>

              <div>
                <th>Id: </th>
                <td contentEditable = "true">{post['id']}</td>
                
                <th>E-mail: </th>
                <td contentEditable = "true">{post['email']}</td>
                
                <th>Username: </th>
                <td contentEditable = "true">{post['username']}</td>
              </div>
              
              <div>
                <th>Password: </th>
                <td contentEditable = "true">{post['password']}</td>  
                
                <th>Nome: </th>
                <td contentEditable = "true">{post['name'].firstname}&nbsp;</td>
                <td contentEditable = "true">{post['name'].lastname}</td>
              </div>
              
              <div>
                <th>Cidade</th>
                <td contentEditable = "true">{post['address'].city}</td>
                
                <th>Rua: </th>
                <td contentEditable = "true">{post['address'].street}&nbsp;</td>
                <td contentEditable = "true">{post['address'].number}</td>
                
                <th>CEP</th>
                <td contentEditable = "true">{post['address'].zipcode}</td>
              </div>

              <div>
                <th>Geo Localização: </th>
                <td contentEditable = "true">{post['address'].geolocation.lat}&nbsp;</td>
                <td contentEditable = "true">{post['address'].geolocation.long}</td>  
                            
                <th>Telefone: </th>
                <td contentEditable = "true">{post['phone']}</td>
              </div>

              <div className='botoes'>

                <button onClick={() => updateUser(post['id'],
                                                post['email'],
                                                post['username'],
                                                post['password'],
                                                post['name'].firstname,
                                                post['name'].lastname,
                                                post['address'].city,
                                                post['address'].street, 
                                                post['address'].number, 
                                                post['address'].zipcode, 
                                                post['address'].geolocation.lat, 
                                                post['address'].geolocation.long,
                                                post['phone'])}>Atualizar</button>

                <button onClick={() => deleteUser(post['id'])}>Apagar Usuario</button>

              </div>
              



            </tr>

          </table>

        ))}

      </div>

    </header>
    
  </div>
);
}

function deleteUser(id: number) {

  axios.delete(baseURL + '/' + id).then(response => console.log(response))

}

function updateUser(id:number, email:string, username:string, password:string, 
                    firstname:string, lastname:string,
                    city:string, street:string, number: number, zipcode:string,
                    lat:string, long:string, 
                    phone:string) {

  let user = JSON.stringify({
    
    "email": email,
    "username": username,
    "password" : password,
    "name":{
        "firstname":firstname,
        "lastname":lastname
            },
        "address":{
          "city":city,
          "street": street,
          "number":number,
          "zipcode":zipcode,
          "geolocation":{
            "lat":lat,
            "long":long
                }
            },
            "phone": phone
  });

  
  
  
  axios.patch(baseURL + '/' + id, user).then(response => console.log(response))

}

export default User;