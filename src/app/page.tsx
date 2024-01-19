import Image from 'next/image';
import { Button } from '@/components/ui/button';
import DarkMode from '@/components/dark-mode';
import NavBar from '@/components/navbar';
import CardForm from '@/components/card';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { badgeVariants } from '@/components/ui/badge';
import Footer from '@/components/footer';
import Features from '@/components/features';
import FeatureLeft from '@/components/feature-left';
import FeatureRight from '@/components/feature-right';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <div className="text-center">
          <Badge variant="outline" className="m-3">
            Powered by Artificial Intelligence
          </Badge>

          <h1 className="m-2 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            A.I. Powered Trading Research
          </h1>
          <h3 className="scroll-m-20 text-l m-2">
            Lightning fast financial research for active and passive traders.
          </h3>
          <Button className="m-2 p-5 mb-10">Create A Free Account</Button>
          <Button variant="outline" className="m-2 p-5 mb-10">
            Login
          </Button>
          <div className="m-10">
            <Features />
          </div>
          <FeatureLeft
            image={
              'https://framerusercontent.com/images/q289mZtukrCVyuOEXEBPYEdjNXc.png?scale-down-to=1024'
            }
          />
          <FeatureRight
            image={
              'https://framerusercontent.com/images/NqO9meW9HeX05H8ZgW4XFITuLrA.png?scale-down-to=512'
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
