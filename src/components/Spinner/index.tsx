import { ProgressBar } from 'react-aria-components';

const Spinner = () => {
  let center = 16;
  let strokeWidth = 4;
  let r = 16 - strokeWidth;
  let c = 2 * r * Math.PI;

  return (
    <ProgressBar aria-label="Carregando…" isIndeterminate>
      {({ percentage }) => (
        <>
          <svg
            width={64}
            height={64}
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth={strokeWidth}
          >
            <circle
              cx={center}
              cy={center}
              r={r - (strokeWidth / 2 - 0.25)}
              stroke="var(--border-color)"
              strokeWidth={0.5}
            />
            <circle
              cx={center}
              cy={center}
              r={r + (strokeWidth / 2 - 0.25)}
              stroke="var(--border-color)"
              strokeWidth={0.5}
            />
            <circle
              cx={center}
              cy={center}
              r={r}
              stroke="var(--highlight-background)"
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c - (percentage! / 100) * c}
              strokeLinecap="round"
              transform="rotate(-90 16 16)"
            />
          </svg>
        </>
      )}
    </ProgressBar>
  );
};

export default Spinner;
