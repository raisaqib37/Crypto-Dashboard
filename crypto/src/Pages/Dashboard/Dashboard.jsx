import React from "react";
import Layout from "../../Components/Layout";
import Portfolio from "./Portfolio";
import CardLeft from "./CardLeft";
import { Grid, GridItem } from "@chakra-ui/react";
import CardRight from "./CardRight";
import CardDownR from "./CardDownR";
import CardDown from "./CardDown";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <Grid gridTemplateColumns={{
        base: "repeat(1,1fr)",
        xl:"repeat(2,1fr)",
      }}>
        <GridItem colSpan={{
          base:"1",
          xl: "2"
        }}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <CardLeft />
        </GridItem>
        <GridItem colSpan={1}>
          <CardRight />
        </GridItem>
        <GridItem colSpan={1}>
          <CardDown />
        </GridItem>
        <GridItem colSpan={1}>
          <CardDownR />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
