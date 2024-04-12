

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
    interface AgentStatistics {
        /* in seconds */
        averageCallDuration: number;
        mostFrequentSubject: string;
        /* in minutes */
        uniqueCallersCount: number;
        dailyTimeSaved: number;
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