export async function userEdit(id, name, age, attachment) {

    try {

        await fetch("https://v1.appbackend.io/v1/rows/sD7brqcwDzTt", {

            method: "PUT",

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({"_id": id, "name": name, "age": age, "attachment": attachment})
        
        });

    } catch (error) {
        
        console.log(error);

    }
}

