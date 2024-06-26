import Link from 'next/link';

import TeamPortrait from '../Images/TeamPortrait';

interface StaffMembersProps {
  member: any;
  type?: string;
}

export default function StaffMembers({ member, type }: StaffMembersProps) {
  if (member.slug) {
    return (
      <Link href={`/${type}/${member.slug.current}`}>
        <TeamPortrait
          image={member.image}
          name={member.name}
          jobTitle={member.jobTitle}
        />
      </Link>
    );
  }

  return (
    <div>
      <TeamPortrait
        image={member.image}
        name={member.name}
        jobTitle={member.jobTitle}
      />
    </div>
  );
}
