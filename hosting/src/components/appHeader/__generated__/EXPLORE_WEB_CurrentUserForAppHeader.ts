/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EXPLORE_WEB_CurrentUserForAppHeader
// ====================================================

export interface EXPLORE_WEB_CurrentUserForAppHeader_currentUser {
  __typename: "User";
  id: string;
  email: string;
  name: string | null;
}

export interface EXPLORE_WEB_CurrentUserForAppHeader {
  currentUser: EXPLORE_WEB_CurrentUserForAppHeader_currentUser | null;
}
