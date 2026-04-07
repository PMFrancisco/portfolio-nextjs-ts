import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return new ImageResponse(
    <div
      style={{
        background: '#047857', // emerald-700
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '8px solid black',
          backgroundColor: 'white',
          padding: '40px',
          boxShadow: '16px 16px 0px 0px rgba(0,0,0,1)',
          transform: 'rotate(-2deg)',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 20,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          {t('name')}
        </div>
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            fontSize: 40,
            fontWeight: 'bold',
            transform: 'rotate(2deg)',
          }}
        >
          {t('role')}
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
