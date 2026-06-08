import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

export function reportVitals(onPerfEntry: (metric: Metric) => void) {
  onCLS(onPerfEntry);
  onFCP(onPerfEntry);
  onINP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
}
