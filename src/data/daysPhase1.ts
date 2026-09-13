import { DayPlan } from '../types';
import { WEEK_1_DAYS } from './phase1/week1';
import { WEEK_2_DAYS } from './phase1/week2';
import { WEEK_3_DAYS } from './phase1/week3';
import { WEEK_4_DAYS } from './phase1/week4';

export const DAYS_PHASE_1: DayPlan[] = [
  ...WEEK_1_DAYS,
  ...WEEK_2_DAYS,
  ...WEEK_3_DAYS,
  ...WEEK_4_DAYS
];
