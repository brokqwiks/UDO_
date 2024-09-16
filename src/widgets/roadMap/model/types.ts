export type TQuarters = {
  id: number;
  quarter: string;
  milestones: Array<{
    iconSrc?: string;
    text: string;
  }>;
};
export type TMilestoneProps = {
    iconSrc: string | undefined;
    text: string;
  }
export type TMilestoneData = {
  iconSrc?: string;
  text: string;
};

export type TQuarterSectionProps = {
  quarter: string;
  milestones: TMilestoneData[];
};
