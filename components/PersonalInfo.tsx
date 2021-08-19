import { Avatar, Center, Group, Title } from '@mantine/core';

const PersonalInfo = () => {
  return (
    <Center>
      <Group style={{ backgroundColor: 'yellow', justifyContent: 'space-evenly', width: '70vw' }}>
        <Avatar
          size={200}
          radius={100}
          src="https://avatars.githubusercontent.com/u/70012669?v=4"
        />
        <Group direction="column">
          <Title order={2}>Yeow Ying Sheng</Title>
          <Title order={2}>yeow0067@e.ntu.edu.sg</Title>
        </Group>
      </Group>
    </Center>
  );
};

export default PersonalInfo;
