import React from "react";

export const HelloWorld = () => {
  let a = "Sumit";
  let b = ["apple", "orange", "grapes"];
  let c = { name: "ram", age: "23" };
  let d = { name: "ram", age: "23", hobby: ["dance", "workout"] };
  let e = [
    { name: "ram", age: "23" },
    { name: "shyam", age: "23" },
    { name: "sita", age: "23" },
  ];
  let f = e.map((m) => {
    return m.age;
  });

  const myFunction = () => {
    return "Sumit";
  };
  const myFunctiontwo = () => {
    return <h1>Sumit</h1>;
  };
  const myFunctionthree = (value) => {
    return value;
  };

  return (
    <div>
      {a}
      {b[0]}
      {c.name}
      {d.hobby[0]}
      {e[2].name}
      {myFunction()}
      {myFunctiontwo()}
      {myFunctionthree("alex")}
      {myFunctionthree("john")}

      {b.map((m) => {
        return <h3 key={m}>{m}</h3>;
      })}
      {e.map((m) => {
        return m.name;
      })}
      {b.filter((m) => {
        return m !== "apple";
      })}
      {f}
    </div>
  );
};
