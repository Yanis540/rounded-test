import { UseMutateFunction, useMutation, useQuery } from "@tanstack/react-query"
import axios, { AxiosError, AxiosRequestConfig } from "axios"
import { useEffect } from "react"
import { toast } from "sonner"
import { useCallsStore } from "../state/use-calls-store"

type DataResponse = {
    calls  :Call[]
}
interface useFetchCallsMutation  {
    data ?: DataResponse
    isPending : boolean 
    error : unknown
    mutate : UseMutateFunction<DataResponse, unknown,void, unknown>
}

export const useFetchCalls = (to:string)=>{
    const {set_calls} = useCallsStore()
    const {mutate,data,isPending:isLoading,error}:useFetchCallsMutation = useMutation({
        mutationKey:["calls"],
        mutationFn:async()=>{
            
            const response= await axios.post("/api/calls",{to}); 
            const data = await response.data ; 
            return data ; 
        },
        onSuccess:(data:DataResponse)=>{
            set_calls(data.calls!);
        },
        onError:(err:any)=>{
            if(err instanceof AxiosError && err?.response?.data?.error?.message)
                toast.error(`${err.response.data.error.message}`)
            else 
                toast.error(`Unknown error occured`)
        }
    })
    useEffect(()=>{
        mutate();
    },[mutate])



    return {
        data,isLoading,error,fetch:mutate
    }
}

