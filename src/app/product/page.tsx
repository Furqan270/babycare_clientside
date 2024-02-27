"use client"
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
export default function product() {
    return (
        <div>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th>Brand</Th>
                        <Th>Description</Th>
                        <Th>SKU</Th>
                        <Th>Image</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr >
                        <Td> Contoh 1</Td>
                        <Td>100</Td>
                        <Td>Ultra</Td>
                        <Td>Test2</Td>
                        <Td>123</Td>
                        <Td>Image</Td>
                        <Td className="space-x-1">
                            <Button colorScheme='blue' size='sm'>
                                Edit
                            </Button>
                            <Button colorScheme='red' size='sm'>
                                Delete
                            </Button>
                        </Td>
                    </Tr>

                </Tbody>
            </Table>
        </div>
    )
}