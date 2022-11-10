import { useEffect } from "react"

const useTitle = title =>{
    useEffect( ()=>{
        document.title = `${title} | Freshii Restaurant`;
    },[title])
}
export default useTitle;