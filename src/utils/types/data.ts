export type TInfoData = {
  fullName: string;
  tel: string;
  email: string;
};

export type TInfoDataWPassword = TInfoData & {
  password?: string;
};
