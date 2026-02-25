// Chart.js Interop for Blazor WASM
window.chartInterop = {
    chartInstance: null,

    renderChart: function (canvasId, label, labels, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        // 既存チャートを破棄
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        this.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#4CAF50',
                    pointRadius: 3,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#e0e0e0'
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'データポイント',
                            color: '#a0a0a0'
                        },
                        ticks: { color: '#a0a0a0' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    y: {
                        title: {
                            display: true,
                            text: label,
                            color: '#a0a0a0'
                        },
                        ticks: { color: '#a0a0a0' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                }
            }
        });
    }
};
