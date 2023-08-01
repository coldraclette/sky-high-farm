export const teamPage = {
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    {
      name: "staffSections",
      title: "Staff Sections",
      description: "Sections of staff members. You can create multiple sections if needed.",
      type: "array",
      of: [
        {
          type: "object",
          title: "Staff Section",
          fields: [
            {
              name: "sectionTitle",
              title: "Section Title",
              description: "The title of this staff section.",
              type: "string",
            },
            {
              name: "members",
              title: "Staff Members",
              description: "Array of staff members in this section.",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "teamMember" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
