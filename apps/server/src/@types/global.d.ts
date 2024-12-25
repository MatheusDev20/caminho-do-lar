declare namespace NodeJS {
  interface ProcessEnv {
    LOCAL_API_URL: string;
    PORT: number;
    DATABASE_URL: string;
    SECRET_JWT_LOGIN: string;
    SECRET_FORGOT_PASSWORD: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    BUCKET_NAME: string;
    ETHEREAL_MAIL_USER: string;
    ETHEREAL_MAIL_PASS: string;
  }
}
