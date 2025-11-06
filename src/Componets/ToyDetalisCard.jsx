import React, { useState } from "react";

const ToyDetailsCard = ({ toy }) => {
  const {
    thumbnail,
    toyName,
    rating,
    availableQuantity,
    price,
    description,
  } = toy || {};

  const [message, setMessage] = useState("");

  const handleTryNow = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    console.log("Try Now Submitted:", { name, email });

    setMessage("✅ Thank you! Your Try Now request has been received.");

    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <div className="flex md:items-center flex-col md:flex-row gap-8 bg-base-100 rounded-xl shadow-lg p-6">
        <img
          src={thumbnail}
          alt={toyName}
          className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow-md"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-pink-600 mb-3">
            {toyName || "Toy Name"}
          </h2>
          <p className="text-lg mb-2">⭐ Rating: {rating || "N/A"}</p>
          <p className="mb-2">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {availableQuantity || 0}
          </p>
          <p className="text-xl font-semibold text-blue-600 mb-2">
            ${price || "0.00"}
          </p>
          {description && (
            <p className="text-gray-600 mt-2">{description}</p>
          )}
        </div>
      </div>
      <div className="mt-8 bg-base-200 p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-4 text-center text-pink-600">
          Try Now
        </h3>
        <form
          onSubmit={handleTryNow}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full md:w-1/3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full md:w-1/3"
            required
          />
          <button type="submit" className="btn btn-primary">
            Try Now
          </button>
        </form>

        {message && (
          <p className="text-green-600 mt-4 text-center font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ToyDetailsCard;
