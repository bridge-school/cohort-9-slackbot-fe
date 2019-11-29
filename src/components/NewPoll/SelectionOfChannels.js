import React from "react";

export const SelectionOfChannels = ({ channel }) => (
  <option value={channel}>{`#${channel}`}</option>
);
