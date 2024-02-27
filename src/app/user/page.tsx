import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

export default function User () {
    return (
        <div>
              <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>No</Th>
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                    <Th>Email</Th>
                    <Th>Password</Th>
                    <Th>Address</Th>
                    <Th>Action</Th>
                    
                </Tr>
            </Thead>
            <Tbody>
                <Tr >
                    <Td>12</Td>
                    <Td> A</Td>
                    <Td>B</Td>
                    <Td>jb@gmal.com</Td>
                    <Td>123</Td>
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