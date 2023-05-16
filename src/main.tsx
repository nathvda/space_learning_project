import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router-dom';
import New from './New.tsx';
import NewTwo from './NewTwo.tsx';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',

  cache: new InMemoryCache(),

});

const router = createBrowserRouter(
  createRoutesFromElements(
<>
<Route path="*" element={<App/>}>
<Route path="new" element={<New/>}/>
</Route>
<Route path="/" element={<App/>}>
<Route path="welcome" element={<NewTwo/>}/>
</Route>

</>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>
)
