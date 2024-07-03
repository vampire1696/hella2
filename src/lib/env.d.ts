declare global {
  const my_name: string;
  namespace NodeJS {
    interface ProcessEnv {
      CONSUMER_SERCRET: string;
    }
  }
}
export {};
