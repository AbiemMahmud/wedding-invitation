import { Pause, Play } from "lucide-react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { usePlay, useSetPlay } from "src/contexts/PlayContext";

/**
 * adding iframe
 *
 * return will be button with play
 * or pause icon
 * https://youtu.be/Ptk_1Dc2iPY?si=ecik6l5IXAiLO86X&t=2
 */
const MusicPlayer = () => {
  const isPlay = usePlay();
  const setPlay = useSetPlay();
  const url = "https://youtu.be/RBx-Ue28KUE?si=I8bNzoYvFV74bmxo";

  const musicRef = useRef(null);

  return (
    <>
      <div id="player-wrapper">
        <ReactPlayer
          ref={musicRef}
          className="react-player"
          width={0}
          height={0}
          url={url}
          playing={isPlay}
          loop={false}
        ></ReactPlayer>
      </div>
      <div
        className={`inline-block p-2 rounded-lg transition-colors duration-200 hover:bg-slate-700/50`}
        onClick={() => {
          setPlay(!isPlay);
        }}
      >
        {isPlay ? <Pause id="pause" size={16} /> : <Play id="play" size={16} />}
      </div>
    </>
  );
};

export default MusicPlayer;
