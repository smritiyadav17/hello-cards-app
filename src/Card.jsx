function Card({ name, role }) {
    return (
      <div className="card">
        <h2>Hello, {name} 👋</h2>
        <p>Role: {role}</p>
      </div>
    );
  }
  
  export default Card;
  