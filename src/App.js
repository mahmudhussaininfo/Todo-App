import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import Todo from "./Components/Todo/Todo";
import Counter from "./Components/Counter/Counter";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Files from "./Pages/Files/Files.";
import Home from "./Pages/Home/Home";
import View from "./Components/View/View";
import User from "./Components/User/User";
import TodoMine from "./Components/TodoMine/TodoMine";
import ImageUpload from "./Pages/ImageUpload/ImageUpload";

function App() {
  return (
    <>
      <ImageUpload />
    </>
  );
}

export default App;
