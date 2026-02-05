function Profile() {
  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>👤 User Profile</h2>
      <p style={styles.text}>
        This component was loaded lazily using <b>React.lazy()</b>.
      </p>
      <p style={styles.text}>
        Lazy loading reduces initial bundle size and improves performance.
      </p>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    color: '#333',
    padding: '20px',
    borderRadius: '12px',
    width: '300px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
  },
  heading: {
    marginBottom: '10px'
  },
  text: {
    fontSize: '15px'
  }
}

export default Profile
