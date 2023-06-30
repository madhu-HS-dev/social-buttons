const Button = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <button className={`buttons ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Social Buttons</h1>
    <div className="button-content">
      <Button text="Like" className="button1" />
      <Button text="Comment" className="button2" />
      <Button text="Share" className="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
