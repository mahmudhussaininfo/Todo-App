import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    edu: "",
    color: "",
  });
  const [stack, setStack] = useState([
    "html",
    "css",
    "js",
    "mern",
    "bootstrap",
  ]);
  const [select, setSelect] = useState(["html", "css", "js"]);

  //on change
  const handleInputChange = (e) => {
    setInput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  // select chnage
  const handSelectChange = (e) => {
    const value = e.target.value;
    const updateList = [...select];
    if (select.includes(value)) {
      updateList.splice(select.indexOf(value), 1);
    } else {
      updateList.push(value);
    }
    setSelect(updateList);
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2>Create an Account</h2>
                <form action="">
                  <div className="my-3">
                    <label htmlFor="">Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Email</label>
                    <input
                      className="form-control"
                      name="email"
                      value={input.email}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Gender</label>
                    <hr />
                    <label htmlFor="">
                      <input
                        name="gender"
                        value="Male"
                        onChange={handleInputChange}
                        type="radio"
                      />
                      Male
                    </label>{" "}
                    &nbsp;
                    <label htmlFor="">
                      <input
                        name="gender"
                        value="Female"
                        onChange={handleInputChange}
                        type="radio"
                      />{" "}
                      FeMale
                    </label>{" "}
                    &nbsp;
                    <label htmlFor="">
                      <input
                        name="gender"
                        value="others"
                        onChange={handleInputChange}
                        type="radio"
                      />{" "}
                      Others
                    </label>
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Education</label>
                    <hr />
                    <select className="form-control" name="" id="">
                      <option value="">--Select--</option>
                      <option value="">--JSC--</option>
                      <option value="">--SSC--</option>
                      <option value="">--HSC--</option>
                    </select>
                    <hr />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Department</label>
                    <br />
                    {stack.map((item, index) => {
                      return (
                        <>
                          <label htmlFor="" key={index}>
                            <input
                              checked={select.includes(item)}
                              type="checkbox"
                              value={item}
                              onChange={handSelectChange}
                            />
                            {item}
                          </label>
                        </>
                      );
                    })}
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Age</label>&nbsp;
                    <input
                      name="age"
                      value={input.age}
                      onChange={handleInputChange}
                      step={1}
                      min={5}
                      max={100}
                      type="range"
                    />
                    {input.age}
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Color</label>&nbsp;
                    <input
                      name="color"
                      onChange={handleInputChange}
                      className="form-control"
                      type="color"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
