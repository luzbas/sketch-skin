# Sketch · Video.js skin

A pencil-schematic skin for [Video.js v10](https://videojs.org). The video is a chip and the controls are parts wired to it, all drawn in graphite and red pencil on dotted paper. Wide players lay the board around the video, narrow ones continue it underneath, and fullscreen draws it over the picture when you move. Every line comes from a small pen model, so hovered controls redraw themselves by a slightly different hand.

Made for the Video.js Skins Design Challenge.

## Live demo

https://luzbas.github.io/sketch-skin/

## Use the skin

The skin is React + CSS on top of `@videojs/react`. Copy `src/skins/sketch/skin` into your project, install `@videojs/react`, `@videojs/core` and `cn`, then:

```tsx
import { VideoPlayer } from '@videojs/react/video';
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoSkin } from './skins/sketch/skin/video/skin';

<VideoPlayer poster="https://example.com/poster.jpg" title="My video">
  <VideoSkin style={{ width: '100%', aspectRatio: '16 / 9' }}>
    <HlsVideo src="https://example.com/video.m3u8" playsInline crossOrigin="anonymous" />
  </VideoSkin>
</VideoPlayer>
```

A plain `<Video src="…mp4" />` works in place of `HlsVideo` too. Add a chapters track and the board lists the chapters under the video.

## Run locally

```bash
npm install
npm run dev
```

The demo site deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## License

Apache License 2.0, same as Video.js. See [LICENSE](LICENSE).

The bundled IBM Plex Mono font files (`src/skins/sketch/skin/video/fonts`) are © IBM Corp. and licensed separately under the SIL Open Font License 1.1, included as `OFL.txt` in that folder.
