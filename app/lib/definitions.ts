// Define the Organization type
export type Organization = {
  orgId: string;
  orgName: string;
  orgDescription: string;
};

// Define the Team type
export type Team = {
  teamId: string;
  teamName: string;
  orgId: string;
  description: string;
};

// Define the User type
export type User = {
  id: string;
  userFirstName: string;
  userLastName: string;
  userPrincipalName: string;
  userDisplayName: string;
  department: string;
  jobTitle: string;
};

// Define the TeamUser type
export type TeamUser = {
  teamUserId: string;
  teamId: string;
  userId: string;
};

// Define a type that holds all placeholder data
export type PlaceholderData = {
  organizations: Organization[];
  teams: Team[];
  users: User[];
  teamUsers: TeamUser[];
};

export type LogEntry = {
  logId: string;
  createdDateTime: string; // ISO 8601 date-time string
  userDisplayName: string;
  userPrincipalName: string;
  userId: string;
  appId: string;
  appDisplayName: string;
  ipAddress: string;
  clientAppUsed: string;
  conditionalAccessStatus: string;
  isInteractive: number; // Assuming 1 for true, 0 for false
  riskDetail: string;
  riskLevelAggregated: string;
  riskLevelDuringSignIn: string;
  riskState: string;
  resourceDisplayName: string;
  resourceId: string;
  statusErrorCode: number;
  statusFailureReason: string;
  statusAdditionalDetails: string;
  deviceDetailDeviceId: string;
  deviceDetailDisplayName: string;
  deviceDetailOperatingSystem: string;
  deviceDetailBrowser: string;
  deviceDetailIsCompliant: number; // Assuming 1 for true, 0 for false
  deviceDetailIsManaged: number; // Assuming 1 for true, 0 for false
  deviceDetailTrustType: string;
  locationCity: string;
  locationState: string;
  locationCountryOrRegion: string;
  locationGeoCoordinatesLatitude: number;
  locationGeoCoordinatesLongitude: number;
};

export type UserEntry = {
  id: string;
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
};

export type FormattedUsersTable = {
  id: string;
  userFirstName: string;
  userLastName: string;
  userPrincipalName: string;
  userDisplayName: string;
  department: string;
  jobTitle: string;
};
