export interface PlayerState {
  currentVideoUrl: string | null;
  playbackPositions: Record<string, number>;
  isPlaying: boolean;

  setCurrentVideo: (url: string | null) => void;
  setPlaybackPosition: (url: string, position: number) => void;
  getPlaybackPosition: (url: string) => number;
  togglePlay: () => void;
  resetPlayer: () => void;
}