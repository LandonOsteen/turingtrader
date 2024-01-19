import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Card } from '@/components/ui/card';

const stocks = [
  {
    symbol: 'AAPL',
    percentChange: '+1.23%',
    consensusRating: 'Buy',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'MSFT',
    percentChange: '+0.75%',
    consensusRating: 'Buy',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'AMZN',
    percentChange: '-0.45%',
    consensusRating: 'Hold',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'TSLA',
    percentChange: '+2.15%',
    consensusRating: 'Buy',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'GOOGL',
    percentChange: '+0.65%',
    consensusRating: 'Buy',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'FB',
    percentChange: '-1.05%',
    consensusRating: 'Hold',
    exchange: 'NASDAQ',
  },
  {
    symbol: 'BABA',
    percentChange: '+1.80%',
    consensusRating: 'Buy',
    exchange: 'NYSE',
  },
];

export default function DemoTable() {
  return (
    <Card className="p-10">
      {/* <h1 className="text-2xl mb-3">A.I. Powered Stock Screeners</h1> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-primary font-bold w-[100px] text-left">
              Symbol
            </TableHead>
            <TableHead className="text-primary font-bold w-[100px] text-center">
              Change
            </TableHead>
            <TableHead className="text-primary font-bold w-[100px] text-center">
              Rating
            </TableHead>
            <TableHead className="text-primary font-bold w-[100px] text-right">
              Exchange
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.symbol}>
              <TableCell className="font-medium text-left">
                {stock.symbol}
              </TableCell>
              <TableCell className="w-[100px] text-center">
                {stock.percentChange}
              </TableCell>
              <TableCell className="w-[100px] text-center">
                {stock.consensusRating}
              </TableCell>
              <TableCell className="w-[100px] text-right">
                {stock.exchange}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
