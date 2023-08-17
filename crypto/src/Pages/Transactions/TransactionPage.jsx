import Layout from "../../Components/Layout";
import { Button, Card, Flex, Icon, Tag } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <Layout title={"Transactions"}>
      <Flex justifyContent={"end"}>
        <Button leftIcon={<Icon as={FiDownload} fontSize={"18px"} />}>
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList>
            {tabs.map((map) => (
              <Tab key={map.name}>
                {map.name}
                <Tag> {map.count} </Tag>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Layout>
  );
};
export default TransactionPage;
