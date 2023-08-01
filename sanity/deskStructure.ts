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
                .title('Programming')
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
          ].includes(listItem.getId())
      ),
    ]);

// https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
// https://www.sanity.io/docs/manually-group-items-in-a-pane
