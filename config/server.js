module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('PUBLIC_URL', ''),
  ssl: env('SSL', ''),
  proxy: true,
  cors: {
    "enabled": false,
    "headers": "*"
  },
  admin: {
    auth: {
      url: env('PUBLIC_ADMIN_URL', '/'),
      secret: env('ADMIN_JWT_SECRET', ''),
      proxy: true,
    },
  },
  app: {
    keys: env.array('APP_KEYS', ["", "", "", ""]),
    proxy: true,
  },
});
