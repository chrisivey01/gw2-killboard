// const API = 'http://localhost:3500'
 const API = 'http://54.175.138.146'
export default {



    loadData(){
       return fetch(API + '/users')
           .then(response => {
               return response.json()
           })
           .then(json => {
               if (json.length > 1) {
                   json.sort((a, b) => b.wvwkills - a.wvwkills)
               }
               json.map((item, i) => {
                   item['rank'] = i + 1
               })
               return json
           })
    },

    loadWeeklyData(){
        return fetch(API + '/usersWeekly')
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.length > 1) {
                    json.sort((a, b) => b.weekly_kill_total - a.weekly_kill_total)
                }
                json.map((item, i) => {
                    item['rank'] = i + 1
                })
                return json
            })
    },


    async loadWeeklyTopKiller(){
        return await fetch(API + '/topWeekly')
    }
}