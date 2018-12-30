// const API = 'http://localhost:3500'
 const API = 'http://54.175.138.146'
export default {



    loadTop(){
       return fetch(API + '/users')
           .then(response => response.json())
    },

    loadWeekly() {
        return fetch(API + '/usersWeekly')
            .then(response => response.json())
    },

    getGears() {
        return fetch(API + `/gears`)
            .then(response => response.json())
    },

    loadWeeklyTopKiller(){
        return fetch(API + '/topWeekly')
            .then(results => results.json())
    },

    playersGear(character_name) {

        let data = {
            character_name: character_name
        }
        return fetch(API + `/playersGear`,{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
            // .then(response => response.json())
    }
}



// submitAPI(API, UID) {
//     let data = {
//         api: API,
//         uid: UID
//     }
//     let url = api + '/submitAPI'
//     return fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
//         .then(results => results.json())
// },