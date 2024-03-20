import { prisma } from '../auth';

export const fetchingUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error) {
    if (error) throw new Error('Error');
  }
};
