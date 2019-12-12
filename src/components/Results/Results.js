import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../backend-request/index";
import styled from "styled-components";
import colours from "../../assets/colours";
import { VictoryPie } from "victory";

export const Results = props => {
  const pathname = props.location.pathname;
  const splittedPath = pathname.split("/");
  // This is always `2`, as we have defined.
  const id = splittedPath[2];

  const [data, setData] = useState({});
  const responses = data.responses;

  const responseArray = responses => {
    if (responses) {
      return Object.keys(responses).map(eachResponse => ({
        x: eachResponse,
        y: responses[eachResponse].length
      }));
    }
  };

  const graphData = responseArray(responses);
  console.log("graphData is", graphData);

  const votesResult = responses => {
    if (responses) {
      return Object.keys(responses).map(eachResponse => {
        return (
          <p>
            {eachResponse} : {responses[eachResponse].length}
          </p>
        );
      });
    }
  };

  const totalVotes = responses => {
    if (responses) {
      return Object.keys(responses).reduce((total, value) => {
        return total + responses[value].length;
      }, 0);
    }
  };

  // const hasNoVotes = graphData.filter(item => item.y > 0).length === 0;

  // fetch the poll info from db
  useEffect(() => {
    fetch(API_BASE_URL + `/result/${id}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <MainResults>
      <div className="wrapper">
        <h2> Poll Results</h2>
        <div>
          <p className="question"> {data.question}</p>
          <p className="channel">Group Asked: @{data.channel}</p>
          <p className="channel-size">Channel size: {data.channelSize}</p>
        </div>
        {/* <p>CHANNEL ID: {data.chennelID}</p> */}
        {/* <p>{data.id}</p> */}
        <div>
          <svg width={450} height={300}>
            <circle cx={150} cy={150} r={50} fill="#d3d3d3" />
            <VictoryPie
              colorScale={[
                `${colours.lightblue}`,
                `${colours.green}`,
                `${colours.pink}`,
                `${colours.darkblue}`,
                `${colours.purple}`,
                `${colours.lightgrey}`
              ]}
              standalone={false}
              width={300}
              height={300}
              innerRadius={75}
              data={graphData}
              margin={500}
            />
          </svg>
          <div className="results">
            <p>{votesResult(responses)}</p>
            <p className="total">
              {totalVotes(responses)} of {data.channelSize} users have replied
            </p>
          </div>
        </div>
      </div>
    </MainResults>
  );
};

// export default Results;

const MainResults = styled.main`
  background-color: ${colours.lightgrey};
  div.wrapper {
    padding: 50px 0;
    a {
      font-size: 2rem;
      padding: 10px 45px;
      background-color: ${colours.green};
      color: white;
      border-radius: 2px;
      text-decoration: none;
      font-weight: 700;
      transition: 0.2s;
    }
    a:hover {
      background-color: ${colours.darkblue};
    }
  }
  h2 {
    font-size: 3rem;
    margin-top: 0;
  }
  p.question {
    font-size: 2.5rem;
    margin-top: 0;
    color: grey;
    font-weight: bold;
  }
  p.channel {
    font-size: 1.5rem;
    margin-top: 0;
  }
  p.channel-size {
    font-size: 1.5rem;
    margin-top: 0;
  }
`;
