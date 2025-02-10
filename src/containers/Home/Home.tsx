import React, { useRef, useState } from "react";
import MusicIcon from "../../resources/icon/music.svg";
import MutedMusicIcon from "../../resources/icon/muted-music.svg";
import ChillGuy from "../../resources/music/chillGuy.mp3";

import "./Home.scss";
const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((err) => console.error("Playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="w-full h-full home">
      <audio ref={audioRef} src={ChillGuy} loop autoPlay />
      <div className="w-full h-full flex flex-col justify-between items-center relative">
        <span className="cursor-pointer home-title">
          Rest here weary traveler
        </span>
        <button className="scroll-button scroll-button-dimensions mb-[100px] text-5xl">
          Learn more about the Legendary Knight
        </button>
      </div>
      <img
        className="absolute music-icon"
        src={isPlaying ? MusicIcon : MutedMusicIcon}
        onClick={toggleMusic}
        height={"100px"}
        width={"100px"}
      />
    </div>
  );
};

export default Home;
