import StaffMembers from './StaffMembers';

interface StaffSectionProps {
  staff: any;
  type?: string;
}

export default function StaffSection({ staff, type }: StaffSectionProps) {
  return (
    <div className="mt-4 md:mt-8">
      <h2 className="text-size-1-bold mb-5 text-green md:mb-8">
        {staff.sectionTitle}
      </h2>
      {staff.members && staff.members.length !== 0 && (
        <div className="grid grid-cols-1 justify-center gap-y-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
      {!staff.members && <div className="text-size-1">Coming Soon</div>}
    </div>
  );
}
