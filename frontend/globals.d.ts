

declare global {
    type Call = {
        id : string , 
        from : string , 
        to : string , 
        date : Date , 
        duration : number , 
        subject : string , 
        summary : string 
    }   
    interface DatabaseStrategy {
        connect(): void;
        disconnect(): void;
        getCallsByTo(to: string): Call[] | undefined;
    }
    namespace globalThis {
        var db : DatabaseStrategy
    }
}


export {}