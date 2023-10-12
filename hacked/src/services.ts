import * as privy from "@privy-io/server-auth";

type Services = {
  privyClient: privy.PrivyClient;
};

let services: Services | undefined = undefined;

export const getServices = async (config: {
  PRIVY_APP_ID: string;
  PRIVY_SECRET: string;
}): Promise<Services> => {
  if (!services) {
    const privyClient = new privy.PrivyClient(
      config.PRIVY_APP_ID,
      config.PRIVY_SECRET
    );
    services = { privyClient };
  }

  return services;
};
