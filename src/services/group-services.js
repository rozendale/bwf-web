import { status } from '../utils';


export function getGroups(){
    return fetch(`http://127.0.0.1:8000/api/groups/`)
      .then(status).catch( e => console.log(e))
}

export function getGroup(groupId){
    //console.log(groupId)
    return fetch(`http://127.0.0.1:8000/api/groups/${groupId}/`)
    .then(status).catch( e => console.log(e))
}

export function joinGroup(data){
    //console.log(groupId)
    return fetch('http://127.0.0.1:8000/api/members/join/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Token ${token}`
        },
        body: JSON.stringify(data)
    }).then(status).catch( e => console.log(e))
}

export function leaveGroup(data){
    //console.log(groupId)
    return fetch(`http://127.0.0.1:8000/api/members/leave/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Token ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(status).catch( e => console.log(e))
}

export function postComment(token, description, group, user){
    //console.log(groupId)
    return fetch(`http://127.0.0.1:8000/api/comments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(description, group, user)
    })
    .then(status).catch( e => console.log(e))
}
