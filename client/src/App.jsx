import React from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from './components/Navbar';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: '/graphql', // Adjust the URI to match your GraphQL server endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// import App from './App'; // Assuming App is your root component

// // Create an Apollo Client instance
// const client = new ApolloClient({
//   uri: '/graphql', // Specify the URI for your GraphQL server
//   cache: new InMemoryCache(),
// });

// // Wrap the root component with ApolloProvider and provide the ApolloClient instance
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <ApolloProvider client={client}>
//         <App />
//       </ApolloProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

