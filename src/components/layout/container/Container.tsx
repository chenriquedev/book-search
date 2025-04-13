import './container.css'

interface ContainerComponentProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerComponentProps) {
  return (
    <div className="container">
      <div className="content">{children}</div>
    </div>
  );
}

export default Container;
