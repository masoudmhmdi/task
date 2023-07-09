export type IUserData = {
  payload: { username: string; password: string };
  response: {
    UserId: string;
    FullName: string;
    UserName: string;
    RoleId: string;
    RoleCaption: string;
    PersianFullName: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type ICity = {
  message: string;
  data: [
    {
      id: number;
      provinceId: number;
      name: string;
    }
  ];
};

export type IProvence = {
  message: string;
  data: {
    id: number;
    name: string;
  }[];
};
