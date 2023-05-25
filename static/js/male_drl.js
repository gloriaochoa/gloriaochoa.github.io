console.log('male_vi.js imported')
var canvas2 = document.getElementById("male-drl");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
colors = ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', 
'#ae017e', '#7a0177', '#49006a']
var datasets2 = [
    {label: 'D07M', data:[97.14285714, 88.57142857, 90.0], borderColor:'#bfd3e6'},
    {label: 'D08M', data:[98.57142857, 10.0, 8.571428571], borderColor:'#9ebcda'},
    {label: 'D09M', data:[92.85714286, 1.428571429, 0.0], borderColor:'#8c96c6'},
    {label: 'D10M', data:[98.57142857, 48.57142857, 32.85714286], borderColor:'#8c6bb1'},
    {label: 'D11M', data:[98.57142857, 75.71428571, 60.0], borderColor:'#88419d'},
    {label: 'D12M', data:[91.42857143, 4.285714286, 0.0], borderColor:'#810f7c'},
    {label: 'D19M', data:[98.57142857, 95.71428571, 64.28571429], borderColor:'#4d004b'},
    {label: 'D20M', data:[98.57142857, 18.9010989, 1.428571429], borderColor:'#bfd3e6'},
    {label: 'D21M', data:[94.28571429, 57.14285714, 34.28571429], borderColor:'#9ebcda'},
    {label: 'D22M', data:[100.0, 18.57142857, 10.0], borderColor:'#8c96c6'},
    {label: 'D23M', data:[88.57142857, 91.42857143, 94.28571429], borderColor:'#8c6bb1'},
    {label: 'D24M', data:[98.57142857, 61.42857143, 41.42857143], borderColor:'#88419d'}    
];

var data = {
    labels: ['0s', '15s', '30s'],
    datasets: datasets2
};

var chartOptions = {
    aspectRatio: 1.2,
    scales:{
        y: {
            title: {
                display: true,
                text: '% of LL Choice'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Delay'
            }
        }
    },
    plugins: {
        title:{
            display: true,
            text: 'Male DRL'
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 20
            }
        }
    }
};

var lineChart = new Chart(canvas2, {
    type: 'line',
    data: data,
    options: chartOptions
  });
