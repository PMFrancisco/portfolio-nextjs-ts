'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

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
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-3 py-1 bg-black text-white font-mono text-sm font-bold border-2 border-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]"
      aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {isPending ? '...' : locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
};
