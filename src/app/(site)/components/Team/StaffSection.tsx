import StaffMembers from './StaffMembers';

interface StaffSectionProps {
  staff: any;
}

export default function StaffSection({ staff }: StaffSectionProps) {
  return (
    <div className="mt-4 md:mt-8">
      <h2 className="text-size-1-bold mb-5 text-green md:mb-8">
        {staff.sectionTitle}
      </h2>
      <div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {staff.members.map((member: any) => (
          <StaffMembers key={member._key} member={member} />
        ))}
      </div>
    </div>
  );
}
