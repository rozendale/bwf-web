export function getGroups(){
    return fetch(`http://127.0.0.1:8000/api/groups/`)
      .then(resp => resp.json())
      .catch( e => {
        console.log(e);
      })
}

export function getGroup(groupId){
    //console.log(groupId)
    return fetch(`http://127.0.0.1:8000/api/groups/${groupId}/`)
      .then(resp => resp.json())
      .catch( e => {
        console.log(e);
      })
}

