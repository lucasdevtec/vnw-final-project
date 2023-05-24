import { Flex, Text, Spinner } from "@chakra-ui/react";

export default function LoaderFullSize() {
  return (
    <>
      <Flex
        bgColor={"#44475A"}
        position={"fixed"}
        width={"100vw"}
        height={"100vh"}
        justify={"center"}
        align={"center"}
      >
        <Flex align={"center"}>
          <Spinner
            thickness="4px"
            color="gray.100"
            size="xl"
            marginRight={10}
          />
          <Text color="gray.300" fontSize="xl">
            Carregando dados
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
