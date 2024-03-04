export const applicationData = [
  {
    IdentityVerificationMethod: 'Pass',
    applicationId: '088199923',
    assigneeId: 'PL1234',
    applicants: [
      {
        firstName: 'John',
        lastName: 'Champ',
        middleName: 'Cena',
        primaryApplicantFlag: true,
        suffix: '',
        addresses: [
          {
            addressLine1: '13 Sliver Road',
            addressLine2: 'Apt-1414',
            state: 'WI',
            city: 'New York',
            zipCode: '12577',
            addressType: 'primary',
          },
          {
            addressLine1: '13 Sliver Road',
            addressLine2: 'Apt-1414',
            state: 'WI',
            city: 'New York',
            zipCode: '12577',
            addressType: 'MAILING',
          }
        ],
        phones: [
          {
            phoneNumber: '123-456-5678',
            phoneType: 'Mobile',
          },
        ],
        incomes: [
          {
            statedAnnualIncome: '10000',
            statedMonthlyIncome: '20120',
            incomeAmount: '4560',
          },
        ],
      },
      {
        firstName: 'Rock',
        lastName: 'D',
        middleName: 'Jsn',
        suffix: '',
        addresses: [
          {
            addressLine1: '14 Sliver Road',
            addressLine2: 'Apt-1515',
            state: 'WI',
            city: 'New York',
            zipCode: '12577',
            addressType: 'primary',
          },
        ],
        phones: [
          {
            phoneNumber: '123-456-9999',
            phoneType: 'Mobile',
          },
        ],
        incomes: [
          {
            statedAnnualIncome: '19999',
            statedMonthlyIncome: '30120',
            incomeAmount: '5560',
          },
        ],
      }
    ],
  },
];
