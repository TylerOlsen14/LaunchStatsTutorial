import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        Launches{
            flight_number
            mission_name
            launch_data_local
            launch_success
        }
    }
`;


export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
              if(loading) return <h4>Loading ...</h4>
              if(error) console.log(error);

              return (
              <div>
                {
                  data.Launches.map(Launch => (
                    <LaunchItem key={Launch.flight_number} Launch={Launch}/>
                  ))
                }
              </div>
              )
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launches
