export function auth(credentials){
    return fetch('http://127.0.0.1:8000/api/authenticate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}

export function register(userData){
    return fetch('http://127.0.0.1:8000/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}

export function changePass(userData, userId){
    return fetch(`http://127.0.0.1:8000/api/users/${userId}/change_pass/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}

export function uploadAvatar(profileId, data){
    return fetch(`http://127.0.0.1:8000/api/profile/${profileId}/`, {
        method: 'PUT',
        body: data
    }).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}