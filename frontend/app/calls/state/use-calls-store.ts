import { create } from 'zustand'

interface CallsStore {
  calls:  Call[]
  set_calls: (calls:  Call[]) => void
}

const useCallsStore =  create<CallsStore>(
    (set:any,get:any)=>({
        calls : [],
        set_calls : (calls:Call[])=>set((prev:CallsStore)=>{
            return {...prev,calls:calls}
        }),
      
    }), 
)



export {
    useCallsStore
}