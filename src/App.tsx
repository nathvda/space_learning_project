import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    rockets {
      id
      name
      description
      active
      boosters
      first_flight
      company
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Wait a second</p>;
  if (error) return <p>Error:{error.message}</p>;
  console.log(data);
  return (
    <div className="m-8">
      <h2 className="text-5xl text-center">Just trying to build some stuff in here. 🚀</h2>
      <div className="grid">
        {data.rockets.map(
          ({ id, name, description, active, boosters, first_flight, company }) => (
            <div className="bg-slate-100 mt-8 p-8 shadow-sm rounded-lg">
              <div key={id} className="flex flex-col justify-between h-full">
                <div><h3 className="text-2xl font-bold text-center">{name}</h3>
                <p className="bg-white p-4 rounded-xl h-42 mt-4">{description}</p>
                </div>
                <div>
                <hr className="mt-5 mb-5"/>
                <div className="flex justify-between"><b>company:</b> {company}</div>
                <div className="flex justify-between"><b>status:</b> {(active) ? "active" : "inactive"}</div>
                <div className="flex justify-between"><b>boosters:</b> {boosters}</div>
                <div className="flex justify-between"><b>first flight:</b> {first_flight}</div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
