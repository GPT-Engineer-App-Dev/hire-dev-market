import { Box, Text, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const DeveloperProfile = () => {
  const { id } = useParams();
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">Developer Profile - ID: {id}</Text>
      <Image src={`https://i.pravatar.cc/150?img=${id}`} alt="Profile" />
      <Text mt={3}>Detailed information about the developer will be displayed here.</Text>
    </Box>
  );
};

export default DeveloperProfile;