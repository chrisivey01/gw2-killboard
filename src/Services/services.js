// const API = 'http://localhost:3500'
const API = 'http://54.175.138.146'
export default {



    async loadData(){
       return await fetch(API + '/users')
    },


    async loadWeeklyTopKiller(){
        return await fetch(API + '/topKiller')
    }
}