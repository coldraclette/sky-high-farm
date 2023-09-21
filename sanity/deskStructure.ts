export const structure = (S: any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Landing Page')
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                    .title('Landing Page')
                ),

              S.listItem()
                .title('Programming Page')
                .child(
                  S.document()
                    .schemaType('programmingPage')
                    .documentId('programmingPage')
                    .title('Programming Page')
                ),

              S.listItem()
                .title('About Page')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('About Page')
                ),

              S.listItem()
                .title('Team Page')
                .child(
                  S.document()
                    .schemaType('teamPage')
                    .documentId('teamPage')
                    .title('Team Page')
                ),

              S.listItem()
                .title('Support Page')
                .child(
                  S.document()
                    .schemaType('supportPage')
                    .documentId('supportPage')
                    .title('Support Page')
                ),

              S.listItem()
                .title('Job Page')
                .child(
                  S.document()
                    .schemaType('jobPage')
                    .documentId('jobPage')
                    .title('Job Page')
                ),

              S.listItem()
                .title('Contact Page')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .title('Contact Page')
                ),

              S.listItem()
                .title('Volunteer Page')
                .child(
                  S.document()
                    .schemaType('volunteerPage')
                    .documentId('volunteerPage')
                    .title('Volunteer Page')
                ),

              S.listItem()
                .title('Grants Page')
                .child(
                  S.document()
                    .schemaType('grantsPage')
                    .documentId('grantsPage')
                    .title('Grants Page')
                ),

              S.listItem()
                .title('Food Access Page')
                .child(
                  S.document()
                    .schemaType('foodaccessPage')
                    .documentId('foodaccessPage')
                    .title('Food Access Page')
                ),

              S.listItem()
                .title('Fellowship Page')
                .child(
                  S.document()
                    .schemaType('fellowshipPage')
                    .documentId('fellowshipPage')
                    .title('Fellowship Page')
                ),
            ])
        ),
      S.listItem()
        .title('Grids')
        .child(
          S.list()
            .title('Grids')
            .items([
              S.listItem()
                .title('Programming Projects')
                .child(
                  S.documentTypeList('programmingProject')
                    .title('Programming Projects')
                    .filter('_type == "programmingProject"')
                ),

              S.listItem()
                .title('Special Projects')
                .child(
                  S.documentTypeList('specialProject')
                    .title('Special Projects')
                    .filter('_type == "specialProject"')
                ),

              S.listItem()
                .title('Team Members')
                .child(
                  S.documentTypeList('teamMember')
                    .title('Team Members')
                    .filter('_type == "teamMember"')
                ),

              S.listItem()
                .title('Organizations')
                .child(
                  S.documentTypeList('organizations')
                    .title('Organizations')
                    .filter('_type == "organizations"')
                ),

              S.listItem()
                .title('Fellowships')
                .child(
                  S.documentTypeList('fellow')
                    .title('Fellowship')
                    .filter('_type == "fellow"')
                ),

              S.listItem()
                .title('Grants')
                .child(
                  S.documentTypeList('grant')
                    .title('Grants')
                    .filter('_type == "grant"')
                ),
            ])
        ),

      // page settings
      S.listItem()
        .title('Page Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
            .title('Page Settings')
        ),

      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'landingPage',
            'programmingPage',
            'aboutPage',
            'teamPage',
            'supportPage',
            'jobPage',
            'contactPage',
            'volunteerPage',
            'grantsPage',
            'foodaccessPage',
            'fellowshipPage',
            'programmingProject',
            'specialProject',
            'teamMember',
            'organizations',
            'fellow',
            'grant',
            'settings',
          ].includes(listItem.getId())
      ),
    ]);

// https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
// https://www.sanity.io/docs/manually-group-items-in-a-pane
