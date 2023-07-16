import axios from "axios";





export let req={
    getMovies(token, date){
        const config={
            headers:{

                Authorization:'Bearer '+token,
                'Access-Control-Allow-Origin':"*",
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
        }
        let d={
            date:date
        }
        return axios.post('https://api.broadway.kg/api/v1/getMovies',d, config).then(res=>res.data.response).catch(e=>console.log(e))

    },
    getToken(date){
        let postData=JSON.stringify({
            email: "broadmob$dwaysR4admin@gmail.com",
            password: "__2%W,,MPzkqCE8*"
        })
        const config={
            headers:{
                withCredentials:true,
                'Access-Control-Allow-Origin':"*",
                'Access-Control-Allow-Methods':'POST',
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }
        let res=axios.post('https://api.broadway.kg/api/authenticate',postData, config).then(res=>res.data.token)
            .then(r=>this.getMovies(r, date))
        return res
    },
}
