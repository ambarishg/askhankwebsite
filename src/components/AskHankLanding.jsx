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
  FiDownload,
  FiBookOpen,
  FiHeadphones,
  FiLock,
  FiMessageCircle,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { BRAND_TITLE } from "../constants/branding.js";

const differentiators = [
  {
    title: "Confidential by design",
    copy: "Private Q&A with Hank Svec keeps vulnerable money conversations safe, judgment-free, and off the record.",
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

const trustStats = [
  { value: "30+", label: "Years advising complex families" },
  { value: "4,000+", label: "Confidential money dialogues resolved" },
  { value: "$2B+", label: "Client capital stewarded with care" },
];

const leadershipQuote = {
  quote:
    "Henry blends board-level clarity with the discretion of a family advisor. We leave every session with decisions we can defend.",
  author: "S. Walker",
  role: "Family Office Principal",
};

const futureProofLifeTest = new URL(
  "../../books/Future_Proof_Life_Test_With_Author-1.pdf",
  import.meta.url
);

const focusAreas = [
  "Realign partners or family members before high-stakes wealth moves stall out.",
  "Translate market, liquidity, and succession risk into plain language your board trusts.",
  "Structure debt, investment, and retirement trade-offs so execution stays on schedule.",
  "Protect boundaries between business, legacy, and relationships while scaling.",
];

const steps = [
  {
    title: "Share the scenario",
    detail: "Ask a question about the decision, tension, or transition on your mind.",
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
    question: `Who is ${BRAND_TITLE} for?`,
    answer:
      "Couples, founders, and families who want a trusted sounding board for sensitive financial decisions or money relationship hurdles.",
  },
  {
    question: "Is everything actually confidential?",
    answer:
      "Yes. Every conversation stays between you and Hank Svec. We never record, sell, or reuse your story.",
  },
  {
    question: "Do I need financial statements ready?",
    answer:
      "Yes. If you are serious enough to consider investing in a company you need to download the financial \
statements for the past 3 years into Ask Hank. This ensures your analysis is based on accurate data, not \
AI induced fantasy or crowd sourced information. The reports are available for free from the Company \
Investors Relations site or Sedar+ or Edgar in the United States.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80";

const AskHankLanding = () => {
  const cardBg = useColorModeValue("surfaceElevated", "neutral.800");
  const subtleBg = useColorModeValue("surfaceSubtle", "neutral.700");

  return (
    <Box as="main" position="relative">
      <Box
        bgGradient="linear(to-r, brand.900, brand.600)"
        color="white"
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-30%"
          right="-10%"
          w={{ base: "80%", md: "50%" }}
          h="160%"
          bgGradient="radial(at top, whiteAlpha.400, transparent 60%)"
          opacity={0.5}
        />
        <Box
          position="absolute"
          bottom="-20%"
          left="-10%"
          w={{ base: "70%", md: "40%" }}
          h="120%"
          bgGradient="radial(at bottom, whiteAlpha.300, transparent 60%)"
          opacity={0.4}
        />
        <Container maxW="container.xl" position="relative">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 12, lg: 16 }}
            align={{ base: "flex-start", lg: "center" }}
          >
            <VStack align="stretch" spacing={6} flex={1}>
              <Tag
                alignSelf="flex-start"
                size="lg"
                bg="whiteAlpha.900"
                color="brand.700"
                fontWeight="semibold"
                px={4}
                py={2}
              >
                Money coach + relationship strategist
              </Tag>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter">
                {BRAND_TITLE}
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="taller">
                {`${BRAND_TITLE}—powered by AskHank.ai—gives you answers to your question to Hank Svec’s decades of advisory wisdom so
                you can navigate money, relationships, and legacy moves with confidence.`}
              </Text>
              <HStack spacing={4} wrap="wrap">
                <Button
                  as={Link}
                  href="https://askhank.ai"
                  isExternal
                  size="lg"
                  colorScheme="accent"
                  bg="action"
                  color="onAction"
                  fontWeight="bold"
                  _hover={{ bg: "accent.600", transform: "translateY(-2px)" }}
                >
                  Visit AskHank.ai
                </Button>
              </HStack>
            </VStack>
            <Box flex={1} maxW="520px" w="100%">
              <Box position="relative" borderRadius="3xl" overflow="hidden" boxShadow="2xl" bg="blackAlpha.700">
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
                    {`${BRAND_TITLE} Private Q&A`}
                  </Text>
                  <Heading size="md">One trusted voice when money meets emotion.</Heading>
                </VStack>
              </Box>
            </Box>
          </Stack>

          <Box
            mt={{ base: 10, lg: 12 }}
            bgGradient="linear(to-r, brand.700, brand.500)"
            color="white"
            p={{ base: 6, md: 10 }}
            borderRadius="3xl"
            textAlign="center"
            boxShadow="2xl"
            w="100%"
          >
            <Heading size="lg" mb={{ base: 3, md: 4 }}>
              {`Subscribe to the ${BRAND_TITLE} Newsletter`}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl" mx="auto" mb={{ base: 6, md: 8 }}>
              Weekly prompts from Hank Svec on navigating the emotional and financial layers of
              complex money conversations, sent straight to your inbox.
            </Text>
            <Button
              as={Link}
              href="https://www.askhankyourmoneycoach.ca/subscribe"
              isExternal
              size="lg"
              colorScheme="whiteAlpha"
              color="brand.800"
              bg="white"
              _hover={{ bg: "surfaceSubtle" }}
            >
              Join the newsletter
            </Button>
          </Box>

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
              bg="white"
              color="brand.700"
              fontWeight="semibold"
              borderRadius="full"
            >
              Podcast spotlight
            </Tag>
            <Heading size="lg" lineHeight="short">
              Tune into the Ask Your Money Coach podcast.
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900">
              Join Hank Svec each week for candid breakdowns of the financial and relational knots
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
              _hover={{ bg: "surfaceSubtle" }}
              fontWeight="bold"
            >
              Listen on Spotify
            </Button>
          </VStack>
          <VStack
            flex={1}
            align="stretch"
            spacing={4}
            bg="blackAlpha.400"
            borderRadius="2xl"
            borderWidth={1}
            borderColor="whiteAlpha.400"
            p={{ base: 6, md: 8 }}
          >
            <HStack spacing={3}>
              <Icon as={FiHeadphones} boxSize={8} color="white" />
              <Box>
                <Text fontSize="sm" textTransform="uppercase" letterSpacing="widest" color="whiteAlpha.900">
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
              bgGradient="linear(to-br, white, neutral.100)"
              p={6}
              borderRadius="xl"
              borderWidth={1}
              borderColor="borderSubtle"
              boxShadow="lg"
            >
              <Icon as={item.icon} boxSize={8} color="brand.600" />
              <Heading size="md">{item.title}</Heading>
              <Text color="textMuted">{item.copy}</Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 12, md: 16 }}
          borderRadius="2xl"
          borderWidth={1}
          borderColor="borderSubtle"
          bgGradient="linear(to-r, white, neutral.100)"
          boxShadow="xl"
          p={{ base: 6, md: 8 }}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <HStack spacing={4} align="flex-start" flex={1}>
              <Icon as={FiBookOpen} boxSize={10} color="brand.600" />
              <Box>
              <Heading size="lg" mb={2}>
                Future-Proof Life Test
              </Heading>
              <Text color="textMuted">
                Download the diagnostic Henry uses to uncover financial, relational, and leadership blind
                spots before they cost you momentum. Bring it into your next strategy session or family
                debrief.
              </Text>
            </Box>
            </HStack>
            <Button
              as={Link}
              href={futureProofLifeTest}
              download
              rightIcon={<Icon as={FiDownload} />}
              size="lg"
              colorScheme="accent"
              variant="solid"
            >
              Get the PDF
            </Button>
          </Stack>
        </Box>

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
              borderColor="borderSubtle"
              boxShadow="lg"
              spacing={5}
              divider={<Divider borderColor="borderSubtle" />}
            >
              <Heading size="lg" color="brand.700">
                Conversations Hank leads
              </Heading>
              {focusAreas.map((item) => (
                <HStack key={item} align="start" spacing={3}>
                  <Icon as={CheckCircleIcon} color="accent.500" mt={1} />
                  <Text color="textMuted">{item}</Text>
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
              borderColor="borderSubtle"
              boxShadow="md"
              spacing={6}
            >
              <Heading size="lg" color="brand.800">
                {`How ${BRAND_TITLE} works`}
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
                    <Text color="textMuted" mt={2}>
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
          borderColor="borderSubtle"
          boxShadow="xl"
          p={{ base: 8, md: 12 }}
        >
          <Stack spacing={{ base: 10, md: 16 }} direction={{ base: "column", md: "row" }} align="center">
            <VStack flex={1} align="start" spacing={4}>
              <Heading size="lg">Private Q&amp;A Answers</Heading>
              <Text color="textMuted">
                {`Every ${BRAND_TITLE} exchange blends financial strategy with human insight. Whether you
                need a script for a delicate conversation or a blueprint for long-term resilience,
                you get clarity rooted in experience.`}
              </Text>
            </VStack>
            <Divider
              orientation="vertical"
              height="140px"
              borderColor="borderSubtle"
              borderWidth={1}
              mx={{ base: 0, md: 4 }}
              display={{ base: "none", md: "block" }}
            />
            <VStack flex={1} align="start" spacing={4}>
              <Heading size="lg">Ready when decisions cannot wait.</Heading>
              <Text color="textMuted">
                Ask a question get an answer right away when you need it. Ask Hank is in your
                pocket at all times.
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
              borderColor="borderSubtle"
            >
              <Heading size="md">{item.question}</Heading>
              <Text color="textMuted">{item.answer}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AskHankLanding;
