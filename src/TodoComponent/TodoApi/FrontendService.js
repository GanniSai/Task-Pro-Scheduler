import axios from "axios"


// export default function WelcomeBean()
// {
//     return(axios.get("http://localhost:2020/hello-world"))
// }

const commonUrl=axios.create({ baseURL:"http://localhost:2020"});

// export const WelcomeBean=
//       ()=>commonUrl.get(`/hello-world`)


      export const WelcomeUserBean=
      (username)=>commonUrl.get(`/hello-world/path-variable/${username}`)

      