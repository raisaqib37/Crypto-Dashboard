import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];
  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <TableContainer bg={"white"} borderRadius={"xl"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
              {tableData.map((value)=>(
                <Tr key={value.name}>
                  <Td fontWeight={"semibold"}>{value.id}</Td>
                  <Td>
                    <Stack>
                      <Text fontWeight={"semibold"}>{value.date}</Text>
                      <Text fontSize={"16px"} color={"black.60"} fontWeight={"medium"}>{value.time}</Text>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack>
                      <Text fontWeight={"semibold"}>{value.type.name}</Text>
                      <Text fontSize={"16px"} color={"black.60"} fontWeight={"medium"}>{value.type.tag}</Text>
                    </Stack>
                  </Td>
                  <Td fontWeight={"semibold"}>{value.amount}</Td>
                  <Td><Tag bg={statusColor[value.status]} color={"white"} borderRadius={"2xl"} p={"7px"}>{value.status}</Tag></Td>
                </Tr>
              ))
              }
           
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
