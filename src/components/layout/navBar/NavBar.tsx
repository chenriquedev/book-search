import "./navbar.css";

interface NavBarComponentProps {
  children: React.ReactNode;
  title: string;
}

function NavBar({ children, title }: NavBarComponentProps) {
  return (
    <div className="navbar">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default NavBar;
