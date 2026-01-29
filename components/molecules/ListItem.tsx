import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

type ListItemProps = {
  title: string;      
  subtitle: string;     
  period: string;      
  description: string;  
  type?: 'experience' | 'studies';
  isLast?: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({ title, subtitle, period, description, isLast }) => {
  return (
    <li className="relative">
      {/* Card Container */}
      <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
        
        {/* Date Stamp - Rotated Badge */}
        <div className="absolute -top-3 -right-2 bg-emerald-300 text-black border-2 border-black px-3 py-1 font-mono font-bold text-sm transform rotate-2 shadow-sm flex items-center justify-center">
            <span className="transform -rotate-1 inline-block">{period}</span>
        </div>

        {/* Content */}
        <Heading level={3} className="text-xl font-bold mb-2 pr-24">{title}</Heading>
        
        <div className="mb-4">
          <span className="font-mono font-bold text-sm bg-black text-white px-2 py-1 inline-block">
            {subtitle}
          </span>
        </div>

        <Paragraph className="text-gray-700 text-sm leading-relaxed">
          {description}
        </Paragraph>
      </div>

      {/* Flow Chart Arrow (Only if not last) */}
      {!isLast && (
        <div className="absolute left-1/2 -bottom-8 w-1 h-8 bg-black -translate-x-1/2 z-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px]">
            {/* Arrow Head */}
            <div className="w-0 h-0 
              border-l-[8px] border-l-transparent
              border-r-[8px] border-r-transparent
              border-t-[12px] border-t-black">
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
