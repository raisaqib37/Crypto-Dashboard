import Layout from "../../Components/Layout";
import { Button, Card, Flex, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import { FiDownload, FiSearch } from "react-icons/fi";
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
      <Card mt={3} boxShadow={"lg"}>
        <Tabs>
          <TabList>
            {tabs.map((map) => (
              <Tab key={map.name}>
                {map.name}
                <Tag p={"5px"} borderRadius={"xl"} ml={"1"}> {map.count} </Tag>
              </Tab>
            ))}
            <InputGroup maxW={"200px"} ml={"24rem"}>
            <InputLeftElement>
            <Icon cursor={"pointer"} color={"purple.500"} fontSize={"16px"} as={FiSearch}/>
            </InputLeftElement>
            <Input type="text" placeholder="Search Here" bg={"white"} border={"none"}/>
            </InputGroup>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
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
