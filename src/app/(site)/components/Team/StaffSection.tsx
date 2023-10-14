import { composeClassNames } from '../../utils';
import StaffMembers from './StaffMembers';

interface StaffSectionProps {
  staff: any;
  type?: string;
  columns?: number;
}

export default function StaffSection({
  staff,
  type,
  columns,
}: StaffSectionProps) {
  return (
    <div className="mt-4 md:mt-0">
      <h2 className="text-size-1-bold mb-4 text-green md:mb-8">
        {staff.sectionTitle}
      </h2>
      {staff.members && staff.members.length !== 0 && (
        <div
          className={composeClassNames(
            'my-4 grid gap-6 md:my-8 md:grid-cols-2',
            {
              'lg:grid-cols-3': columns === 3,
              'lg:grid-cols-3 xl:grid-cols-4': columns === 4,
            }
          )}
        >
          {staff.members.map((member: any, index: number) => {
            return (
              <StaffMembers
                key={member.name + index}
                member={member}
                type={type}
              />
            );
          })}
        </div>
      )}
      {!staff.members && (
        <div className="text-size-1 mb-4 md:mb-8">Coming Soon</div>
      )}
    </div>
  );
}
