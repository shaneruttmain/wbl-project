import './App.css' // Load the styling for this component

// Simple data for the cards shown on the page
const cards = [
  { title: 'Sunrise', text: 'Bright ideas at the start of the day.' },
  { title: 'Forest', text: 'Calm colors and quiet, natural energy.' },
  { title: 'City', text: 'A little chaos with a strong point of view.' },
]

// Simple list of items for the bottom section
const things = ['Brainrot', 'Music', 'Videogames', 'Food']

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1>Random Website</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#ideas">Ideas</a>
          <a href="#list">List</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="tag">Basic reference page</p>
            <h2>Make something simple and memorable.</h2>
            <p>
              This page is a basic website example. It has a header, a dumb shortcut navigation system,
              some buttons, and a small list.
            </p>
            <button type="button">Click me</button>
          </div>

          <div className="hero-box">
            <span>Sample box</span>
          </div>
        </section>

        <section className="card-section" id="ideas">
          {cards.map((card) => (
            <article key={card.title} className="card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="list-section" id="list">
          <h3>Things I like</h3>
          <ul>
            {things.map((thing) => (
              <li key={thing}>{thing}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
