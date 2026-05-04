'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type UserRole = 'user' | 'admin';

interface DemoUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  createdAt: string;
}

interface AuthContextType {
  user: DemoUser | null;
  role: UserRole | null;
  login: (email: string, password: string) => { ok: boolean; role?: UserRole; error?: string };
  register: (payload: { name: string; email: string; phone: string; password: string }) => { ok: boolean; role?: UserRole; error?: string };
  logout: () => void;
}

const USERS_KEY = 'demoUsers';
const SESSION_KEY = 'demoSession';

const seedUsers = (): DemoUser[] => {
  const createdAt = new Date().toISOString().slice(0, 10);
  return [
    {
      id: 'USR-DEMO-ADMIN',
      name: 'Admin Operator',
      email: 'admin@autoloc.demo',
      phone: '+1 (555) 000-0001',
      password: 'Admin123!',
      role: 'admin',
      createdAt,
    },
    {
      id: 'USR-DEMO-USER',
      name: 'Demo Driver',
      email: 'user@autoloc.demo',
      phone: '+1 (555) 111-2233',
      password: 'User123!',
      role: 'user',
      createdAt,
    },
  ];
};

const normalizeEmail = (value: string) => value.trim().toLowerCase();

const readUsers = (): DemoUser[] => {
  if (typeof window === 'undefined') return seedUsers();
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    const seeded = seedUsers();
    localStorage.setItem(USERS_KEY, JSON.stringify(seeded));
    return seeded;
  }
  try {
    const parsed = JSON.parse(raw) as DemoUser[];
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  } catch {
    // ignore and reseed
  }
  const seeded = seedUsers();
  localStorage.setItem(USERS_KEY, JSON.stringify(seeded));
  return seeded;
};

const writeUsers = (users: DemoUser[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const readSessionUser = (users: DemoUser[]): DemoUser | null => {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { userId?: string };
    if (!parsed?.userId) return null;
    return users.find((u) => u.id === parsed.userId) ?? null;
  } catch {
    return null;
  }
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  login: () => ({ ok: false, error: 'Auth not ready' }),
  register: () => ({ ok: false, error: 'Auth not ready' }),
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [users, setUsers] = useState<DemoUser[]>([]);

  useEffect(() => {
    const loadedUsers = readUsers();
    setUsers(loadedUsers);
    const sessionUser = readSessionUser(loadedUsers);
    if (sessionUser) setUser(sessionUser);
  }, []);

  const login = (email: string, password: string) => {
    const list = users.length > 0 ? users : readUsers();
    setUsers(list);
    const match = list.find((u) => normalizeEmail(u.email) === normalizeEmail(email));
    if (!match || match.password !== password) {
      return { ok: false, error: 'Invalid email or password.' };
    }
    setUser(match);
    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: match.id }));
    }
    return { ok: true, role: match.role };
  };

  const register = (payload: { name: string; email: string; phone: string; password: string }) => {
    const name = payload.name.trim();
    const email = payload.email.trim();
    const phone = payload.phone.trim();
    const password = payload.password;
    if (!name || !email || !phone || !password) {
      return { ok: false, error: 'Please fill all required fields.' };
    }
    const list = users.length > 0 ? users : readUsers();
    setUsers(list);
    const exists = list.some((u) => normalizeEmail(u.email) === normalizeEmail(email));
    if (exists) {
      return { ok: false, error: 'This email is already registered.' };
    }
    const createdAt = new Date().toISOString().slice(0, 10);
    const newUser: DemoUser = {
      id: `USR-${Date.now()}`,
      name,
      email,
      phone,
      password,
      role: 'user',
      createdAt,
    };
    const updated = [newUser, ...list];
    writeUsers(updated);
    setUsers(updated);
    setUser(newUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: newUser.id }));
    }
    return { ok: true, role: newUser.role };
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SESSION_KEY);
    }
  };

  const role = user?.role ?? null;

  return (
    <AuthContext.Provider value={{ user, role, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
