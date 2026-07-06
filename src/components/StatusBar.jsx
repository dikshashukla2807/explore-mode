export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-time">9:41</span>
      <div className="status-icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#fff" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" fill="#fff" />
          <rect x="10" y="2" width="3" height="10" rx="0.5" fill="#fff" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" fill="#fff" opacity="0.5" />
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <rect x="0.5" y="0.5" width="19" height="11" rx="2.5" stroke="#fff" opacity="0.6" />
          <rect x="2" y="2" width="16" height="8" rx="1.2" fill="#fff" />
          <rect x="21" y="4" width="1.6" height="4" rx="0.8" fill="#fff" opacity="0.6" />
        </svg>
      </div>
    </div>
  )
}
