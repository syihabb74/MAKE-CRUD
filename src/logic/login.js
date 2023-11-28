
async function getDataUsers () {


    const res = await fetch ("https://v1.appbackend.io/v1/rows/sD7brqcwDzTt");

    const dataUsers = res.json();

    return dataUsers

}

export async function  handleLogin (name) {

    const {data} = await getDataUsers();

    for ( const user of data ) {

        if (user.name === name ) {

            alert('Berhasil Login');

            return user;

        }

    }

    alert('Gagal login')

    return null;

}

