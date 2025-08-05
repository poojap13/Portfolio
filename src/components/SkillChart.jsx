import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function SkillChart() {
  const data = {
    labels: ['Python', 'SQL', 'Power BI', 'ML', 'Optical Flow'],
    datasets: [
      {
        label: 'Skill Level (%)',
        data: [90, 85, 80, 75, 70],
        backgroundColor: '#6366f1',
      },
    ],
  };

  return <Bar data={data} />;
}
