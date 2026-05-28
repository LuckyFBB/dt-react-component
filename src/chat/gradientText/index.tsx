import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface IGradientTextProps {
    className?: string;
    gradient?: boolean;
}

export default function GradientText({
    className,
    gradient,
    children,
}: React.PropsWithChildren<IGradientTextProps>) {
    return <span className={classNames(gradient && 'gradient-text', className)}>{children}</span>;
}
