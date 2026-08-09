import React from 'react';
import { RadarDimensionScore } from '../types';
import { toPersianDigits } from '../utils/persian';

interface RadarChartProps {
  scores: RadarDimensionScore[];
  size?: number;
  accentColor?: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  scores,
  size = 320,
  accentColor = '#1d2ea0',
}) => {
  if (!scores || scores.length === 0) return null;

  const center = size / 2;
  const radius = center - 50; // leave padding for labels
  const totalAxes = scores.length;
  const angleSlice = (Math.PI * 2) / totalAxes;

  // Compute points for polygon
  const getCoordinates = (index: number, value: number) => {
    const angle = index * angleSlice - Math.PI / 2; // start top
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Concentric polygon grid levels (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Data polygon path
  const polygonPoints = scores
    .map((score, i) => {
      const { x, y } = getCoordinates(i, score.percentage);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        {/* Concentric Grid Lines */}
        {gridLevels.map((level, lvlIdx) => {
          const points = scores
            .map((_, i) => {
              const { x, y } = getCoordinates(i, level * 100);
              return `${x},${y}`;
            })
            .join(' ');

          return (
            <polygon
              key={lvlIdx}
              points={points}
              className="stroke-stone-200 dark:stroke-stone-800 fill-none"
              strokeWidth="1"
              strokeDasharray={lvlIdx < gridLevels.length - 1 ? '3 3' : 'none'}
            />
          );
        })}

        {/* Axes Lines */}
        {scores.map((_, i) => {
          const { x, y } = getCoordinates(i, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              className="stroke-stone-200 dark:stroke-stone-800"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Filled Score Polygon */}
        <polygon
          points={polygonPoints}
          fill={accentColor}
          fillOpacity="0.25"
          stroke={accentColor}
          strokeWidth="2.5"
          className="transition-all duration-500 ease-out"
        />

        {/* Data Point Markers */}
        {scores.map((score, i) => {
          const { x, y } = getCoordinates(i, score.percentage);
          return (
            <g key={i} className="group cursor-pointer">
              <circle
                cx={x}
                cy={y}
                r="5"
                fill={accentColor}
                className="stroke-white dark:stroke-stone-900 transition-transform group-hover:scale-125"
                strokeWidth="2"
              />
            </g>
          );
        })}

        {/* Category Dimension Labels */}
        {scores.map((score, i) => {
          const angle = i * angleSlice - Math.PI / 2;
          const labelRadius = radius + 25;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);

          let textAnchor: 'middle' | 'start' | 'end' = 'middle';
          if (Math.cos(angle) > 0.3) textAnchor = 'start';
          if (Math.cos(angle) < -0.3) textAnchor = 'end';

          return (
            <g key={i}>
              <text
                x={x}
                y={y}
                textAnchor={textAnchor}
                dominantBaseline="central"
                className="text-[11px] font-bold fill-stone-700 dark:fill-stone-300 font-sans"
              >
                {score.title} ({toPersianDigits(Math.round(score.percentage))}٪)
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
