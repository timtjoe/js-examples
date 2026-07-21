const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line) => {
    // Split into words, handle empty input
    const words = line.trim() === '' ? [] : line.split(' ');

    // Count occurrences using a Map
    const counts = new Map();
    for (const w of words) {
        counts.set(w, (counts.get(w) ?? 0) + 1);
    }

    // Sort alphabetically by word
    const sorted = [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));

    // Print each word and its count
    for (const [w, c] of sorted) {
        console.log(`${w}: ${c}`);
    }
    rl.close();
});
rl.on("close", () => process.exit(0));
