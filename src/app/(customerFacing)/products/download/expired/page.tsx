import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Expired() {
  return (
    <>
      <h1 className="text-4xl mb-4">Download link expired</h1>
      <Link href="/orders" className={buttonVariants({ variant: 'default', size: 'lg' })}>
        Get New Link
      </Link>
    </>
  )
}
