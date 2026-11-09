// Sketch skin demo: just the player, plus a small link to the source.
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoPlayer } from '@videojs/react/video';
import { VideoSkin } from './skin/video/skin';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_TITLE } from '../../media';

export default function SketchPage() {
  return (
    <div className="stage">
      <h1 className="visually-hidden">Sketch · Video.js skin</h1>
      <div className="stage__player">
        <VideoPlayer poster={DEMO_POSTER} title={DEMO_TITLE}>
          <VideoSkin style={{ width: '100%', aspectRatio: '16 / 9' }}>
            <HlsVideo src={DEMO_HLS} playsInline crossOrigin="anonymous">
              <track kind="chapters" label="English" srcLang="en" src={DEMO_CHAPTERS} default />
            </HlsVideo>
          </VideoSkin>
        </VideoPlayer>
      </div>
      <a className="source-link" href="https://github.com/luzbas/sketch-skin">
        GitHub
      </a>
    </div>
  );
}
