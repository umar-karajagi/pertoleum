import { DayPlan } from '../types';
import { WEEK_5_DAYS } from './phase2/week5';
import { WEEK_6_DAYS } from './phase2/week6';
import { WEEK_7_DAYS } from './phase2/week7';
import { WEEK_8_DAYS } from './phase2/week8';

export const DAYS_PHASE_2: DayPlan[] = [
  ...WEEK_5_DAYS,
  ...WEEK_6_DAYS,
  ...WEEK_7_DAYS,
  ...WEEK_8_DAYS
];
