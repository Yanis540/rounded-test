import fs from "fs"
export function readCallsFromFile(filePath: string): Call[] {
    try {
        const rawData = fs.readFileSync(filePath, 'utf8');
        const calls: Call[] = JSON.parse(rawData);
        // Convertir les dates au format ISO 8601 en objets Date
        calls.forEach(call => {
            call.date = new Date(call.date);
        });
        return calls;
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier:', error);
        return [];
    }
}