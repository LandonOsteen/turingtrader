import Image from 'next/image';
import { Button } from '@/components/ui/button';
import DarkMode from '@/components/dark-mode';
import FourCards from '@/components/four-cards';
import NavBar from '@/components/navbar';
import CardForm from '@/components/card';
import Tables from '@/components/table';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to Turing Trader</h1>
          <h1 className="text-l font-light">
            Lightning fast financial research for active and passive traders.
          </h1>
          <div className="m-10">
            <Separator />
            <FourCards />
            <Separator />
          </div>
        </div>
      </main>
    </div>
  );
}
