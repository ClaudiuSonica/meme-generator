import "./Form.scss";

const Form = () => {

  const preventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <form className="form" onSubmit={preventDefault}>
        <div className="form--input__box">
          <input
            className="form--input"
            type="text"
            placeholder="Top text" />
          <input
            className="form--input"
            type="text"
            placeholder="Bottom text"
          />
        </div>
        <button className="form--btn">Get a new meme image 🖼</button>
      </form>
    </main>
  );
};

export default Form;
