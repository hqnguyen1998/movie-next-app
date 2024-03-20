import bcrypt from 'bcryptjs';

let salt = 10;

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, salt);
}

export async function comparePass(password: string, hashPassword: string) {
  return await bcrypt.compare(password, hashPassword);
}
