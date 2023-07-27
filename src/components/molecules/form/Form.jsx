import './Form.scss';

const Form = () => {
  return (
    <form className='form'>
      <div className="form--input__box">
        <input className='form--input' type="text" />
        <input className='form--input' type="text" />
      </div>
      <button className='form--btn' >Get a new meme image 🖼</button>
    </form>
  )
}

export default Form;