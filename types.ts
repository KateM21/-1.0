
export enum SocialPlatform {
  TikTok = 'TikTok',
  Instagram = 'Instagram',
  YouTube = 'YouTube',
}

export interface Trend {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  platforms: SocialPlatform[];
}
