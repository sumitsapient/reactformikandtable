import React, { useState, useEffect } from "react";

export const SpringAPITest = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const array = [1, 4, 3, 5];
  const obj = [
    { name: "Sumit", color: "green" },
    { name: "Prerana", color: "yellow" },
  ];
  const map1 = array.map((x) => x * 2);
  //const obj1 = obj.map((m) => m.name);
  const obj2 = obj.filter((m) => m.color == "green");
  const [error, setError] = useState(null);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.findAllBooks/items")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(true);
          setBook(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        //  exceptions from actual bugs in components.
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {!loading && <div>Loading...</div>}
      {/* {obj.map((m) => m.name)} */}
      {obj2.map((m) => m.name)}
    </div>
  );
};
