// Mock "AI recommendation" data for the Explore Mode MVP.
// Each mood bucket has 5 curated tracks with a pre-written AI explanation,
// so the demo always feels tailored regardless of exact prompt wording.

export const MOOD_CHIPS = [
  { id: 'focus', label: 'Focus', icon: '🎧' },
  { id: 'rainy', label: 'Rainy Evening', icon: '☔' },
  { id: 'road-trip', label: 'Road Trip', icon: '🚗' },
  { id: 'relax', label: 'Relax', icon: '☯' },
  { id: 'romantic', label: 'Romantic', icon: '❤️' },
]

export const EXAMPLE_PROMPTS = [
  'Rainy evening after work',
  'Late-night drive',
  'Focus music',
  'Hidden indie songs',
]

const TRACKS = {
  rainy: [
    {
      song: 'Awake',
      artist: 'Tycho',
      genre: 'Ambient · Electronic',
      aiExplanation:
        "Matches your relaxing evening vibe while introducing an artist outside your usual listening history.",
    },
    {
      song: 'Says',
      artist: 'Nils Frahm',
      genre: 'Modern Classical',
      aiExplanation:
        'Calm instrumental energy suited for a quiet night — likely new to your library.',
    },
    {
      song: 'Holocene',
      artist: 'Bon Iver',
      genre: 'Indie Folk',
      aiExplanation:
        'Soft, reflective textures that mirror the mellow mood of rain on a window.',
    },
    {
      song: 'Weightless',
      artist: 'Marconi Union',
      genre: 'Ambient',
      aiExplanation:
        'Slow-building atmosphere designed to ease tension after a long workday.',
    },
    {
      song: 'River',
      artist: 'Leon Bridges',
      genre: 'Soul · R&B',
      aiExplanation:
        'A warm, unhurried tone that fits the calm, introspective evening you described.',
    },
  ],
  focus: [
    {
      song: 'Experience',
      artist: 'Ludovico Einaudi',
      genre: 'Neo-Classical',
      aiExplanation:
        'Minimal piano builds concentration without lyrics pulling your attention away.',
    },
    {
      song: 'Strobe',
      artist: 'deadmau5',
      genre: 'Progressive House',
      aiExplanation:
        'Steady, evolving rhythm that keeps momentum during long deep-work sessions.',
    },
    {
      song: 'An Ending (Ascent)',
      artist: 'Brian Eno',
      genre: 'Ambient',
      aiExplanation:
        'Textural and non-intrusive — a genre outside your usual rotation worth exploring.',
    },
    {
      song: 'Nuvole Bianche',
      artist: 'Ludovico Einaudi',
      genre: 'Neo-Classical',
      aiExplanation:
        'Repetitive melodic patterns are proven to support sustained attention.',
    },
    {
      song: 'Midnight City',
      artist: 'M83',
      genre: 'Synth-Pop',
      aiExplanation:
        'Energetic but not distracting — good for maintaining focus through fatigue.',
    },
  ],
  'road-trip': [
    {
      song: 'Mr. Blue Sky',
      artist: 'Electric Light Orchestra',
      genre: 'Classic Rock',
      aiExplanation:
        'High-energy singalong that matches the open-road excitement of your prompt.',
    },
    {
      song: 'Life is a Highway',
      artist: 'Tom Cochrane',
      genre: 'Rock',
      aiExplanation:
        'A road-trip staple picked for its upbeat tempo and driving rhythm.',
    },
    {
      song: 'On Top of the World',
      artist: 'Imagine Dragons',
      genre: 'Alt-Pop Rock',
      aiExplanation:
        'Bright, anthemic energy suited to long stretches of highway.',
    },
    {
      song: 'Good as Hell',
      artist: 'Lizzo',
      genre: 'Pop · Funk',
      aiExplanation:
        'A confident, feel-good pick outside your usual genres to keep the trip fun.',
    },
    {
      song: 'Take Me Home, Country Roads',
      artist: 'John Denver',
      genre: 'Folk Rock',
      aiExplanation:
        'A nostalgic classic that fits the freeing feeling of a road trip.',
    },
  ],
  relax: [
    {
      song: 'Gymnopédie No.1',
      artist: 'Erik Satie',
      genre: 'Classical',
      aiExplanation:
        'Sparse, gentle piano ideal for unwinding and slowing your pace down.',
    },
    {
      song: 'Breathe',
      artist: 'Télépopmusik',
      genre: 'Trip-Hop',
      aiExplanation:
        'Downtempo groove that eases mental load without feeling sleepy.',
    },
    {
      song: 'Sunset Lover',
      artist: 'Petit Biscuit',
      genre: 'Chillwave',
      aiExplanation:
        'Soft electronic textures matched to a relaxed, unwinding mood.',
    },
    {
      song: 'Saturn',
      artist: 'Sleeping At Last',
      genre: 'Indie Ambient',
      aiExplanation:
        'Gradual emotional build that fits quiet, reflective relaxation.',
    },
    {
      song: 'Porcelain',
      artist: 'Moby',
      genre: 'Ambient · Electronic',
      aiExplanation:
        'A calming favorite reimagined here to introduce fresh instrumentation.',
    },
  ],
  romantic: [
    {
      song: 'At Last',
      artist: 'Etta James',
      genre: 'Soul',
      aiExplanation:
        'A timeless romantic tone that pairs well with your intimate mood.',
    },
    {
      song: 'Best Part',
      artist: 'Daniel Caesar ft. H.E.R.',
      genre: 'R&B',
      aiExplanation:
        'Tender vocals and a slow groove that fit a cozy, romantic setting.',
    },
    {
      song: 'Lover',
      artist: 'Taylor Swift',
      genre: 'Pop',
      aiExplanation:
        'Warm, dreamy production selected for its intimate lyrical tone.',
    },
    {
      song: 'La Vie en Rose',
      artist: 'Édith Piaf',
      genre: 'Jazz · Chanson',
      aiExplanation:
        'A classic outside your usual language and genre — a gentle discovery pick.',
    },
    {
      song: 'Adorn',
      artist: 'Miguel',
      genre: 'R&B',
      aiExplanation:
        'Smooth, sultry energy that matches the romantic mood you asked for.',
    },
  ],
  'night-drive': [
    {
      song: 'Instant Crush',
      artist: 'Daft Punk ft. Julian Casablancas',
      genre: 'Electro Pop',
      aiExplanation:
        'Synth-driven and moody — a natural fit for late-night streets.',
    },
    {
      song: 'Nightcall',
      artist: 'Kavinsky',
      genre: 'Synthwave',
      aiExplanation:
        'Retro synths built for driving after dark, introducing a genre you rarely play.',
    },
    {
      song: 'The Less I Know the Better',
      artist: 'Tame Impala',
      genre: 'Psychedelic Pop',
      aiExplanation:
        'Groovy basslines that suit a solitary late-night drive.',
    },
    {
      song: 'Electric Feel',
      artist: 'MGMT',
      genre: 'Indie Electronic',
      aiExplanation:
        'Hypnotic and steady — matches the calm focus of driving at night.',
    },
    {
      song: 'Midnight',
      artist: 'ILLENIUM',
      genre: 'Melodic Bass',
      aiExplanation:
        'Atmospheric production picked specifically for the night-drive mood.',
    },
  ],
  indie: [
    {
      song: 'Two Slow Dancers',
      artist: 'Mitski',
      genre: 'Indie Rock',
      aiExplanation:
        'An under-the-radar favorite outside your usual listening history.',
    },
    {
      song: 'Motion Sickness',
      artist: 'Phoebe Bridgers',
      genre: 'Indie Folk',
      aiExplanation:
        'Raw songwriting from an artist you haven\u2019t explored much yet.',
    },
    {
      song: 'Ivy',
      artist: 'Frank Ocean',
      genre: 'Alt R&B',
      aiExplanation:
        'A hidden-gem deep cut chosen to widen your genre range.',
    },
    {
      song: 'Sunflower, Vol. 6',
      artist: 'Harry Styles',
      genre: 'Indie Pop',
      aiExplanation:
        'Lesser-streamed track surfaced because it matches your taste profile closely.',
    },
    {
      song: 'Cherry Wine',
      artist: 'Hozier',
      genre: 'Indie Folk',
      aiExplanation:
        'A quiet, intimate track outside the mainstream picks you usually get.',
    },
  ],
  general: [
    {
      song: 'Dreams',
      artist: 'Fleetwood Mac',
      genre: 'Classic Rock',
      aiExplanation:
        'A versatile pick that blends familiarity with a slightly different era.',
    },
    {
      song: 'Redbone',
      artist: 'Childish Gambino',
      genre: 'Funk · Soul',
      aiExplanation:
        'Groove-forward track chosen to introduce texture outside your usual mix.',
    },
    {
      song: 'Weird Fishes',
      artist: 'Radiohead',
      genre: 'Alt Rock',
      aiExplanation:
        'Atmospheric and layered — a strong match for open-ended exploration.',
    },
    {
      song: 'Feel It Still',
      artist: 'Portugal. The Man',
      genre: 'Indie Pop Rock',
      aiExplanation:
        'Upbeat and approachable, balancing novelty with familiar sound.',
    },
    {
      song: 'Breezeblocks',
      artist: 'alt-J',
      genre: 'Indie Rock',
      aiExplanation:
        'Distinctive production style picked to expand your genre diversity.',
    },
  ],
}

