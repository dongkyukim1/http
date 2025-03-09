// Chart.js 그래프 설정
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line", // 'bar', 'pie', 'doughnut' 등 가능
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly",
        data: [0, 10, 5, 2, 20, 30, 45], // 예시 데이터
        fill: true,
        backgroundColor: "rgba(78, 115, 223, 0.2)", // 영역색
        borderColor: "rgba(78, 115, 223, 1)",       // 라인색
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
