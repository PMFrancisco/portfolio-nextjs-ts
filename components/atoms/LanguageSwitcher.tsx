'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';
import { Button } from './Button';

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button
      onClick={toggleLocale}
      disabled={isPending}
      variant="outline"
      className="!px-3 !py-1 text-sm"
      aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {isPending ? '...' : locale === 'en' ? 'ES' : 'EN'}
    </Button>
  );
};
