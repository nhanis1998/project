import React from "react";
import Overview from "../04/components/overview";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
export default function Index_04() {
  const client = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Overview />
    </ApolloProvider>
  );
}
