import React from 'react';
import "./User.css";
import axios from 'axios';

type Repositorio = {

  id: number
  username: string;
  email: string;
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

          <table className="user-table">

            <tr>

              <th>Id: </th>
              <td contentEditable = "true">{post['id']}</td>              
              <th>Nome: </th>
              <td contentEditable = "true">{post['username']}</td>
              <th>E-mail: </th>
              <td contentEditable = "true">{post['email']}</td>
              <th>Telefone: </th>
              <td contentEditable = "true">{post['phone']}</td>

              <button onClick={() => deleteUser(post['id'])}>Apagar</button>

              

              <button onClick={() => updateUser(post['id'],post['username'],post['email'],post['phone'])}>Atualizar</button>
              



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

function updateUser(id:number, username:string, email:string, phone:string) {

  let user = JSON.stringify({
    "email": email,
    "username": username,
    "phone": phone
  });

  console.log(user)
  
  
  axios.patch(baseURL + '/' + id, user).then(response => console.log(response))

}

export default User;