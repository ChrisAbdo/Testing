import React from "react";

async function getData() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomeSyam() {
  const data = await getData();
  return <div>{Object.keys(data.bpi)}</div>;
}
