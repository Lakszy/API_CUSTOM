import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Table Wooden",
      price: 200,
      img: "table_wooden.jpg", // Image file name
    },
    {
      id: 2,
      name: "Chair Leather",
      price: 300,
      img: "chair_leather.jpg", // Image file name
    },
    {
      id: 3,
      name: "Chair Metal",
      price: 500,
      img: "chair_metal.jpg", // Image file name
    },
    {
      id: 4,
      name: "Sofa Fabric",
      price: 800,
      img: "sofa_fabric.jpg", // Image file name
    },
    {
      id: 5,
      name: "Desk Glass",
      price: 350,
      img: "desk_glass.jpg", // Image file name
    },
    {
      id: 6,
      name: "Table Lamp",
      price: 900,
      img: "Table_lamp.jpg", // Image file name
    },
    {
      id: 7,
      name: "Bookshelf Oak",
      price: 400,
      img: "bookshelf_oak.jpg", // Image file name
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
