import { NextResponse } from 'next/server';
import { auth, prisma } from '@/lib/auth';
import { hashPassword } from '@/lib/bcryptLib';

// Private (Only Administrator)
// GET api/user
// Get list of users
export async function GET(req: Request) {
  const session = await auth();
  if (!session && session?.user.role !== 'administrator') {
    return NextResponse.json(
      { msg: 'You are not an admin! get out ...' },
      { status: 401 }
    );
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
      createdAt: true,
    },
  });

  return NextResponse.json({ users }, { status: 200 });
}

// PUBLIC
// POST api/user
// Register User
export async function POST(req: Request) {
  const body = await req.json();

  // Check If User is already exist
  const existedUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (existedUser) {
    return NextResponse.json({ msg: 'Email đã tồn tại...' }, { status: 401 });
  }
  // Hashpassword
  const newPassword = await hashPassword(body.password);

  await prisma.user.create({
    data: {
      ...body,
      password: newPassword,
    },
  });

  return NextResponse.json(
    { msg: 'Đăng ký tài khoản thành công!' },
    { status: 200 }
  );
}
