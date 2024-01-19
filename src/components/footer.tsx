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
import { Separator } from './ui/separator';
import { Component1Icon } from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <div className="sticky z-50 border-b-2 border-opacity-50">
      <Separator />
      <div className="flex flex-row items-center justify-center py-2">
        <NavigationMenu>
          <h1 className="flex align-middle text-xl font-semibold px-10">
            <Component1Icon className="text-primary w-5 h-5 m-1" />
            <h1>TuringTrader</h1>
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

          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>

          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Register
            </NavigationMenuLink>
          </Link>

          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Help
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>
      </div>
    </div>
  );
}
