import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="radar-projetos" element={<Projects />} />
        <Route path="radar-projetos/:projectId" element={<Project />} />
        <Route path="radar-patrocinadores" element={<Sponsors />} />
        <Route path="auditoria" element={<Auditing />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
    </main>
  );
}

function Projects() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Radar de projetos</h2>

      <ul>
        <li>
          <Link to="projeto-01">projeto-01</Link>
        </li>
        <li>
          <Link to="projeto-02">projeto-02</Link>
        </li>
        <li>
          <Link to="projeto-03">projeto-03</Link>
        </li>
        <li>
          <Link to="projeto-04">projeto-04</Link>
        </li>
        <li>
          <Link to="projeto-05">projeto-05</Link>
        </li>
      </ul>
    </main>
  );
}

function Sponsors() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Radar de patrocinadores</h2>
    </main>
  );
}

function Auditing() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Auditoria</h2>
    </main>
  );
}

function Project() {
  let params = useParams();

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Projeto: {params.projectId}</h2>
    </main>
  );
}
