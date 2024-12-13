import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

interface LineBarChartProps {
  seriesData: number[];
}
function LineBarChart({ seriesData }: LineBarChartProps) {
  const chartRef = useRef(null);
  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    const option = {
      legend: {
        data: ['tax'],
      },
      xAxis: {
        type: 'category',
        data: ['Réponse1', 'Réponse2', 'Réponse3', 'Réponse4'],
      },
      yAxis: [
        {
          max: 100,
          type: 'value',
          name: '%',
          nameTextStyle: {
            color: '#37cadb',
            padding: [0, 0, 10, -30],
          },
          splitNumber: 5,
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              width: 1,
              color: ['#ccc', '#ccc'],
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
      ],
      series: [
        {
          name: 'Taux de choix',
          data: seriesData,
          type: 'bar',
          itemStyle: {
            color: '#37cadb',
          },
        },
      ],
    };
    chartInstance.setOption(option);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div ref={chartRef} style={{ height: '500px' }}></div>
    </div>
  );
}

export default LineBarChart;
