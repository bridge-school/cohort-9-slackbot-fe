import React from "react";

export const SelectionOfChannels = ({ channel, index }) => (
  <option selected={index == 0} disabled={index == 0} value={channel}>
    {index == 0 ? channel : `# ${channel}`}
  </option>
);
