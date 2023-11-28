
export async function userDelete(id, params) {
    
    try {

        fetch("https://v1.appbackend.io/v1/rows/sD7brqcwDzTt" , {
    
          method: "DELETE",
    
          headers: {
    
                'Content-Type': 'application/json'
    
          },
    
          body: JSON.stringify([id])
          
        })
        
        localStorage.removeItem('user')
         
        params.push("/login")

    } catch (error) {
        
        console.log(error);

    }

  }
