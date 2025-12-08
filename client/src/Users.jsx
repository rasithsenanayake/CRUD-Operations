import React from 'react'

function Users() {
    const [users, setUsers] = React.useState([{
        name: "John Doe", Email:"john@gmail.com" , Age: 20 ,
    }]);
    
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
      <div className="w-50 bg-white rounded p-3 ">
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return(<tr>
                            <td>{user.name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            <td><button>edit</button><button>Delete</button></td>
                        </tr>
                        )
                    })
                }

            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
