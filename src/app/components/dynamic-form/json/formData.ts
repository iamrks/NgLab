// $..applicants[?(@.primaryApplicantFlag==true)].addresses[?(@.addressType=="MAILING")].addressLine1
export const formData = [
  {
    taskId: 'T007',
    taskName: 'Confirm Address',
    taskStatus: 'PENDING',
    workingArea: [
      {
        jsonPath: '$..IdentityVerificationMethod',
        fieldName: 'IdentityVerificationMethod - OTP',
        editable: 'Y',
        required: 'Y',
        fieldType: 'dropdown',
        fieldValues: ['Pass', 'Fail', 'Did not complete'],
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].incomes[0].incomeAmount',
        fieldName: 'Income Amount',
        editable: 'Y',
        required: 'Y',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].firstName',
        fieldName: 'First Name',
        editable: 'Y',
        required: 'Y',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].lastName',
        fieldName: 'Last Name',
        editable: 'Y',
        required: 'Y',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].middleName',
        fieldName: 'Middle Name',
        editable: 'Y',
        required: 'Y',
      },
    ],
    relevantInfo: [
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].addresses[?(@.addressType=="MAILING")].addressLine1',
        fieldName: 'Address Line1',
        editable: 'N',
        required: 'N',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].addresses[?(@.addressType=="MAILING")].addressLine2',
        fieldName: 'Address Line2',
        editable: 'N',
        required: 'N',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].addresses[?(@.addressType=="MAILING")].city',
        fieldName: 'City',
        editable: 'N',
        required: 'N',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].addresses[?(@.addressType=="MAILING")].state',
        fieldName: 'State',
        editable: 'N',
        required: 'N',
      },
      {
        jsonPath: '$..applicants[?(@.primaryApplicantFlag==true)].addresses[?(@.addressType=="MAILING")].zipCode',
        fieldName: 'Zip Code',
        editable: 'N',
        required: 'N',
      },
    ],
    referralRules: [
      {
        code: 'A014',
        description: 'BBB',
        referralRuleStatus: 'ACTIVE',
      },
      {
        code: 'A013',
        description: 'AAA',
        referralRuleStatus: 'ACTIVE',
      },
    ],
    category: 'OPERATIONS_SUPPORTS',
    taskCreatedTimeStamp: '2024-02-14',
  },
  // Add other tasks here as needed
];
