import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from './ui/card';
import { Component1Icon } from '@radix-ui/react-icons';
import DemoTable from './demo-table';

export default function FeatureLeft(props) {
  return (
    <div className="px-20 py-30 grid grid-cols-1 lg:grid-cols-2 align-bottom items-center">
      <div className="py-30 m-20">
        <div className="text-left py-30">
          <Badge variant="outline" className="my-3">
            Be Faster Than Other Traders
          </Badge>
          <h1 className="text-4xl text-left mb-2">
            Lightning Fast Stock Research
          </h1>
          <h3 className="text-s">
            Simply enter a symbol name and get a detailed real-time analysis of
            current news, analyst ratings, technical analysis, fundamental
            analysis, ESG reports, and financial reports.
          </h3>
        </div>
      </div>
      <div>
        <DemoTable />
        {/* <img className="items-center" src={props.image} alt="" /> */}
      </div>
    </div>
  );
}
