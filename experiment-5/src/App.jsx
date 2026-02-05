import { lazy, Suspense, useState } from 'react'

const Profile = lazy(() => import('./Profile'))

function App() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Lazy Loading Experiment</h1>
      <p style={styles.text}>
        This app loads components only when required to improve performance.
      </p>

      <button style={styles.button} onClick={() => setShowProfile(true)}>
        Load Profile
      </button>

      <Suspense fallback={<p style={styles.loading}>Loading component...</p>}>
        {showProfile && <Profile />}
      </Suspense>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    maxWidth: '400px'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#ffdd57',
    color: '#333',
    marginBottom: '20px'
  },
  loading: {
    marginTop: '20px',
    fontSize: '18px'
  }
}

export default App
