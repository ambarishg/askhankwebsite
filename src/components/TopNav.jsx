import { Box, Container, Flex, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { BRAND_TITLE } from "../constants/branding.js";

const TopNav = () => {
  const bg = useColorModeValue("white", "neutral.900");
  const border = useColorModeValue("neutral.200", "neutral.700");
  const textColor = useColorModeValue("neutral.700", "neutral.100");

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bg}
      borderBottomWidth={1}
      borderColor={border}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        <Flex
          py={4}
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={4}
          color={textColor}
        >
          <Link href="/" textDecoration="none" _hover={{ textDecoration: "none" }}>
            <HStack spacing={3}>
              <Box
                bgGradient="linear(to-r, brand.700, brand.500)"
                color="white"
                fontWeight="bold"
                px={3}
                py={2}
                borderRadius="md"
              >
                AH
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="brand.700">
                  {BRAND_TITLE}
                </Text>
                <Text fontSize="sm" color="neutral.500">
                  Confidential Money Coaching
                </Text>
              </Box>
            </HStack>
          </Link>

          <HStack spacing={4}>
            <Link href="#how-it-works" fontWeight="medium" color={textColor} _hover={{ color: "brand.600" }}>
              Process
            </Link>
            <Link href="#conversations" fontWeight="medium" color={textColor} _hover={{ color: "brand.600" }}>
              Focus Areas
            </Link>
            <Link href="#faq" fontWeight="medium" color={textColor} _hover={{ color: "brand.600" }}>
              FAQs
            </Link>
          </HStack>

        </Flex>
      </Container>
    </Box>
  );
};

export default TopNav;
