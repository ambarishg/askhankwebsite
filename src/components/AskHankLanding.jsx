import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  FiClock,
  FiCompass,
  FiHeadphones,
  FiLock,
  FiMessageCircle,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const differentiators = [
  {
    title: "Confidential by design",
    copy: "Private Q&A with Henry Svec keeps vulnerable money conversations safe, judgment-free, and off the record.",
    icon: FiLock,
  },
  {
    title: "Relationship-first coaching",
    copy: "We untangle the people side of money so partners and families can make decisions with empathy and clarity.",
    icon: FiUsers,
  },
  {
    title: "Actionable playbooks",
    copy: "Every session ends with prioritized steps you can apply immediately for measurable progress.",
    icon: FiTrendingUp,
  },
];

const proofPoints = [];

const podcastHighlights = [
  "Weekly prompts to navigate family, founder, and wealth decisions with calm.",
  "Short, high-signal episodes distilled from real coaching sessions.",
  "Actionable scripts and reframes you can bring into your next money talk.",
];

const focusAreas = [
  "Navigating difficult money conversations with partners or family",
  "Building resilient wealth strategies for volatile markets",
  "Clarifying debt, investment, and retirement decisions with expert insight",
  "Setting boundaries between business, legacy, and relationships",
];

const steps = [
  {
    title: "Share the scenario",
    detail: "Send a confidential brief about the decision, tension, or transition on your mind.",
    icon: FiMessageCircle,
  },
  {
    title: "Get the Hank perspective",
    detail: "Receive tailored options rooted in decades of advising and behavioural coaching.",
    icon: FiCompass,
  },
  {
    title: "Move with conviction",
    detail: "Leave each session with scripts, timelines, and next steps you can execute immediately.",
    icon: FiClock,
  },
];

