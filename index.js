const form = document.getElementById('form-test');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const fuName = document.getElementById("name").value;
    const fuLName = document.getElementById("last-name").value;
    const bDay = document.getElementById("birthday").value;

    const usuario = {
        name: fuName,
        surname: fuLName,
        bDate: bDay
    };


    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            usuario
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))

    .catch(error => console.log(error));

});
