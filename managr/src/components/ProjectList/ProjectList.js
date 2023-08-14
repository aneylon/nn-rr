import "./ProjectList.css";

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No Projects yet</p>}
      {projects.map((proj) => (
        <div key={proj.id}> {proj.name}</div>
      ))}
    </div>
  );
}
