// Shared functions for radar simulation
function simulateRadarData() {
    return {
        distance: Math.floor(Math.random() * 100),
        angle: Math.floor(Math.random() * 180),
        timestamp: new Date().toISOString()
    };
}

// WebSocket connection for real data (would connect to Flask server)
function connectToRadarServer() {
    // In a real implementation, this would connect to your Flask WebSocket
    console.log("Connecting to radar server...");
    
    // Simulate connection
    setTimeout(() => {
        console.log("Connected to radar server");
        setInterval(() => {
            const data = simulateRadarData();
            document.dispatchEvent(new CustomEvent('radarUpdate', { detail: data }));
        }, 300);
    }, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    connectToRadarServer();
    
    // Listen for radar updates
    document.addEventListener('radarUpdate', (e) => {
        const { distance, angle } = e.detail;
        console.log(`Radar update - Distance: ${distance}cm, Angle: ${angle}°`);
    });
});