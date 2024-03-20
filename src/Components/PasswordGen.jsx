import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import svg from "../img/keymas.svg";
import "../App.css";

const PasswordGen = () => {
  const [length, setLength] = React.useState(8);
  const [numberAllowed, setNumberAllowed] = React.useState(false);
  const [charAllowed, setCharAllowed] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const passwordRef = React.useRef(null);

  const passwordGenerator = React.useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) str += "00123456789";
    if (charAllowed) str += "~!@#%$^&*()'";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = React.useCallback(() => {
    passwordRef.current?.select(); // Select the text
    navigator.clipboard.writeText(password); // Copy the selected text to clipboard
  }, [password]);
  return (
    <section
      id="home"
      className=" grid gap-y-2  h-full sm:grid-cols-2 sm:gap-0 sm:h-full md:bg-slate-100 scroll-smooth "
    >
      <div className="flex flex-col justify-center items-center mt-72  md:mt-28 sm:mt-0">
        <span className="text-2xl  font-bold text-center sm:text-4xl sm:font-bold">
          Random <span className="text-3xl text-orange-600">Password</span>{" "}
          Generator
        </span>
        <br />
        <span className=" text-center font-semibold">
          Create strong and secure passwords to keep your account safe online.
        </span>
      </div>
      <img
        src={svg}
        alt=""
        className=" w-full sm:mt-24 sm:w-3/4 sm:relative right-0 z-30  hover:bg-black hover:rounded-lg hover:shadow-md md:hover:shadow-orange-600 transition ease-in-out delay-150"
      />
      <div className="flex flex-col justify-center items-center gap-3 bg-orange-600 p-1 py-14 rounded-lg mb-4 mx-2 shadow-md shadow-black">
        <div className="">
          <Card sx={{ borderRadius: 5 }} className="">
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Generated Password
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {password}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className=" p-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer font-bold w-48"
            onChange={(e) => {
              setLength(parseInt(e.target.value));
            }}
          />
          <label className="">Length: {length}</label>
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 w-20 rounded-lg text-slate-100 p-2 mx-2"
          >
            Copy
          </button>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="font-semibold text-xl">
            Include Numbers 123...
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput" className="font-semibold text-2xl">
            Include Characters @#$...
          </label>
        </div>
        <div className="">
          <button
            className=" gap-x-1 bg-green-400 text-black py-3 px-6 rounded-md font-medium mx-20"
            onClick={passwordGenerator}
          >
            Generate password
          </button>
        </div>
      </div>
    </section>
  );
};

export default PasswordGen;
