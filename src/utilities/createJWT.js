const createJWT = (user) => {
    const currentUser = {
        email: user.email
    }

    fetch('https://smiley-dental-services-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('smileySecretToken', data.token);
        })
        .catch(error => console.log(error))
}

export { createJWT };