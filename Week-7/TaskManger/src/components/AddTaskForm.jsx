import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    description: "",
    price: "",
    image: "",
    priority: "Low",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 3) {
      newErrors.title = "Minimum 3 characters required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      addTask({
        ...formData,
        id: Date.now(),
        completed: false,
      });

      setFormData({
        title: "",
        brand: "",
        description: "",
        price: "",
        image: "",
        priority: "Low",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      
      {/* FLEX CONTAINER */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* LEFT SIDE - IMAGE */}
        <div className="md:w-1/3 flex flex-col items-center">
          
          <div className="w-56 h-56 border rounded overflow-hidden flex items-center justify-center bg-gray-100">
            {formData.image ? (
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">Image Preview</span>
            )}
          </div>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-56 border p-2 rounded mt-4"
          />
        </div>

        {/* RIGHT SIDE - FORM FIELDS */}
        <div className="md:w-2/3 space-y-4">

          <div>
            <input
              type="text"
              name="title"
              placeholder="Product Name"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-4">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
            />

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Product
          </button>

        </div>
      </div>
    </form>
  );
}

export default AddTaskForm;