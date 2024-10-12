export type TQuarters = {
  id: number;
  quarter: string;
  milestones: Array<{
    iconSrc?: string;
    text: string;
    color: string
  }>;
};
export type TMilestoneProps = {
    iconSrc: string | undefined;
    text: string;
    color: string
  }
export type TMilestoneData = {
  iconSrc?: string;
  text: string;
  color: string
};

export type TQuarterSectionProps = {
  quarter: string;
  milestones: TMilestoneData[];
};
