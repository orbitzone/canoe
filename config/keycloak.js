module.exports = ({ env }) => ({
    // client ID configured in Keycloak
    clientId: 'strapi-staging',
  
    // if the client access type is set to "confidential" in keycloak, add the client secret here. otherwise, don't set this value.
    clientSecret: env('KEYCLOAK_SECRET', ''),
  
    // auth endpoint, right value comes from Keycloak
    authEndpoint:
      "https://identity.dev.myvcl.com/realms/viewdeck/protocol/openid-connect/auth",
  
    // token endpoint, right value comes from Keycloak
    tokenEndpoint:
      "https://identity.dev.myvcl.com/realms/viewdeck/protocol/openid-connect/token",
  
    // user info endpoint, right value comes from Keycloak
    userinfoEndpoint:
      "https://identity.dev.myvcl.com/realms/viewdeck/protocol/openid-connect/userinfo",
  
    // logout endpoint, right value comes from Keycloak
    logoutEndpoint:
      "https://identity.dev.myvcl.com/realms/viewdeck/protocol/openid-connect/logout",
  
    // redirect URI after Keycloak login, should be the full URL of the Strapi instance and always point to the `keycloak/callback` endpoint
    redirectUri: "https://desksurfer-admin.dev.myvcl.com/keycloak/callback",
  
    // default URL to redirect to when login process is finished. In normal cases, this would redirect you back to the application using Strapi data
    redirectToUrlAfterLogin: "https://desksurfer-admin.dev.myvcl.com/api/todos",
  
    // setting these allows the client to pass a `redirectTo` query parameter to the `login` endpoint. If the `redirectTo`
    // parameter is permitted by this array, after login, Strapi will redirect the user to it. Leave empty to disable
    // the functionality.
    permittedOverwriteRedirectUrls: [
      "https://desksurfer-admin.dev.myvcl.com/"
    ],
  
    // URL to redirect to after logout
    redirectToUrlAfterLogout: "https://desksurfer-admin.dev.myvcl.com/",
    debug: true
  });
  