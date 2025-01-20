import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [name, setName] = useState("");
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const updatedImages = [...images, ...files];
    setImages(updatedImages);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialMediaHandle", socialMediaHandle);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      setIsUploading(true);
      setUploadStatus("Uploading...");

      const response = await axios.post(
        "http://localhost:8000/api/user//submitDetails",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload Response:", response.data);
      setUploadStatus("Upload successful!");
      alert("Files uploaded successfully!");

      setName("");
      setSocialMediaHandle("");
      setImages([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Upload Error:", error);
      setUploadStatus("Upload failed. Try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        User Submission Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label>
            <strong style={{ color: "#555" }}>Name:</strong>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)")
            }
            onBlur={(e) =>
              (e.target.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)")
            }
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>
            <strong style={{ color: "#555" }}>Social Media Handle:</strong>
          </label>
          <input
            type="text"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)")
            }
            onBlur={(e) =>
              (e.target.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)")
            }
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>
            <strong style={{ color: "#555" }}>Upload Images:</strong>
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            style={{
              marginTop: "10px",
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.backgroundColor = "#e0f7fa")}
            onBlur={(e) => (e.target.style.backgroundColor = "#f9f9f9")}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <strong style={{ color: "#555" }}>Image Previews:</strong>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {imagePreviews.map((preview, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <button
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    border: "none",
                    padding: "5px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "none",
                  }}
                  onClick={() => {
                    setImagePreviews(
                      imagePreviews.filter((_, i) => i !== index)
                    );
                    setImages(images.filter((_, i) => i !== index));
                  }}
                  className="delete-btn"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007BFF",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Submit"}
        </button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </form>
    </div>
  );
};

export default UserForm;
