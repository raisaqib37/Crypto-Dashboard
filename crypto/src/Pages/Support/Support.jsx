import Layout from '../../Components/Layout';
import Contact from './Components/Contact';
import { Grid, GridItem } from '@chakra-ui/react';
import From from './Components/From';
import LiveChat from './Components/LiveChat';
import ChatBot from './Components/ChatBot';

const Support = () => {
  return (
    <Layout title={"Support"}>
      <Grid columnGap={"6"} gridTemplateColumns={{
        base: "repeat(1,1fr)",
        xl:"repeat(2,1fr)",
      }}>
        <GridItem colSpan={1}>
          <Contact/>
        </GridItem>
        <GridItem colSpan={1}>
          <From/>
        </GridItem >
        <GridItem colSpan={1}>
          <LiveChat/>
        </GridItem>
        <GridItem colSpan={1}>
          <ChatBot/>
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Support;