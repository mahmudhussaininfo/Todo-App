import axios from "axios";
import React, { useState } from "react";
import "./File.scss";

const Files = () => {
  const [img, setImg] = useState([]);

  const handleImg = (e) => {
    setImg((prevState) => [...prevState, ...Array.from(e.target.files)]);
  };

  const imgPreviewDelate = (item) => {
    const updateList = img.filter((data) => data !== item);
    setImg(updateList);
  };

  const handleSubmit = () => {
    const data = new FormData();
    img.forEach((item) => {
      data.append("file", item);
      data.append("cloud_name", "dcli0sqrt");
      data.append("upload_preset", "mrmamu");
      axios
        .post("https://api.cloudinary.com/v1_1/dcli0sqrt/image/upload", data)
        .then((res) => {
          console.log(res.data.message);
          setImg([]);
        });
    });
  };
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Image Preview System</h2>
            <hr />
            <div className="card">
              <div className="card-body">
                <input multiple onChange={handleImg} type="file" />
                <button onClick={handleSubmit} className="btn btn-success">
                  Upload
                </button>
              </div>
            </div>
            {img.length > 0 && (
              <div className="card my-5">
                <div className="card-body">
                  <div className="row">
                    {img.map((item, index) => {
                      const imgPreview = URL.createObjectURL(item);
                      return (
                        <div className="col-md-4" key={index}>
                          <div className="preview-img shadow-sm">
                            <img className="mw-100" src={imgPreview} alt="" />
                            <button
                              className="btn-close"
                              onClick={() => imgPreviewDelate(item)}
                            ></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Files;
