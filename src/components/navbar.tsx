'use client';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import DarkMode from './dark-mode';
import { User, BarChartHorizontal } from 'lucide-react';
import { Button } from './ui/button';

export default function NavBar() {
  return (
    <div className="sticky z-50 border-b-2 border-opacity-50">
      <div className="flex flex-row items-center justify-center py-2">
        <NavigationMenu>
          <h1 className="flex align-middle text-xl font-semibold px-10">
            <BarChartHorizontal className="mx-2" />
            <h1>Turing Trader</h1>
          </h1>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>

          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Demo
            </NavigationMenuLink>
          </Link>

          <Button variant="outline" className="p-2 m-1">
            Register
          </Button>

          <Button variant="secondary" className="p-2 m-1">
            Login
          </Button>

          <DarkMode />
        </NavigationMenu>
      </div>
    </div>
  );
}
