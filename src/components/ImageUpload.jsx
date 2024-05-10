import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      // You can send formData to your backend API endpoint using fetch or axios
      // Example using fetch:
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      // Handle response from the server
      if (response.ok) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
