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
    userId: string;
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
  