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
      <div className="w-full h-full flex flex-col justify-between items-center ">
        <div className="flex items-center">
          <span className="home-title">
            Rest here weary traveler, A Great Adventure Lies Ahead
          </span>
          <img
            className="ml-[20px] mr- cursor-pointer music-icon"
            src={isPlaying ? MusicIcon : MutedMusicIcon}
            onClick={toggleMusic}
          />
        </div>

        <button className="flex items-center justify-center scroll-button scroll-button-dimensions mb-[100px] ">
          Learn more about the Legendary Knight
        </button>
      </div>
    </div>
  );
};

export default Home;
