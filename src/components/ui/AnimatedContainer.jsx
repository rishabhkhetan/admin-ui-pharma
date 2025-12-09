export default function AnimatedContainer({ children }) {
  return (
    <div className="fade-in slide-up">
      {children}
    </div>
  );
}
