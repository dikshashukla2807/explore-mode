import { useState } from 'react'
import StatusBar from './components/StatusBar.jsx'
import RecommendationCard from './components/RecommendationCard.jsx'
import { MOOD_CHIPS, EXAMPLE_PROMPTS, getRecommendations } from './data/musicData.js'
import './App.css'

export default function App() {
  const [prompt, setPrompt] = useState('')
  const [selectedChip, setSelectedChip] = useState('rainy')
  const [screen, setScreen] = useState('landing')
  const [results, setResults] = useState(null)
  const [saveMessage, setSaveMessage] = useState('')

  const handleExplore = () => {
    const data = getRecommendations(prompt, selectedChip)
    setResults(data)
    setScreen('results')
    setSaveMessage('')
  }

  const handleChipClick = (id) => {
    setSelectedChip((prev) => (prev === id ? null : id))
  }

  const handleExampleClick = (text) => {
    setPrompt(text)
    setSelectedChip(null)
  }

  const showSaved = () => {
    setSaveMessage('Playlist saved to your Library ✓')
    window.clearTimeout(showSaved._t)
    showSaved._t = window.setTimeout(() => setSaveMessage(''), 2500)
  }

  const handleTryAnother = () => {
    setPrompt('')
    setSelectedChip('rainy')
    setResults(null)
    setSaveMessage('')
    setScreen('landing')
  }

  const handleRefine = () => {
    setSaveMessage('')
    setScreen('landing')
  }

  const canExplore = Boolean(prompt.trim() || selectedChip)

  return (
    <div className="app-shell">
      <StatusBar />

      <div className="top-header">
        <button
          className="back-btn"
          onClick={() => screen === 'results' && handleRefine()}
          disabled={screen === 'landing'}
          aria-label="Back"
        >
          ‹
        </button>
        <span className="header-title">Explore Mode</span>
      </div>

      <div className="scroll-content">
        {screen === 'landing' ? (
          <>
            <h1 className="landing-title">Explore Mode</h1>
            <p className="landing-subtitle">Describe the music you're looking for.</p>

            <textarea
              className="prompt-input"
              placeholder="Try: Songs for a rainy evening after work..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <div className="examples-row">
              {EXAMPLE_PROMPTS.map((ex) => (
                <button key={ex} className="example-pill" onClick={() => handleExampleClick(ex)}>
                  {ex}
                </button>
              ))}
            </div>

            <div className="chip-row">
              {MOOD_CHIPS.map((chip) => (
                <button
                  key={chip.id}
                  className={`mood-chip${selectedChip === chip.id ? ' selected' : ''}`}
                  onClick={() => handleChipClick(chip.id)}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>

            <button className="explore-btn" onClick={handleExplore} disabled={!canExplore}>
              Explore
            </button>
          </>
        ) : (
          results && (
            <>
              <div className="results-header">
                <div>
                  <p className="results-title">AI Playlist Results</p>
                  <p className="results-subtitle">
                    Based on "{results.moodLabel}" · {results.tracks.length} tracks
                  </p>
                </div>
                <button className="save-all-btn" onClick={showSaved}>
                  Save All
                </button>
              </div>

              <div className="rec-list">
                {results.tracks.map((track, i) => (
                  <RecommendationCard key={track.id} track={track} index={i} />
                ))}
              </div>

              {saveMessage && <p className="save-toast">{saveMessage}</p>}

              <div className="actions-footer">
                <button className="primary-btn" onClick={showSaved}>
                  Save Playlist
                </button>
                <div className="secondary-row">
                  <button className="secondary-btn" onClick={handleRefine}>
                    Refine Prompt
                  </button>
                  <button className="secondary-btn" onClick={handleTryAnother}>
                    Try Another Prompt
                  </button>
                </div>
              </div>
            </>
          )
        )}
      </div>

      <nav className="bottom-nav">
        <button className="nav-item">
          <span className="nav-icon">⌂</span>
          <span>Home</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">⌕</span>
          <span>Search</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">☰</span>
          <span>Library</span>
        </button>
        <button className="nav-item active">
          <span className="nav-icon">✦</span>
          <span>Explore</span>
        </button>
      </nav>
    </div>
  )
}
