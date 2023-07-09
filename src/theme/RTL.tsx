import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { ReactNode } from 'react';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

export function RTL({ children }: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
