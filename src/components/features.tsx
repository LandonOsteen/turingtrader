import { Button } from '@/components/ui/button';
import Tables from '@/components/demo-table';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/footer';
import { Card } from './ui/card';
import { Component1Icon } from '@radix-ui/react-icons';

export default function Features() {
  return (
    <div className="py-30 m-20">
      <div className="text-center py-30">
        <Badge variant="outline" className="m-3">
          Powered by Artificial Intelligence
        </Badge>

        <h1 className="m-2 scroll-m-20 text-xl font-bold lg:text-3xl">
          A complete toolkit for traders
        </h1>
        <h3 className="scroll-m-20 text-m tracking-tight m-2">
          Scan for opportunities, summarize news in bulk, get sentiment
          analysis.
        </h3>
        <div className="px-20 py-30 grid grid-cols-2 lg:grid-cols-3 align-bottom items-center">
          <Card className="p-5 m-1 hover:scale-105">
            <Component1Icon className="mb-2" />
            <h3 className="leading-5 text-l font-bold text-left">Search</h3>
            <p className="leading-5 text-s text-left">
              A.I. powered symbol research.
            </p>
          </Card>
          <Card className="p-5 m-1 hover:scale-105">
            <Component1Icon className="mb-2" />
            <h3 className="leading-5 text-l font-bold text-left">Sentiment</h3>
            <p className="leading-5 text-s text-left">
              Summarize analyst sentiments in seconds.
            </p>
          </Card>
          <Card className="p-5 m-1 hover:scale-105">
            <Component1Icon className="mb-2" />
            <h3 className="leading-5 text-l font-bold text-left">News</h3>
            <p className="leading-5 text-s text-left">
              A.I. dive and summary on latest symbol news.
            </p>
          </Card>
          <Card className="p-5 m-1 hover:scale-105">
            <Component1Icon className="mb-2" />
            <h3 className="leading-5 text-l font-bold text-left hover:grow-0">
              Fundamental
            </h3>
            <p className="leading-5 text-s text-left">
              Fundamental analysis summaries in seconds.
            </p>
          </Card>
          <Card className="p-5 m-1 hover:scale-105">
            <Component1Icon className="mb-2" />
            <h3 className="leading-5 text-l font-bold text-left">Technical</h3>
            <p className="leading-5 text-s text-left">
              Technical analysis summaries in seconds.
            </p>
          </Card>
          <Card className="p-5 m-1 hover:scale-105">
            <Component1Icon className="mb-2" />
            <h3 className="leading-5 text-l font-bold text-left">Scan</h3>
            <p className="leading-5 text-s text-left">
              Market wide scans and social scans.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
