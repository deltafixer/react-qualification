export interface IGitHubRepo {
  // has a lot of fields, I don't need all of them
  name: string;
  created_at: string;
  updated_at: string;
  owner: {
    avatar_url: string;
  };
}
