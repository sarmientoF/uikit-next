import React, { AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import { classNames } from '../..'

export type AnchorProps = {
  className?: string
  to?: string
  href?: string
}

const AnchorComponent: React.FC<
  AnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  className = '',
  to = undefined,
  href = undefined,
  children,
  ...props
}) => {
  let baseClassName =
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'

    return <Link href={to ?? href ?? ""} {...props}>
    <a className={classNames(className, baseClassName)} >
    {children}
    </a>
  </Link>
}

export const Anchor = Object.assign(AnchorComponent, {})

export default Anchor
