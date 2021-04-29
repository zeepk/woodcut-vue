export interface Skill {
    skillId: number,
    xp: number,
    level: number,
    rank: number,
    dayGain: number,
    weekGain: number,
    monthGain: number,
    yearGain: number,
    dxpGain?: number
  }

export interface RootState {
    currentUsername: string | null;
    currentDisplayname: string | null;
    currentUserSkillGains: Array<Skill>;
    currentUserMinigameGains: any[];
}