import {useRouter} from 'next/router';
import * as React from 'react';

export default function Custom404() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
  });

  return null;
}
