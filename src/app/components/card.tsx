// components/ProductCard.tsx

import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const ProductCard = () => {
  // Mock product data
  const products = [
    { id: 1, name: "Product 1", count: 50 },
    { id: 2, name: "Product 2", count: 30 },
    { id: 3, name: "Product 3", count: 80 },
    { id: 4, name: "Product 4", count: 20 },
    // Add more products as needed
  ];

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
      {products.map((product) => (
        <Box
          key={product.id}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          bg="white"
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {product.name}
          </Text>
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            {product.count}
          </Text>
          <Text fontSize="sm" color="gray.500">
            This is the total count for {product.name}.
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProductCard;
