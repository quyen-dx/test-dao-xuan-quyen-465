"use client"
import { useRef, useState , useEffect} from "react"
import { VideoItem } from "../types/video"

type Props = {
    video: VideoItem
}
const VideoCard = ({ video }: Props) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isPlaying, setPlaying] = useState(false)
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(video.likesCount)
    const cardRef = useRef<HTMLElement | null>(null)
    useEffect(() =>{
        const currentCard = cardRef.current
        const currentVideo = videoRef.current
        if(!currentVideo || !currentCard) return
        const observer = new IntersectionObserver(
            (entries) =>{
                const entry = entries[0]
                if(entry.isIntersecting){
                    currentVideo.play().catch(() => {})
                    setPlaying(true)
                }else{
                    currentVideo.pause()
                    setPlaying(false)
                }
            },{
                threshold: 0.7
            }
        )
        observer.observe(currentCard)
        return () => {
            observer.unobserve(currentCard)
        }
    },[])
    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1)
            setLiked(false)
        } else {
            setLikes(likes + 1)
            setLiked(true)
        }
    }
    const handlePlay = () => {
        const currentVideo = videoRef.current
        if (!currentVideo) return
        if (currentVideo.paused) {
            currentVideo.play()
            setPlaying(true)
        } else {
            currentVideo.pause()
            setPlaying(false)
        }
    }
    return (
        <section className="video-card" ref={cardRef}>
            <div className="video-wrapper">
                <video ref={videoRef} src={video.videoUrl} className="video-player" autoPlay loop muted playsInline width={300} onClick={handlePlay}></video>
                <div className="video-info">
                    <h2>@{video.authorName}</h2>
                    <p>{video.description}</p>
                </div>
                <div className="action-buttons">
                    <button onClick={handleLike}>{liked ? "❤️" : "🤍"}</button>
                    <p>{likes}</p>
                    <button>💬</button>
                    <span>Comment</span>
                    <button>↗️</button>
                    <span>Share</span>
                </div>
            </div>
        </section>
    )
}
export default VideoCard

