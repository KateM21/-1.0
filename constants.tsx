
import React from 'react';
import { Trend, SocialPlatform } from './types';

export const AGES = [6, 10, 12, 14];

export const TRENDS_DATA: { [age: number]: Trend[] } = {
  6: [
    {
      id: 601,
      name: 'Interactive Plushies',
      description: 'Cuddly toys that react to touch and sound, making playtime more engaging for young kids.',
      imageUrl: 'https://picsum.photos/seed/plushy/500/300',
      platforms: [SocialPlatform.YouTube, SocialPlatform.TikTok],
    },
    {
      id: 602,
      name: 'DIY Slime Kits',
      description: 'Safe, non-toxic kits for creating colorful, glittery slime. A sensory-play favorite.',
      imageUrl: 'https://picsum.photos/seed/slime/500/300',
      platforms: [SocialPlatform.TikTok, SocialPlatform.Instagram],
    },
    {
      id: 603,
      name: 'Kinetic Sand Playsets',
      description: 'Magical molding sand that never dries out. Perfect for creative building and tactile fun.',
      imageUrl: 'https://picsum.photos/seed/sand/500/300',
      platforms: [SocialPlatform.YouTube],
    },
  ],
  10: [
    {
      id: 1001,
      name: 'LED Strip Lights',
      description: 'Customizable RGB light strips to decorate rooms, a staple for every budding content creator.',
      imageUrl: 'https://picsum.photos/seed/led/500/300',
      platforms: [SocialPlatform.TikTok, SocialPlatform.Instagram],
    },
    {
      id: 1002,
      name: 'Roblox Gift Cards',
      description: 'Digital currency for the massively popular online game platform, allowing for avatar customization.',
      imageUrl: 'https://picsum.photos/seed/roblox/500/300',
      platforms: [SocialPlatform.YouTube, SocialPlatform.TikTok],
    },
    {
      id: 1003,
      name: 'Hydro Flask Bottles',
      description: 'The iconic, insulated water bottle that\'s both a status symbol and a practical accessory.',
      imageUrl: 'https://picsum.photos/seed/flask/500/300',
      platforms: [SocialPlatform.Instagram, SocialPlatform.TikTok],
    },
  ],
  12: [
    {
      id: 1201,
      name: 'Mini Projectors',
      description: 'Portable projectors for movie nights with friends, turning any wall into a cinema screen.',
      imageUrl: 'https://picsum.photos/seed/projector/500/300',
      platforms: [SocialPlatform.TikTok, SocialPlatform.YouTube],
    },
    {
      id: 1202,
      name: 'Skincare Minis',
      description: 'Sets of popular, gentle skincare products in mini sizes, perfect for starting a routine.',
      imageUrl: 'https://picsum.photos/seed/skincare/500/300',
      platforms: [SocialPlatform.Instagram, SocialPlatform.TikTok],
    },
    {
      id: 1203,
      name: 'Oversized Hoodies',
      description: 'Comfortable and stylish hoodies from trendy brands are a must-have for any wardrobe.',
      imageUrl: 'https://picsum.photos/seed/hoodie/500/300',
      platforms: [SocialPlatform.Instagram],
    },
  ],
  14: [
    {
      id: 1401,
      name: 'Gaming Keyboards',
      description: 'Mechanical keyboards with RGB backlighting for an enhanced gaming and typing experience.',
      imageUrl: 'https://picsum.photos/seed/keyboard/500/300',
      platforms: [SocialPlatform.YouTube, SocialPlatform.TikTok],
    },
    {
      id: 1402,
      name: 'Crossbody Bags',
      description: 'Functional and fashionable bags from brands like Lululemon or Carhartt for carrying essentials.',
      imageUrl: 'https://picsum.photos/seed/bag/500/300',
      platforms: [SocialPlatform.Instagram, SocialPlatform.TikTok],
    },
    {
      id: 1403,
      name: 'Digital Art Tablets',
      description: 'Entry-level drawing tablets for aspiring digital artists to create and share their work online.',
      imageUrl: 'https://picsum.photos/seed/tablet/500/300',
      platforms: [SocialPlatform.YouTube, SocialPlatform.Instagram],
    },
  ],
};


export const socialIcons: { [key in SocialPlatform]: JSX.Element } = {
  [SocialPlatform.TikTok]: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12.52.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.38-6.95-1.48-2.01-1.06-3.5-2.8-4.42-4.83-1.15-2.52-1.19-5.38-1.1-8.19.01-1.54.02-3.08.01-4.63h4.03c.01 1.08.01 2.16 0 3.23.02 1.51.13 3.02.41 4.5.25 1.34.81 2.61 1.63 3.69 1.14 1.51 2.98 2.31 4.89 2.11 1.57-.16 3.04-.95 4.04-2.22.99-1.27 1.46-2.91 1.43-4.51-.01-2.89-.01-5.78-.01-8.67Z"/></svg>,
  [SocialPlatform.Instagram]: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  [SocialPlatform.YouTube]: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3-2.5 4.5-2.5 4.5"/><path d="M12 13V4"/><path d="M12 13c0 2.5 2.5 4.5 5 4.5s5-2 5-4.5"/><path d="M12 13c0 2.5-2.5 4.5-5 4.5s-5-2-5-4.5"/><path d="M7.5 17.5c0 .5.5 1.5 1.5 1.5s1.5-1 1.5-1.5"/><path d="M15 17.5c0 .5.5 1.5 1.5 1.5s1.5-1 1.5-1.5"/></svg>,
};
