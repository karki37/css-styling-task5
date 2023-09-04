import style from "./App.module.css";
function App() {
  return (
    <div className={style.container}>
      <h5>developer</h5>
      <header>
        <h1>Frontend Developer</h1>
      </header>
      <div>
        <nav className={style.bar}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
          </ul>
        </nav>
      </div>
      <p>
        I am a new student learning front end react development at Takeo
        Bootcamp. It's been a week of the react bootcamp where I explore doctype
        html, html elements, tags and semantics. Along with that I learned git-
        a version control system that track and manage source code enabling
        multiple developers to work together.
      </p>
      <p>
        Learning takes time and patience. You have to face frustation and
        different struggle scenarios during the learning journey. But I beleive
        over the period of time, you can acheive what you want.
      </p>

      <footer>
        <p>Copyright © 2023. All right reserved.</p>
      </footer>
    </div>
  );
}

export default App;
