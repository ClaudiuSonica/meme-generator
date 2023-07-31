import { useEffect, useState } from "react";
import Form from "../../molecules/form/Form";
import "./Meme.scss";

// This function component renders a meme generator. It fetches a list of memes from an API and allows the user to generate and customize memes.

const Meme = () => {
  // State to store the current meme object
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  // State to store the list of all available memes
  const [allMemes, setAllMemes] = useState({});

  // Fetch the list of memes from the API when the component mounts or when the meme state changes
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, [meme]);

  // Function to generate a random meme image
  const getMemeImg = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });
  };

  // Function to handle input changes and update the meme state accordingly
  const onChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  // Function to reset the text of the meme
  const resetText = (e) => {
    e.preventDefault();
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: "",
      bottomText: "",
    }));
  };

  // Render the meme generator form and the generated meme image with text
  return (
    <main>
      <Form
        handleChange={onChange}
        state={meme}
        generateImage={getMemeImg}
        resetText={resetText}
      />
      <div className="meme">
        <img className="meme--image" src={meme.randomImg} alt="meme image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
