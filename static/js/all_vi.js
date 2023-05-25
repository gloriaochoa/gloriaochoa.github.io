console.log('all_vi.js imported')
var canvas2 = document.getElementById("all-vi");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
colors = ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', 
'#ae017e', '#7a0177', '#49006a']
var datasets2 = [
    {label: 'I01H', data:[94.28571429, 68.57142857, 52.85714286], borderColor:'#fde0dd'},
    {label: 'I02H', data:[100.0, 70.0, 65.71428571], borderColor:'#fcc5c0'},
    {label: 'I03H', data:[90.0, 4.285714286, 0.0], borderColor:'#fa9fb5'},
    {label: 'I04H', data:[98.57142857, 82.85714286, 67.14285714], borderColor:'#f768a1'},
    {label: 'I05H', data:[92.85714286, 0.0, 1.428571429], borderColor:'#dd3497'},
    {label: 'I06H', data:[92.85714286, 42.85714286, 28.57142857], borderColor:'#ae017e'},
    {label: 'I13H', data:[97.14285714, 44.28571429, 30.0], borderColor:'#7a0177'},
    {label: 'I14H', data:[98.57142857, 11.42857143, 1.428571429], borderColor:'#49006a'},
    {label: 'I15H', data:[91.42857143, 84.28571429, 62.85714286], borderColor:'#fde0dd'},
    {label: 'I16H', data:[94.28571429, 68.57142857, 51.42857143], borderColor:'#fcc5c0'},
    {label: 'I17H', data:[92.85714286, 11.42857143, 0.0], borderColor:'#fa9fb5'},
    {label: 'I18H', data:[91.42857143, 18.57142857, 10.0], borderColor:'#f768a1'},
    {label: 'I07M', data:[92.85714286, 42.85714286, 24.28571429], borderColor:'#dd3497'},
    {label: 'I08M', data:[97.14285714, 88.57142857, 78.57142857], borderColor:'#ae017e'},
    {label: 'I09M', data:[88.57142857, 4.285714286, 0.0], borderColor:'#7a0177'},
    {label: 'I10M', data:[91.42857143, 1.428571429, 0.0], borderColor:'#49006a'},
    {label: 'I11M', data:[95.71428571, 31.42857143, 17.14285714], borderColor:'#fde0dd'},
    {label: 'I12M', data:[94.28571429, 57.14285714, 34.28571429], borderColor:'#fcc5c0'},
    {label: 'I19M', data:[94.28571429, 2.857142857, 0.0], borderColor:'#fa9fb5'},
    {label: 'I20M', data:[94.28571429, 14.28571429, 15.71428571], borderColor:'#f768a1'},
    {label: 'I21M', data:[95.71428571, 8.571428571, 1.428571429], borderColor:'#dd3497'},
    {label: 'I22M', data:[91.42857143, 38.57142857, 31.42857143], borderColor:'#ae017e'},
    {label: 'I23M', data:[98.57142857, 98.57142857, 95.71428571], borderColor:'#7a0177'},
    {label: 'I24M', data:[95.71428571, 25.71428571, 12.85714286], borderColor:'#49006a'},      
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
            text: 'All VI'
        },
        legend: {
            display: false,
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
