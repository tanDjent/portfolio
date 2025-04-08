import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// import MusicIcon from "../../resources/icon/music.svg";
// import MutedMusicIcon from "../../resources/icon/muted-music.svg";

import Rest from "../../resources/music/Rest.mp3";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import "./Home.scss";
const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [learnMore, setLearnMore] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

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

  if (!gameStarted) {
    return (
      <div
        onClick={() => {
          toggleMusic();
          setIsPlaying(true);
          setGameStarted(true);
        }}
        className="w-full h-full bg-black cursor-pointer flex justify-center items-center landing"
      >
        <span>Start Game</span>
      </div>
    );
  } else
    return (
      <div className={cx("w-full h-full home", {})}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="overlay"
        />
        <audio ref={audioRef} src={Rest} loop autoPlay />
        <div className="w-full h-full flex flex-col justify-between items-center ">
          <div className="flex items-center">
            <span className="home-title">
              Rest here for but a moment, A Great Adventure Lies Ahead
            </span>
            {/* <img
              className="ml-[15px] mr- cursor-pointer music-icon"
              src={isPlaying ? MusicIcon : MutedMusicIcon}
              onClick={toggleMusic}
            /> */}
          </div>

          <button
            onClick={() => {
              setLearnMore(true);
              setTimeout(() => {
                toggleMusic();
              }, 100);

              setTimeout(() => {
                navigate("/tanDjent");
              }, 1500);
            }}
            className="flex items-center justify-center scroll-button scroll-button-dimensions mb-[100px] "
          >
            Learn more about the Legendary Knight
          </button>
          {learnMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="overlay"
            />
          )}
        </div>
      </div>
    );
};

export default Home;
