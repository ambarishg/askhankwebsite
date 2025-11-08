import { Box, Container, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { BRAND_TITLE } from "../constants/branding.js";

const SiteFooter = () => {
  return (
    <Box bg="brand.900" color="white" mt={16}>
      <Container maxW="container.xl" py={10}>
        <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="space-between">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              {BRAND_TITLE}
            </Text>
            <Text mt={2} color="whiteAlpha.800">
              Private advisory for complex wealth conversations.
            </Text>
          </Box>

          <Flex direction="column" gap={2}>
            <Text textTransform="uppercase" letterSpacing="wider" fontSize="sm" color="whiteAlpha.700">
              Find us
            </Text>
            <Link href="mailto:hello@askhank.ai" color="accent.200">
              hello@askhank.ai
            </Link>
          </Flex>

          <Flex direction="column" gap={2}>
            <Text textTransform="uppercase" letterSpacing="wider" fontSize="sm" color="whiteAlpha.700">
              Explore
            </Text>
            <Link href="#how-it-works" color="accent.200">
              Process
            </Link>
            <Link href="#conversations" color="accent.200">
              Focus Areas
            </Link>
            <Link href="#faq" color="accent.200">
              FAQs
            </Link>
          </Flex>
        </Stack>

        <HStack
          mt={8}
          pt={6}
          borderTopWidth={1}
          borderColor="whiteAlpha.300"
          justify="space-between"
          flexWrap="wrap"
        >
          <Text fontSize="sm" color="whiteAlpha.600">
            (c) {new Date().getFullYear()} {BRAND_TITLE}. All rights reserved.
          </Text>
          <Text fontSize="sm" color="whiteAlpha.600">
            Built by Misron 
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default SiteFooter;
