import { ReactNode } from 'react';
import Icon from '@/components/shared/Icon';

interface CardProps {
  icon?: string;
  title: string;
  higherHeader?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Card({ icon, title, higherHeader, children, className = '' }: CardProps) {
  return (
    <div
      className={`flex items-center flex-col h-full bg-white shadow-2xl p-6 md:p-10 ${className}`}
    >
      {icon && <Icon src={icon} className="w-18 h-18 mb-3 text-header" />}
      <div className={`${higherHeader ? 'md:h-20' : ''} flex items-center`}>
        <h4 className="text-header text-2xl lg:text-3xl text-center">
          {title}
        </h4>
      </div>
      <div className="bg-theme1 h-0.5 w-10 sm:w-12 mt-1 sm:mt-2"></div>
      {children}
    </div>
  );
}
