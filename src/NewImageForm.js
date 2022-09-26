import { React, useState } from "react";

function NewImageForm() {
  // const [input, setInput] = useState({
  //     text: '',
  //     url: ''
  // })

  // setInput({
  //     text: 'gsdjhbfjds',
  //     url: 'sdhbfksdfda'
  // })

  // setInput(input.url = 'sfkgjbfskg')

  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const [data, setData] = useState({
    text: "",
    url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      text: text,
      url: url,
    });
    console.log(text, url);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onUrlChange = (e) => {
    setUrl(e.target.value);
  };

  console.log(text, url);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter the date</label>
        <input onChange={onTextChange} value={text} name="" type="text"></input>

        <label>Enter the image URL</label>
        <input
          onChange={onUrlChange}
          value={url}
          name="url"
          type="text"
        ></input>

        <input type="submit"></input>
      </form>

      <p>{data.text}</p>
      <img src={data.url}></img>
    </div>
  );
}

export default NewImageForm;
