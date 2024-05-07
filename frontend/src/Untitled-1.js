import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Link, useNavigate } from "react-router-dom";

const AddCarForm = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [maxPersons, setMaxPersons] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      setLoading(true);
      try {
        const snapshot = await fileRef.put(selectedFile);
        const url = await snapshot.ref.getDownloadURL();
        console.log(url);
        setImageUrl(url);
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          brand,
          price,
          fuelType,
          maxPersons,
          category,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Car added successfully");
        navigate("/admin-view");
        // Optionally, reset the form fields
        setBrand("");
        setPrice("");
        setFuelType("");
        setMaxPersons("");
        setCategory("");
        setImageUrl(null);
      } else {
        throw new Error(data.message || "Failed to add car");
      }
    } catch (error) {
      console.error("Error adding car:", error);
      alert("Failed to add car. Please try again.");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#f0a70a22] flex ">
      <div className="max-w-md bg-white border rounded-xl h-fit shadow-lg mx-auto my-auto justify-center">
        <div className="p-5">
          <h2 className="text-4xl font-Satisfy text-center font-bold mb-4">
            Add Car
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="image" className="block mb-1">
                Image:
              </label>
              <input
                type="file"
                id="image"
                required
                onChange={handleFileUpload}
                accept="image/*"
                className="border rounded p-2 w-full"
              />
            </div>
            {loading ? <p className="text-pretty">Uploading image...</p> : ""}
            <div>
              <label htmlFor="brand" className="block mb-1">
                Brand Name:
              </label>
              <input
                type="text"
                id="brand"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-1">
                Price:
              </label>
              <input
                type="number"
                id="price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="fuelType" className="block mb-1">
                Fuel Type:
              </label>
              <input
                type="text"
                id="fuelType"
                required
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="maxPersons" className="block mb-1">
                Maximum Persons:
              </label>
              <input
                type="number"
                id="maxPersons"
                required
                value={maxPersons}
                onChange={(e) => setMaxPersons(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-1">
                Vehicle Category:
              </label>
              <select
                id="category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
                className="border rounded p-2 w-full"
              >
                <option value="">Select Category</option>
                <option value="Car">Car</option>
                <option value="Van">Van</option>
                <option value="Bus">Bus</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-tahiti text-black border px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Car
              </button>
              <Link to="/admin-view">
                <button className="bg-silver text-black border px-4 py-2 rounded hover:bg-BrownLi transition-colors duration-300">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCarForm;