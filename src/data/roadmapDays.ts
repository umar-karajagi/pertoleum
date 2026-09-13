import { DayPlan } from '../types';
import { DAYS_PHASE_1 } from './daysPhase1';
import { DAYS_PHASE_2 } from './daysPhase2';
import { DAYS_PHASE_3 } from './daysPhase3';

export const ROADMAP_DAYS: DayPlan[] = [
  ...DAYS_PHASE_1,
  ...DAYS_PHASE_2,
  ...DAYS_PHASE_3
];

export const TOTAL_DAYS = ROADMAP_DAYS.length;

export const getDayByNumber = (dayNum: number): DayPlan | undefined => {
  return ROADMAP_DAYS.find(d => d.dayNumber === dayNum);
};

export const getDaysByPhase = (phaseId: 1 | 2 | 3): DayPlan[] => {
  return ROADMAP_DAYS.filter(d => d.phaseId === phaseId);
};

export const getDaysByWeek = (weekNum: number): DayPlan[] => {
  return ROADMAP_DAYS.filter(d => d.weekNumber === weekNum);
};
