import { Schema, model } from "mongoose";
//create product schema
const productSchema = new Schema(
  {
    ProductName: {
      type: String,
      required: [true, "product name is required"],
      minLength: [3, "minimum length should be 3 characters"],
      maxLength: [20, "maximum length exceeded 20 characters"],
    },
    pid: {
      type: Number,
      required: [true, "product id must be existed"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
  },

  {
    strict: "throw",
    timestamps: true,
  },
);
export const ProductModel = model("product", productSchema);
