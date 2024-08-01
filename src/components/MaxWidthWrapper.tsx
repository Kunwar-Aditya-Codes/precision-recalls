

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-[80rem] mx-auto', className)}>{children}</div>
  );
};
export default MaxWidthWrapper;
