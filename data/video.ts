import { VideoItem } from "../types/video";

export const videos: VideoItem[] = [
    {
        id: 1,
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        authorName: "Netviet Creator",
        description: "Big Buck Bunny demo video for React test.",
        likesCount: 5
    },
    {
    id: 2,
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "Frontend Dev",
    description: "A short video used to test play and pause logic.",
    likesCount: 88,
  },
  {
    id: 3,
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    authorName: "Movie Channel",
    description: "Sintel trailer vertical feed demo.",
    likesCount: 240,
  },
]