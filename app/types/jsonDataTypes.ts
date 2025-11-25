export type NavTextTypes = {};

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: {
    [k in keyof SubmitData]?: string[];
  };
  inputs?: SubmitData;
};

export type SubmitData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
};
