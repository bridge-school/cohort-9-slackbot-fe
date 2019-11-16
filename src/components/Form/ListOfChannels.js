import React from "react";

const ListOfChannels = ({ channel }) => (
  <option value={channel}>@{channel}</option>
);

export default ListOfChannels;
