/* eslint-disable react/prop-types */
import "./Form.scss";

/**
 * Form component for inputting text and generating meme images.
 *
 * @param {Object} props - The props object containing event handlers and state.
 * @returns {JSX.Element} - The JSX element for the form.
 */
const Form = (props) => {
  return (
    <div>
      {/* Form for inputting text */}
      <form className="form" onSubmit={props.resetText}>
        <div className="form--input__box">
          {/* Input for top text */}
          <input
            className="form--input"
            type="text"
            placeholder="Top text"
            onChange={props.handleChange}
            name="topText"
            value={props.state.topText}
          />
          {/* Input for bottom text */}
          <input
            className="form--input"
            type="text"
            placeholder="Bottom text"
            onChange={props.handleChange}
            name="bottomText"
            value={props.state.bottomText}
          />
        </div>
        {/* Button to generate meme image */}
        <button onClick={props.generateImage} className="form--btn">
          Get a new meme image 🖼
        </button>
      </form>
    </div>
  );
};

export default Form;
