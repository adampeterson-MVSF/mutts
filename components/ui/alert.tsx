'use client';

import * as React from 'react';

type AlertProps = React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'destructive' };

export function Alert({ ...props }: AlertProps) {
  return <div data-testid="ui-alert" role="alert" {...props} />;
}

export function AlertTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 {...props} />;
}

export function AlertDescription(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}
