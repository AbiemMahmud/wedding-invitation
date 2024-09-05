declare interface IComment {
  id: number;
  name: string;
  text: string;
  created_at: string | null;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
  var YT: any;
}
