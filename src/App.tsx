import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Disclosure,Dialog } from '@headlessui/react';
import Navigation from "./Navigation";

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
      mass {
        kg
      }
      type
      wikipedia
      engines {
        type
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const [isOpen, setIsOpen] = useState(true);

  if (loading) return <p className="text-blue-900">Wait a second</p>;
  if (error) return <p className="text-red-900">Error:{error.message}</p>;

  return (
    <div className="m-8">
        <div className="bg-slate-400 rounded-md p-4"><Disclosure>
          <Disclosure.Button className="bg-blue-600 text-white font-bold p-4 rounded-sm">
            ???
          </Disclosure.Button>
          <Disclosure.Panel className="bg-white p-4 rounded-md mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ducimus vero architecto fugiat est laboriosam rem saepe quas aliquam voluptas earum deserunt perspiciatis porro recusandae nisi labore, explicabo quia modi.
          </Disclosure.Panel>
        </Disclosure></div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Description>We don't know what's in there.</Dialog.Description>


        <p>?????</p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        </Dialog.Panel>
        </Dialog>
      <h2 className="text-5xl text-center">
        Just trying to build some stuff in here. 🚀
      </h2>
      <div className="grid">
        {data.rockets.map(
          ({
            id,
            name,
            description,
            active,
            engines,
            boosters,
            first_flight,
            mass,
            company,
            type,
            wikipedia,
          }: {
            id: string;
            name: string;
            description: string;
            active: boolean;
            engines: {type:string};
            boosters: string;
            first_flight: string;
            mass: {kg:number};
            company: string;
            type: string;
            wikipedia: string;
          }) => (
            <div
              key={id}
              className="bg-slate-100 mt-8 p-8 shadow-sm rounded-lg"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-center">{name}</h3>
                  <p className="bg-white p-4 rounded-xl h-42 mt-4">
                    {description}
                  </p>
                </div>
                <div>
                  <hr className="mt-5 mb-5" />
                  <div className="flex justify-between">
                    <b>company:</b> {company}
                  </div>
                  <div className="flex justify-between">
                    <b>status:</b> {active ? "active" : "inactive"}
                  </div>
                  <div className="flex justify-between">
                    <b>boosters:</b> {boosters}
                  </div>
                  <div className="flex justify-between">
                    <b>engines:</b> {engines.type}
                  </div>
                  <div className="flex justify-between">
                    <b>first flight:</b> {first_flight}
                  </div>
                  <div className="flex justify-between">
                    <b>mass:</b> {Math.round(mass.kg / 1000)} tons
                  </div>
                  <div className="flex justify-between">
                    <b>engine types:</b> {type}
                  </div>
                  <a
                    href={wikipedia}
                    target="_blank"
                    className="bg-purple-500 text-white p-1 mt-4 rounded-md block text-center font-bold drop-shadow-lg"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <Navigation/>
      <Outlet/>
    </div>

  );
}

export default App;
