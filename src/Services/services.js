const API = 'http://localhost:3500/users'


export default {



    async loadData(){
       return await fetch(API)
           // .then(data =>
           //     console.log( data)
           // )
        // .catch(function(error) {
            //     console.log(error);
            // });

    }
}