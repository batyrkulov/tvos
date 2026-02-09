import { Section } from "@/types/other";

export const VIDEO_URLS = [
  "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
  "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
  "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
  "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
  "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8",
];

export const MOCK_SECTIONS: Section[] = [
  {
    title: "Featured",
    isBanner: true,
    data: [
      {
        id: "banner-1",
        title: "I'm Obsessed With My Boss",
        episodeDesc: 'Alpha Mate Who Cried Wolf (63 episodes)',
        poster: "https://picsum.photos/800/450?random=1",
        videoUrl: VIDEO_URLS[1],
        desc: 'When a wolf brutally kills Astrid’s mother, her peaceful life falls apart. Her loving father becomes abusive, blaming her for her mother’s death and the miserable life they now have. She carries this guilt everywhere until she meets Ryker, who seems to understand her more than she does herself. He claims to be her mate, and Astrid feels a strange connection.'
      },
    ],
  },
  {
    title: "Popular Right Now",
    data: VIDEO_URLS.map((url, index) => ({
      id: `item-${index + 1}`,
      title: `Episode ${index + 1}`,
      episodeDesc: 'Alpha Mate Who Cried Wolf (63 episodes)',
      poster: `https://picsum.photos/300/450?random=${index + 10}`,
      videoUrl: url,
    })),
  },
  {
    title: "New Releases",
    data: VIDEO_URLS.slice(0, 4).map((url, index) => ({
      id: `new-${index + 1}`,
      title: `New Content ${index + 1}`,
      episodeDesc: 'Alpha Mate Who Cried Wolf (63 episodes)',
      poster: `https://picsum.photos/300/450?random=${index + 20}`,
      videoUrl: url,
    })),
  },
];