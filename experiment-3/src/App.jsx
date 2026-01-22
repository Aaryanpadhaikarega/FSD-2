import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2 style={styles.heading}>Home Page</h2>;
}

function About() {
  return <h2 style={styles.heading}>About Page</h2>;
}

function Contact() {
  return <h2 style={styles.heading}>Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <span style={styles.separator}>|</span>
        <Link style={styles.link} to="/about">
          About
        </Link>
        <span style={styles.separator}>|</span>
        <Link style={styles.link} to="/contact">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    padding: "15px",
    backgroundColor: "#1f2933",
    textAlign: "center",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "18px",
    margin: "0 10px",
  },
  separator: {
    color: "#ffffff",
    margin: "0 5px",
  },
  heading: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default App;