const faq = [
  {
    question: "Who is Ask Hank for?",
    answer:
      "Couples, founders, and families who want a trusted sounding board for sensitive financial decisions or money relationship hurdles.",
  },
  {
    question: "Is everything actually confidential?",
    answer:
      "Yes. Every conversation stays between you and Henry Svec. We never record, sell, or reuse your story.",
  },
  {
    question: "Do I need financial statements ready?",
    answer:
      "No formal prep is required. Bring the context, the concern, and the outcomes you hope to reach—Hank guides the rest.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80";

const AskHankLanding = () => {
  const cardBg = useColorModeValue("white", "neutral.800");
  const subtleBg = useColorModeValue("neutral.100", "neutral.700");

  return (
    <Box as="main">
      <Box bgGradient="linear(to-r, brand.800, brand.600)" color="white" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 12, lg: 16 }}
            align={{ base: "flex-start", lg: "center" }}
          >
            <VStack align="stretch" spacing={6} flex={1}>
              <Tag
                alignSelf="flex-start"
                size="lg"
                bg="whiteAlpha.200"
                color="white"
                fontWeight="semibold"
                px={4}
                py={2}
              >
                Money coach + relationship strategist
              </Tag>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter">
                Ask Hank before the money conversations get messy.
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="taller">
                AskHank.ai gives you discreet access to Henry Svec’s decades of advisory wisdom so
                you can navigate money, relationships, and legacy moves with confidence.
              </Text>
              <HStack spacing={4} wrap="wrap">
                <Button
                  as={Link}
                  href="https://askhank.ai"
                  isExternal
                  size="lg"
                  colorScheme="accent"
                  fontWeight="bold"
                >
                  Enter the Q&amp;A portal
                </Button>
              </HStack>
            </VStack>
            <Box flex={1} maxW="520px" w="100%">
              <Box position="relative" borderRadius="3xl" overflow="hidden" boxShadow="2xl">
                <Image
                  src={heroImage}
                  alt="Advisor collaborating with clients"
                  objectFit="cover"
                  w="100%"
                  h={{ base: "280px", lg: "400px" }}
                />
                <Box position="absolute" inset={0} bgGradient="linear(to-br, blackAlpha.700, transparent)" />
                <VStack position="absolute" bottom={6} left={6} align="start" spacing={1} color="white">
                  <Text fontSize="xs" letterSpacing="widest">
                    AskHank.ai Private Q&amp;A
                  </Text>
                  <Heading size="md">One trusted voice when money meets emotion.</Heading>
                </VStack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 10 }}
          align="stretch"
          bgGradient="linear(to-r, brand.900, brand.700)"
          color="white"
          p={{ base: 8, md: 10 }}
          borderRadius="3xl"
          borderWidth={1}
          borderColor="brand.500"
          boxShadow="2xl"
        >
          <VStack flex={1} align="flex-start" spacing={5}>
            <Tag
              size="lg"
              px={4}
              py={2}
              bg="whiteAlpha.200"
              color="white"
              fontWeight="semibold"
              borderRadius="full"
            >
              Podcast spotlight
            </Tag>
            <Heading size="lg" lineHeight="short">
              Tune into the Ask Your Money Coach podcast.
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900">
              Join Henry Svec each week for candid breakdowns of the financial and relational knots
              listeners submit before stepping into their own conversations.
            </Text>
            <Button
              as={Link}
              href="https://open.spotify.com/show/3Btgj6qaZYBJyCUHY2yu3G"
              isExternal
              size="lg"
              colorScheme="whiteAlpha"
              color="brand.900"
              bg="white"
              _hover={{ bg: "neutral.100" }}
              fontWeight="bold"
            >
              Listen on Spotify
            </Button>
          </VStack>
          <VStack
            flex={1}
            align="stretch"
            spacing={4}
            bg="whiteAlpha.200"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
          >
            <HStack spacing={3}>
              <Icon as={FiHeadphones} boxSize={8} color="white" />
              <Box>
                <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="whiteAlpha.700">
                  What you’ll hear
                </Text>
                <Heading size="md">Coaching in your earbuds</Heading>
              </Box>
            </HStack>
            {podcastHighlights.map((item) => (
              <HStack key={item} align="start" spacing={3}>
                <Icon as={CheckCircleIcon} color="accent.300" mt={1} />
                <Text color="whiteAlpha.900">{item}</Text>
              </HStack>
            ))}
          </VStack>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={{ base: 12, md: 16 }}>
          {differentiators.map((item) => (
            <VStack
              key={item.title}
              align="start"
              spacing={4}
              bg={cardBg}
              p={6}
              borderRadius="xl"
              borderWidth={1}
              borderColor="neutral.200"
              boxShadow="md"
            >
              <Icon as={item.icon} boxSize={8} color="brand.600" />
              <Heading size="md">{item.title}</Heading>
              <Text color="neutral.600">{item.copy}</Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Box id="conversations" mt={{ base: 14, md: 20 }}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 10, lg: 12 }}
            align="stretch"
          >
            <VStack
              flex={1}
              align="stretch"
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              borderWidth={1}
              borderColor="neutral.200"
              boxShadow="lg"
              spacing={5}
            >
              <Heading size="lg" color="brand.700">
                Conversations Hank leads
              </Heading>
              {focusAreas.map((item) => (
                <HStack key={item} align="start" spacing={3}>
                  <Icon as={CheckCircleIcon} color="accent.500" mt={1} />
                  <Text color="neutral.700">{item}</Text>
                </HStack>
              ))}
            </VStack>

            <VStack
              id="how-it-works"
              flex={1}
              align="stretch"
              bg={subtleBg}
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              borderWidth={1}
              borderColor="brand.100"
              spacing={6}
            >
              <Heading size="lg" color="brand.800">
                How Ask Hank works
              </Heading>
              {steps.map((step, index) => (
                <Stack
                  key={step.title}
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  align="flex-start"
                >
                  <Tag colorScheme="brand" borderRadius="full" size="lg">
                    {index + 1}
                  </Tag>
                  <Box>
                    <HStack spacing={2}>
                      <Icon as={step.icon} color="brand.600" />
                      <Heading size="sm">{step.title}</Heading>
                    </HStack>
                    <Text color="neutral.700" mt={2}>
                      {step.detail}
                    </Text>
                  </Box>
                </Stack>
              ))}
            </VStack>
          </Stack>
        </Box>

        <Box
          mt={{ base: 16, md: 20 }}
          bg={cardBg}
          borderRadius="3xl"
          borderWidth={1}
          borderColor="neutral.200"
          boxShadow="xl"
          p={{ base: 8, md: 12 }}
        >
          <Stack spacing={{ base: 10, md: 16 }} direction={{ base: "column", md: "row" }} align="center">
            <VStack flex={1} align="start" spacing={4}>
              <Heading size="lg">Private Q&amp;A Answers</Heading>
              <Text color="neutral.700">
                Every Ask Hank exchange blends financial strategy with human insight. Whether you
                need a script for a delicate conversation or a blueprint for long-term resilience,
                you get clarity rooted in experience.
              </Text>
            </VStack>
            <Divider
              orientation="vertical"
              height="140px"
              borderColor="neutral.300"
              borderWidth={1}
              mx={{ base: 0, md: 4 }}
              display={{ base: "none", md: "block" }}
            />
            <VStack flex={1} align="start" spacing={4}>
              <Heading size="lg">Ready when decisions cannot wait.</Heading>
              <Text color="neutral.700">
                Submit your question today and receive tailored guidance within one business day—
                without ever stepping into a boardroom.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <SimpleGrid id="faq" columns={{ base: 1, md: 3 }} spacing={6} mt={{ base: 14, md: 20 }}>
          {faq.map((item) => (
            <VStack
              key={item.question}
              align="stretch"
              spacing={3}
              p={6}
              bg={cardBg}
              borderRadius="xl"
              borderWidth={1}
              borderColor="neutral.200"
            >
              <Heading size="md">{item.question}</Heading>
              <Text color="neutral.700">{item.answer}</Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 16, md: 24 }}
          bgGradient="linear(to-r, brand.700, brand.500)"
          color="white"
          p={{ base: 8, md: 12 }}
          borderRadius="3xl"
          textAlign="center"
          boxShadow="2xl"
        >
          <Heading size="lg" mb={4}>
            Money confidence starts with one honest conversation.
          </Heading>
          <Text fontSize="lg" maxW="3xl" mx="auto" mb={8}>
            Ask Hank to decode the financial, emotional, and relational layers of your next big
            decision—and move forward knowing an expert has your back.
          </Text>
          <HStack justify="center" spacing={4} wrap="wrap">
            <Button
              as={Link}
              href="https://askhank.ai"
              isExternal
              size="lg"
              colorScheme="whiteAlpha"
              color="brand.800"
              bg="white"
              _hover={{ bg: "neutral.100" }}
            >
              Start a question
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default AskHankLanding;


