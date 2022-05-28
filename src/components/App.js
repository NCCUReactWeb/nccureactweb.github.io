import * as React from "react";

export default function App({ url, alt, desc }) {
  return (
    <div>
      <img src={url} alt={alt} />
      <p data-testid="desc">{desc}</p>
    </div>
  );
}
