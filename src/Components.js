import React from "react";
import Foo from "./Components/Foo";
import Bar from "./Components/Bar";

const Components = {
  foo: Foo,
  bar: Bar,
};

export default (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block,
    });
  }
  return React.createElement(
    () => (
      (<div>The component{block.component} has not been created yet.</div>),
      { key: block._uid }
    )
  );
};
