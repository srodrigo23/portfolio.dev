import type { Viewport } from 'next';
import RootShell from '../components/rootShell';
import { buildMetadata } from '../i18n/metadata';

export const metadata = buildMetadata('en');

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang='en'>{children}</RootShell>;
}
