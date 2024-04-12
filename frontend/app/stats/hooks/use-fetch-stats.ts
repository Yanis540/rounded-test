
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type DataResponse = {
    stats  :AgentStatistics
}
interface useFetchStatsMutation  {
    data ?: DataResponse
    isPending : boolean 
    error : unknown
}

export const useFetchStats = (to:string)=>{
    const {data,isPending:isLoading,error}:useFetchStatsMutation = useQuery({
        queryKey:["calls","stats"],
        queryFn:async()=>{
            const response= await axios.post("/api/calls/stats",{to}); 
            const data = await response.data ; 
            return data ; 
        },
        
    })

    return {
        data,isLoading,error
    }
}

