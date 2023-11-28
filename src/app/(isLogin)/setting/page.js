
import React from 'react';

import { EditUser } from '@/components/EditUser';
import { Navigation } from '@/components/Navigation';

export default function page() {
  return (
    <div>
    <Navigation data={true}/>
    <EditUser/>
    </div>
  )
}
