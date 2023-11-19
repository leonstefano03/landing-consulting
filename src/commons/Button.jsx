import './Button.css';
export default function Button({ className, onClick }) {
  return (
    <div className={`menu  ${className}`}>
      <input
        type="checkbox"
        href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
        onChange={onClick}
      />
      <label className="menu-open-button" for="menu-open">
        <span className="lines line-1"></span>
        <span className="lines line-2"></span>
        <span className="lines line-3"></span>
      </label>
    </div>
  );
}
