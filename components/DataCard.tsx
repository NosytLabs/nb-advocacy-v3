import Link from "next/link";
import { TrendingDown, AlertTriangle, DollarSign, Activity, Home, Factory, Fish, TreePine, Shield, Zap, Users } from "lucide-react";

interface DataCardProps {
  value: string;
  label: string;
  sublabel?: string;
  color?: 'red' | 'gold' | 'neutral';
  className?: string;
  href?: string;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Child Poverty': <Users size={18} />,
  'doctor': <Activity size={18} />,
  'Doctor': <Activity size={18} />,
  'Power': <Zap size={18} />,
  'Homeless': <Home size={18} />,
  'Death': <AlertTriangle size={18} />,
  'Irving': <DollarSign size={18} />,
  'Bridge': <Factory size={18} />,
  'Infrastructure': <Factory size={18} />,
  'Salmon': <Fish size={18} />,
  'Glyphosate': <TreePine size={18} />,
  'ER': <Activity size={18} />,
  'Travel Nurse': <Shield size={18} />,
  'Media': <Shield size={18} />,
  'default': <TrendingDown size={18} />,
};

function getIcon(label: string): React.ReactNode {
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (key !== 'default' && label.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return categoryIcons.default;
}

export function DataCard({ value, label, sublabel, color = 'red', className = '', href }: DataCardProps) {
  const colorStyles = {
    red: {
      icon: 'text-red-500',
      value: 'text-red-500',
    },
    gold: {
      icon: 'text-yellow-500',
      value: 'text-yellow-500',
    },
    neutral: {
      icon: 'text-neutral-400',
      value: 'text-white',
    },
  };

  const styles = colorStyles[color];

  const cardContent = (
    <div className={`
      bg-neutral-900 
      border border-neutral-800
      rounded-lg p-5 
      transition-all duration-300
      group 
      ${href ? 'cursor-pointer hover:border-neutral-700' : ''}
      ${className}
    `}>
      {/* Icon */}
      <div className={`${styles.icon} opacity-40 group-hover:opacity-70 transition-opacity mb-3`}>
        {getIcon(label)}
      </div>
      
      {/* Value */}
      <div className={`${styles.value} text-3xl md:text-4xl font-bold tracking-tight leading-none mb-2`}>
        {value}
      </div>
      
      {/* Label */}
      <div className="text-white font-semibold text-sm uppercase tracking-wide mb-1">
        {label}
      </div>
      
      {/* Sublabel */}
      {sublabel && (
        <div className="text-neutral-400 text-xs leading-relaxed mt-2">
          {sublabel}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
