import { useState } from 'react'

const GRADIENTS = [
  'linear-gradient(135deg,#3b2f63,#1e1b3a)',
  'linear-gradient(135deg,#1f3a3d,#0f2022)',
  'linear-gradient(135deg,#4a2a3a,#221118)',
  'linear-gradient(135deg,#2a3a2a,#101f10)',
  'linear-gradient(135deg,#3a2a1a,#1f140a)',
]

export default function RecommendationCard({ track, index }) {
  const [liked, setLiked] = useState(false)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rec-card">
      <div className="rec-card-row">
        <div
          className="rec-art"
          style={{ background: GRADIENTS[index % GRADIENTS.length] }}
          aria-hidden="true"
        >
          ♪
        </div>

        <div className="rec-info">
          <p className="rec-song">{track.song}</p>
          <p className="rec-artist">{track.artist}</p>
          <p className="rec-genre">{track.genre}</p>
        </div>

        <div className="rec-actions">
          <button
            className={`icon-btn heart-btn${liked ? ' liked' : ''}`}
            onClick={() => setLiked((v) => !v)}
            aria-label="Save song"
            title="Save song"
          >
            {liked ? '♥' : '♡'}
          </button>
          <button
            className="play-btn"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? 'Pause' : 'Play'}
            title={playing ? 'Pause' : 'Play'}
          >
            {playing ? '❚❚' : '▶'}
          </button>
        </div>
      </div>

      <div className="ai-box">
        <span className="ai-badge">AI</span>
        <p className="ai-text">{track.aiExplanation}</p>
      </div>
    </div>
  )
}
