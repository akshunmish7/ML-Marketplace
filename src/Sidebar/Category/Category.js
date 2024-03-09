import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="NLP"
          title="Natural Language Processing (NLP)"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="CV"
          title="Computer Vision"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="SR"
          title="Speech Recogition"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="GAN"
          title="Generative Adversarial Networks (GANs)"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="RL"
          title="Reinforcement Learning"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
