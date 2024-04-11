import { readCallsFromFile } from "./reader";





// Implémentation de l'interface pour une base de données locale
class LocalDatabase implements DatabaseStrategy {
    private static instance: LocalDatabase;
    private connected: boolean;
    private data:Call[];

    private constructor() {
        this.connected = false;
        this.data =  readCallsFromFile("./assets/data.json");
    }
    // Singelton : permettre de créer qu'une seule instance de accesseur vers la base de données
    static getInstance(): LocalDatabase {
        if (!LocalDatabase.instance) {
            LocalDatabase.instance = new LocalDatabase();
            LocalDatabase.instance.connect()
        }
        return LocalDatabase.instance;
    }

    connect(): void {
        // Logique pour se connecter à la base de données locale
        console.log("Connexion à la base de données locale établie.");
        this.connected = true;
    }

    disconnect(): void {
        // Logique pour se déconnecter de la base de données locale
        console.log("Déconnexion de la base de données locale.");
        this.connected = false;
    }
   
    getCallsByTo(to: string): Call[] | undefined {
        const concernedCalls = this.data.filter((c)=>c.to == to)

        return concernedCalls
    }
}


const db = global.db || LocalDatabase.getInstance();

if(process.env.NODE_ENV === 'production') 
    global.db = db;


export {db}
