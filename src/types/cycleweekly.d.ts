type CycleWeeklyType = {
  id: integer;
  cycleId: integer;
  age: number;
  fishWeight: number;
  feedPercentage: number;
  remainingFish?: number;
  totalDeath?: number;
  totalFishWeight: number;
  totalFeedDaily: number;
  totalFeedPrice: number;
  isHarvested: boolean;
};
