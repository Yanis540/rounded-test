

export function calculateAgentStatistics(calls: Call[]): AgentStatistics {
    // Calcul de la durée moyenne des appels
    const totalDuration = calls.reduce((acc, call) => acc + call.duration, 0);
    const averageCallDuration = totalDuration / calls.length;

    // Calcul du motif le plus fréquent d'appel
    const subjectsCountMap: { [subject: string]: number } = {};
    calls.forEach(call => {
        subjectsCountMap[call.subject] = (subjectsCountMap[call.subject] || 0) + 1;
    });
    const mostFrequentSubject = Object.keys(subjectsCountMap).reduce((a, b) => subjectsCountMap[a] > subjectsCountMap[b] ? a : b);

    // Calcul du nombre d'appelants uniques
    const uniqueCallersCount = new Set(calls.map(call => call.from)).size;

    // Calcul du temps quotidien moyen gagné par le secrétariat
    let totalDailyTimeSaved = 0;
    calls.forEach(call => {
        const timeSaved = call.subject === "appointment" ? 5 : 3;
        totalDailyTimeSaved += timeSaved;
    });
    const dailyTimeSaved = totalDailyTimeSaved / calls.length;

    return {
        averageCallDuration:Math.round(averageCallDuration),
        mostFrequentSubject,
        uniqueCallersCount,
        dailyTimeSaved:Math.round(dailyTimeSaved),
    };
}