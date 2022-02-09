import { useState } from "react";

export const Form = () => {
  const [formdata, setFormData] = useState({
    username: "",
    age: "",
  });
  const handlechange = (e) => {
    // if (e.target.name === "username") {
    //   setFormData({ ...formdata, username: e.target.value });
    // }
    // if (e.target.name === "age") {
    //   setFormData({ ...formdata, age: e.target.value });
    // }
    const { name } = e.target;
    setFormData({
      ...formdata,
      [name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Submitting", formdata);
      }}
    >
      <input
        onChange={handlechange}
        type="text"
        placeholder="Enter Name"
        name="username"
      ></input>
      <input
        onChange={handlechange}
        type="number"
        placeholder="Enter age"
        name="age"
      ></input>
      <input type="submit" value="submit" />
    </form>
  );
};
