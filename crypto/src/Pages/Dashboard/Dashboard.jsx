import React from "react";
import Layout from "../../Components/Layout";
import Portfolio from "./Portfolio";
import CardLeft from "./CardLeft";
import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <Grid gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md:"repeat(2,1fr)",
      }}>
        <GridItem colSpan={2}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <CardLeft />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
