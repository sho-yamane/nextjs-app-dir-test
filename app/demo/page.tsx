import { Suspense } from 'react';

import { currentPageState } from 'nrstate/PageStateServer';
import PageStateProvider from 'nrstate-client/PageStateProvider';
import { PageStateDemo, initialPageStateDemo, pathDemo } from './PageStateDemo';

import A from './A';
import B from './B.client';
import B_server from './B.server';
import C from './C';
import D from './D';
import E from './E.client';
import E_server from './E.server';

export default async function Page() {
  return (
    <>
      <PageStateProvider
        current={currentPageState<PageStateDemo>(
          initialPageStateDemo,
          pathDemo,
        )}
      >
        <div className="p-5">
          <div className="float-left w-full rounded p-5 sm:w-1/4 sm:outline-dashed">
            <C />
            <E>
              <Suspense fallback={<div>⏳</div>}>
                <E_server />
              </Suspense>
            </E>
          </div>
          <div className="float-right w-full rounded p-5 sm:w-3/4 sm:outline-dashed">
            <div className="rounded p-5 outline-dashed">
              <A />
              <D />
            </div>
            <B>
              <Suspense fallback={<div>⏳</div>}>
                <B_server />
              </Suspense>
            </B>
          </div>
        </div>
      </PageStateProvider>
    </>
  );
}
