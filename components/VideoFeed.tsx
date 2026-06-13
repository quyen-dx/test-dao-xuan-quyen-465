import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/video";
const VideoFeed = () => {
    return (
        <main className="video-feed">
            {videos.map(video => (
                <VideoCard key={video.id} video={video}></VideoCard>
            ))}
        </main>
    )
}
export default VideoFeed