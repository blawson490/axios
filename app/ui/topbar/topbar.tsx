import Breadcrumbs from './breadcumbs';
import { Breadcrumb } from './breadcumbs';

export default function TopBar({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <div className="flex w-full h-16 items-center justify-start bg-white p-4 border-b shadow-sm">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
}
