// Sketch · Duo page — the pencil schematic laid out for the iPhone Duo, inside the same fold simulator as Papercut · Duo.
import { DuoSimulation } from '../../duo-kit/duo-simulation';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_TITLE } from '../../media';
import { SketchDuoSkin } from './duo/sketch-duo-skin';

export default function SketchDuoPage() {
  return (
    <main className="duo-page">
      <header className="duo-page__header">
        <h1>Sketch · Duo</h1>
        <p>
          The pencil schematic on the iPhone Duo. Prop it up and the parts lie on the bottom half under the picture; open
          it flat and they're drawn over the video; close it and they line up on a rail beside it. The video keeps playing
          through every fold and turn.
        </p>
        <p className="duo-page__links">
          <a href="../">Player</a>
          <a href="https://github.com/luzbas/sketch-skin">GitHub</a>
        </p>
      </header>

      <DuoSimulation
        src={DEMO_HLS}
        poster={DEMO_POSTER}
        chapters={DEMO_CHAPTERS}
        renderSkin={(media) => <SketchDuoSkin title={DEMO_TITLE}>{media}</SketchDuoSkin>}
      />
    </main>
  );
}
