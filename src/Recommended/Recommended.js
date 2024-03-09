import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Featured Organizations</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="OpenAI" title="Open AI" />
          <Button onClickHandler={handleClick} value="Google" title="Google" />
          <Button onClickHandler={handleClick} value="Facebook" title="Facebook" />
          <Button onClickHandler={handleClick} value="Microsoft" title="Microsoft" />
          <Button onClickHandler={handleClick} value="Nvidia" title="Nvidia" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
