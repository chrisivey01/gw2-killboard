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
    }
}