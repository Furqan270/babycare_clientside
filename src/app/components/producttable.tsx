// components/ProductTable.tsx
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {handleEdit, handleDelete} from '@/app/product/page'
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductTableProps {
  products: Product[];
}
const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product 1", price: 10.99, category: "Category 1" },
    { id: 2, name: "Product 2", price: 20.49, category: "Category 2" },
    { id: 3, name: "Product 3", price: 15.29, category: "Category 1" },
    // Add more products as needed
  ]);

 const handleEdit = (id: number) => {
    // Implement edit functionality here
    console.log("Edit product with ID:", id);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality here
    setProducts(products.filter(product => product.id !== id));
  };

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Category</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product) => (
          <Tr key={product.id}>
            <Td>{product.id}</Td>
            <Td>{product.name}</Td>
            <Td>${product.price.toFixed(2)}</Td>
            <Td>{product.category}</Td>
            <Td>
              <IconButton
                colorScheme="blue"
                aria-label="Edit"
                icon={<EditIcon />}
                mr={2}
                onClick={() => handleEdit(product.id)}
              />
              <IconButton
                colorScheme="red"
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => handleDelete(product.id)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;
