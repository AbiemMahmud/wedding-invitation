import { Pause, Play } from "lucide-react";
import ReactPlayer from "react-player";
import { usePlay, useSetPlay } from "src/contexts/PlayContext";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
  var YT: any;
}
/**
 * adding iframe
 *
 * return will be button with play
 * or pause icon
 */
const MusicPlayer = () => {
  const isPlay = usePlay();
  const setPlay = useSetPlay();
  const url = "https://www.youtube.com/watch?v=Ptk_1Dc2iPY";

  return (
    <>
      <div id="player-wrapper">
        <ReactPlayer
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
        onClick={() => setPlay(!isPlay)}
      >
        {isPlay ? <Pause id="pause" size={16} /> : <Play id="play" size={16} />}
      </div>
    </>
  );
};

export default MusicPlayer;
