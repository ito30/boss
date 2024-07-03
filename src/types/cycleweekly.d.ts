type CycleWeeklyType = {
  id: integer;
  cycleId: integer;
  age: number;
  fishWeight: number;
  feedPercentage: number;
  remainingFish?: number;
  totalDeath?: integer;
  totalFishWeight: number;
  totalFeedDaily: number;
  totalFeedPrice: number;
  isHarvested: boolean;
};
