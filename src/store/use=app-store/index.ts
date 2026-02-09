import { create } from 'zustand';

import { PlayerState } from './type';

export const useAppStore = create<PlayerState>()((set, get) => ({
  currentVideoUrl: null,
  playbackPositions: {},
  isPlaying: false,

  setCurrentVideo: (url) =>
    set({
      currentVideoUrl: url,
      isPlaying: !!url,
    }),

  setPlaybackPosition: (url, position) =>
    set((state) => ({
      playbackPositions: {
        ...state.playbackPositions,
        [url]: position,
      },
    })),

  getPlaybackPosition: (url) => {
    const state = get();
    return state.playbackPositions[url] || 0;
  },

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  resetPlayer: () =>
    set({
      currentVideoUrl: null,
      isPlaying: false,
    }),
}));