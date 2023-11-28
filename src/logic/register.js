export async function handleRegister(name, age, image) {

        try {
            const response = await fetch('https://v1.appbackend.io/v1/rows/sD7brqcwDzTt', {

              method: 'POST',

              headers: {

                'Content-Type': 'application/json',

              },

              body: JSON.stringify([{"name":name,"age":age,"attachment":image}])
      
            });
      

          } catch (error) {

            console.log(error)
            
          }
    
  }
