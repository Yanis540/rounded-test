import { create } from 'zustand'

interface CallsStore {
  calls:  Call[]
  filtered_calls : Call[]
  set_calls: (calls:  Call[]) => void
  set_filtered: (filter?:(c:Call[])=>Call[]) => void
}

const useCallsStore =  create<CallsStore>(
    (set:any,get:any)=>({
        calls : [],
        filtered_calls : [],
        set_calls : (calls:Call[])=>set((prev:CallsStore)=>{
            return {...prev,calls:calls,filtered_calls:calls}
        }),
        set_filtered : (filter?:(c:Call[])=>Call[])=>set((prev:CallsStore)=>{

            return {...prev,filtered_calls:filter?filter(prev.calls):prev.calls}
        }),
      
    }), 
)



export {
    useCallsStore
}