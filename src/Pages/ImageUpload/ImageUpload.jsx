import axios from "axios";
import React, { useState } from "react";
import "./ImageUp.scss";

const ImageUpload = () => {
  const [img, setImg] = useState([]);

  const handleImgUpload = (e) => {
    setImg((prevState) => [...prevState, ...Array.from(e.target.files)]);
  };

  const handleImgSubmit = () => {
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
        })
        .catch();
    });
  };
  return (
    <>
      <div className="imageUpload py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="py-3">Image Preview & Upload</h1> <hr />
              <input type="file" multiple onChange={handleImgUpload} />
              <button onClick={handleImgSubmit} className="btn btn-success">
                Upload
              </button>
              <div className="mainImage py-5">
                {img.length > 0 && (
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        {img.map((item, index) => {
                          const prevUrl = URL.createObjectURL(item);
                          return (
                            <div className="col-md-4" key={index}>
                              <img src={prevUrl} alt="" />
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
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