const KEYWORD_RULES = [
  { id: 'rainy', keywords: ['rain', 'rainy'] },
  { id: 'romantic', keywords: ['romantic', 'love', 'date night', 'valentine'] },
  { id: 'indie', keywords: ['indie', 'hidden', 'underground', 'discover', 'obscure'] },
  { id: 'night-drive', keywords: ['night drive', 'late-night', 'late night', 'midnight drive', 'drive at night'] },
  { id: 'focus', keywords: ['focus', 'study', 'concentrat', 'deep work', 'productiv'] },
  { id: 'relax', keywords: ['relax', 'chill', 'calm', 'unwind', 'wind down'] },
  { id: 'road-trip', keywords: ['road trip', 'road-trip', 'highway', 'trip'] },
]

/**
 * Determine which mood bucket best matches free-text input.
 * Falls back to the selected chip, then to a general pool.
 */
export function detectMood(promptText, selectedChipId) {
  const text = (promptText || '').toLowerCase().trim()

  if (text) {
    for (const rule of KEYWORD_RULES) {
      if (rule.keywords.some((kw) => text.includes(kw))) {
        return rule.id
      }
    }
  }

  if (selectedChipId && TRACKS[selectedChipId]) {
    return selectedChipId
  }

  return 'general'
}

export function getRecommendations(promptText, selectedChipId) {
  const moodId = detectMood(promptText, selectedChipId)
  const chip = MOOD_CHIPS.find((m) => m.id === moodId)
  const moodLabel = chip ? chip.label : 'Your Vibe'
  const tracks = TRACKS[moodId] || TRACKS.general
  return {
    moodId,
    moodLabel,
    tracks: tracks.map((t, i) => ({ id: `${moodId}-${i}`, ...t })),
  }
}
