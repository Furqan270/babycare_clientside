"use client"
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

export default function Order() {
    return (
        <div>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Order ID</Th>
                    <Th>Name</Th>
                    <Th>City</Th>
                    <Th>Address</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr >
                    <Td>12</Td>
                    <Td> Contoh 1</Td>
                    <Td>JKT</Td>
                    <Td>JL raya</Td>
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