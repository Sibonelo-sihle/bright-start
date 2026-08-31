import type { AdminUser } from '../types';

const SESSION_KEY = 'brightstart_mock_admin_session';
const MOCK_USER: AdminUser = { id:'mock-admin', name:'Bright Start Admin', email:'admin@brightstart.demo', initials:'BA' };

// Development-only client-side auth seam. Replace these functions with Supabase Auth.
export async function signIn(email: string, password: string): Promise<AdminUser> {
  await Promise.resolve();
  if (email !== 'admin@brightstart.demo' || password !== 'BrightStartDemo!') throw new Error('Use the documented demo credentials.');
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(MOCK_USER));
  return MOCK_USER;
}
export async function signOut(): Promise<void> { sessionStorage.removeItem(SESSION_KEY); }
export async function getCurrentAdmin(): Promise<AdminUser | null> {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; }
}
