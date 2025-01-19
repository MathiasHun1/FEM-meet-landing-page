import '../styles/components/DecorElement.scss';

const DecorElement = ({ number }) => {
  return (
    <div className="wrapper-decor">
      <div className="vertical-line"></div>
      <div className="circle">{number}</div>
    </div>
  );
};

export default DecorElement;
