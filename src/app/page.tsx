import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <Button asChild>
        <Link href="/people">자 드가자!</Link>
      </Button>
    </main>
  );
}
