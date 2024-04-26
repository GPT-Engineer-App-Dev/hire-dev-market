import { Box, Text, Image, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const DeveloperProfile = () => {
  const { id } = useParams();
  const developerDetails = {
    name: `John Doe ${id}`,
    skills: 'JavaScript, React',
    experience: '5 years',
    bio: 'Passionate about building scalable web applications and interactive user experiences.',
    image: `https://i.pravatar.cc/150?img=${id}`
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Image borderRadius="full" boxSize="150px" src={developerDetails.image} alt="Profile" />
        <Text fontSize="2xl" fontWeight="bold">{developerDetails.name}</Text>
        <Text fontSize="lg">Skills: {developerDetails.skills}</Text>
        <Text fontSize="lg">Experience: {developerDetails.experience}</Text>
        <Text>{developerDetails.bio}</Text>
      </VStack>
    </Box>
  );
};

export default DeveloperProfile;